---
title: "Debugging Error: NotPresent with Rust in Docker"
description: "A friend's Docker container was exiting with Error: NotPresent and no other information. I embarked on a deep dive for an ultimately simple cause."
layout: post
date: 2020-05-19
image: https://assets.csh.rit.edu/pubsite/projects/carbon.png
image-sm: https://assets.csh.rit.edu/pubsite/projects/carbon.png
author: Galen Guyer
author-image: https://cdn.galenguyer.com/img/avatars/headshot.jpg
author-email: chef@csh.rit.edu
author-social:
    github: https://github.com/galenguyer/
categories: [docker, rust]
---

<a href='https://galenguyer.com/blog/2020/05/19/docker-rust-notpresent'>Check out this post on Galen's blog!</a>

<p>Today, a friend posted the following snippet in Slack:</p>
<pre> [~/Documents/shelflife] [±docker✗] $ docker run -v -it --rm --name my-running-app shelflife-rust-docker
    Error: NotPresent</pre>
<p>The first guess was that they had deleted the docker image and forgot to rebuild it. That wasn't the case, leading me to dive into this cryptic error message that we assumed was some hidden Rust or Docker error. We weren't able to find any example of this error message for Rust or Docker online, so I knew this would be a fun challenge.</p>

<p>The first thing I did was to make sure the path to the binary was working, as it'd be silly if this wasn't working because <code>/usr/local/bin</code> wasn't in the container's PATH. I changed the last line in the Dockerfile from <code>CMD ["shelflife"]</code> to <code>ENTRYPOINT ["/usr/local/bin/shelflife"]</code>. The error persisted, which meant it wasn't a PATH error. Of course this couldn't be easy.</p>

<p>The next step in diagnosis was to get a shell on the container. That would typically be done via <code>docker exec</code>, but that only works on a running container, which we didn't have. To get around this, I changed the last line of the Dockerfile to <code>ENTRYPOINT ["/bin/bash"]</code>, which makes <code>docker run -it</code> drop you into an interactive bash shell. This means I could easily see what was going on and run commands from inside the container.</p>

<p>Now that I had a shell, I navigated to <code>/usr/local/bin/</code> and ran <code>./shelflife</code> to check if there was any output docker was hiding. Unfortunately, there wasn't. I was at roughly the same place as when I started - a cryptic error message and no idea where it was coming from. At least now I was decently sure it wasn't not a docker issue.</p>

<p>I'd run into issues with dynamically linked libraries not being installed in the past, so I used <code>ldd</code> (List Dynamic Dependencies) to make sure all the dependencies existed. Everything looked fine, and I double-checked by manually installing the library packages for everything <code>ldd</code> said was linked. Everything was already installed, but the error persisted.</p>

<p>The last thing I tried was installing <code>strace</code>, a tool for tracing system calls, and running <code>strace ./shelflife</code>. This gave me a huge output full of system calls, but near the bottom was something that looked familiar, the text "NotPresent". Now I knew I was on the right path! The relevant output that got me to the final answer was the following:</p>

<pre>getcwd("/usr/local/bin", 512)           = 15
statx(0, NULL, AT_STATX_SYNC_AS_STAT, STATX_ALL, NULL) = -1 EFAULT (Bad address)
statx(AT_FDCWD, "/usr/local/bin/.env", AT_STATX_SYNC_AS_STAT, STATX_ALL, 0x7ffc04639b10) = -1 ENOENT (No such file or directory)
statx(AT_FDCWD, "/usr/local/.env", AT_STATX_SYNC_AS_STAT, STATX_ALL, 0x7ffc04639930) = -1 ENOENT (No such file or directory)
statx(AT_FDCWD, "/usr/.env", AT_STATX_SYNC_AS_STAT, STATX_ALL, 0x7ffc04639750) = -1 ENOENT (No such file or directory)
statx(AT_FDCWD, "/.env", AT_STATX_SYNC_AS_STAT, STATX_ALL, 0x7ffc04639570) = -1 ENOENT (No such file or directory)
write(2, "Error: ", 7Error: )                  = 7
write(2, "NotPresent", 10NotPresent)              = 10
write(2, "\n", 1
)                       = 1
sigaltstack({ss_sp=NULL, ss_flags=SS_DISABLE, ss_size=8192}, NULL) = 0
munmap(0x7fb5000f2000, 8192)            = 0
exit_group(1)                           = ?
+++ exited with 1 +++</pre>

<p>There it is! Right before exiting, there's several checks for a <code>.env</code> file that all fail. This error didn't happen when run locally, because my friend already made a <code>.env</code> file. However, I never created one, and more critically, the Dockerfile never copied their version of the file into the image. Once we created a <code>.env</code> file and added <code>COPY .env .</code> to the Dockerfile, it started as intended! This wasn't an issue with Docker or Rust at all, but a library giving an unhelpful error message. We couldn't find any documentation of this online, so I hope this post might serve to help anyone else who runs into this issue!</p>
