---
layout: post
permalink: /:categories/:title:output_ext
title: Resume Review
date: 2018-04-30
categories:
    - projects
description: A webapp to upload resumes and review those of your peers
image: https://csh.rit.edu/~ram/resumes/resume.png
image-sm: https://csh.rit.edu/~ram/resumes/resume.png
author: Ram Zallan
author-image: https://avatars3.githubusercontent.com/u/5818258
author-bio: Second year Computer Science major, full stack software engineer. ramzallan.me
author-email: ram@csh.rit.edu
author-social:
    github: https://github.com/ramzallan
    linkedin: https://linkedin.com/in/ramzallan
---

### Overview
[Resume Review](https://resumes.csh.rit.edu) is a web app written for CSHers to upload their resumes and receive feedback on them.
Members can prepare for career fairs, company visits, and job applications by running their resumes by their peers, requesting specific changes or just asking for general opinions.

The site allows for the upload of PDF files, and [reinforces good file naming practices](https://github.com/RamZallan/resume-review/blob/d3ca7f68bf940e5aeaea42061b5278369b89a90d/routes/upload.js#L29).
Members can comment on posts, and comments can be threaded to allow for direct responses to feedback.
Once posted, users can leave comments on their own resumes to act as a description, if they want to denote things like past versions, recent changes, etc.
Members can also delete their own resumes or comments if they choose to.

![The homepage of Resume Review](https://csh.rit.edu/~ram/resumes/homepage.png)

The homepage shows a list of recently posted resumes, so users can browse through people looking for review on their resumes.


### Technical Details
Resume Review is the first project that I've made using [Express](https://expressjs.com/), a Node.js framework.
It runs on CSH's OpenShift Origin cluster, and uses our internal S3 to store files.
The site uses a PostgreSQL database for storing resume metadata and comments.
It's also the first Node.js project to use CSH's OpenID Connect authentication.

Resume Review can be found at [resumes.csh.rit.edu](https://resumes.csh.rit.edu), and even though the site itself is behind CSH authentication, its source code is open source on [GitHub](https://github.com/ramzallan/resume-review/).
