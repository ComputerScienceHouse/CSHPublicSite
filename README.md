# CSHPublicSite - [csh.rit.edu](https://csh.rit.edu)

The public facing website for [Rochester Institute of Technology](https://rit.edu/)'s [Computer Science House](https://csh.rit.edu).

## Overview

This site is written using [Jekyll](https://jekyllrb.com/), a static site generator built with Ruby, and uses Sass and JavaScript ES6.

## Local Development

Build the container:  `docker build -t cshpublicsite .`  
Run the container: `docker run -p 4000:80 cshpublicsite`  
You will be able to access the site at http://localhost:4000.

You can either edit files in the container, or rebuild the container when you want to test changes.

## Contributing

1. [Fork](https://help.github.com/en/articles/fork-a-repo) this repository
    - Create a new [git branch](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) if your change is more than a small tweak (`git checkout -b BRANCH-NAME-HERE`)
3. Make your changes locally, commit, and push to your fork
4. Create a [Pull Request](https://help.github.com/en/articles/about-pull-requests) on this repo for our Webmasters to review

## Questions/Concerns

Please file an [Issue](https://github.com/ComputerScienceHouse/CSHPublicSite/issues/new) on this repository or contact [webmaster@csh.rit.edu](mailto:webmaster@csh.rit.edu) with inquiries about the site.
