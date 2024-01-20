# CSHPublicSite - [csh.rit.edu](https://csh.rit.edu)

The public facing website for [Rochester Institute of Technology](https://rit.edu/)'s [Computer Science House](https://csh.rit.edu).

## Overview

This site is written using [Jekyll](https://jekyllrb.com/), a static site generator built with Ruby, and uses Sass and JavaScript ES6.

## Local Development

#### Prerequisites:

1. [Docker](https://docker.com) or [Podman](https://podman.io)

#### Instructions

First, run the following command in the directory containing the Dockerfile to build the container

```
podman build -t public-site .
```

Next, run the following command to start the container

```
podman run -p 8080:80 public-site:latest
```

The site should now serve locally at `localhost:8080`.

**Note**: If you are using Docker instead of Podman, replace `podman` in each command with `docker`

## Contributing

1. [Fork](https://help.github.com/en/articles/fork-a-repo) this repository
   - Optionally create a new [git branch](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) if your change is more than a small tweak (`git checkout -b BRANCH-NAME-HERE`)
2. Make your changes locally, commit, and push to your fork
3. Create a [Pull Request](https://help.github.com/en/articles/about-pull-requests) on this repo for our Webmasters to review

## Questions/Concerns

Please file an [Issue](https://github.com/ComputerScienceHouse/CSHPublicSite/issues/new) on this repository or contact [webmaster@csh.rit.edu](mailto:webmaster@csh.rit.edu) with inquiries about the site.
