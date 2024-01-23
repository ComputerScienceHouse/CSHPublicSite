# CSHPublicSite - [csh.rit.edu](https://csh.rit.edu)

The public facing website for [Rochester Institute of Technology](https://rit.edu/)'s [Computer Science House](https://csh.rit.edu).

## Overview

This site is written using [Jekyll](https://jekyllrb.com/), a static site generator built with Ruby, and uses Sass and JavaScript ES6.

## Local Development

#### Prerequisites:

1. [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
2. [Bundler](https://bundler.io/) (`gem install bundler`)

#### Instructions

1. `bundle install`
2. Add necessary environment variables (they MUST be defined!!!):
   - `export CSHPUBSITE_ASSETS_URL="https://assets.csh.rit.edu/pubsite"`
   - `export CSHPUBSITE_S3_URL="https://s3.csh.rit.edu"`
3. `bundle exec jekyll serve`

The site should now serve locally at `localhost:4000`, and auto-build when you change/create files in the repo!

### Running in a container

To run this site in a container, make sure you have either [Podman](https://podman.io) or [Docker](https://docker.com) installed.

First, build the container with the following command

```
podman build -t public-site .
```

Then, run the container with the following command

```
podman run -p 8080:80 public-site:latest
```

The site should now serve locally at `localhost:8080`. Note that it will not update when you make changes. You will have to stop the container and rebuild it to see your changes

## Contributing

1. [Fork](https://help.github.com/en/articles/fork-a-repo) this repository
   - Optionally create a new [git branch](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) if your change is more than a small tweak (`git checkout -b BRANCH-NAME-HERE`)
2. Make your changes locally, commit, and push to your fork
3. Create a [Pull Request](https://help.github.com/en/articles/about-pull-requests) on this repo for our Webmasters to review

## Questions/Concerns

Please file an [Issue](https://github.com/ComputerScienceHouse/CSHPublicSite/issues/new) on this repository or contact [webmaster@csh.rit.edu](mailto:webmaster@csh.rit.edu) with inquiries about the site.
