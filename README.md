# Pubsite - [csh.rit.edu](https://csh.rit.edu)

The public facing website for [Rochester Institute of Technology](https://rit.edu/)'s [Computer Science House](https://csh.rit.edu).

## Overview

This site is built with [Hugo](https://gohugo.io/), a static site generator written in Go. It uses a custom in-repo theme (`themes/csh/`) written in plain CSS and vanilla JavaScript. See [`themes/csh/README.md`](themes/csh/README.md) for the theme's structure, layouts, and where content lives.

## Local Development

Run the dev server with live reload:

```sh
hugo server
```

The site is served at http://localhost:1313.

Page content lives in `content/` (Markdown) and `data/*.yaml` (structured/repeated content). A production build outputs to `public/`:

```sh
hugo --gc --minify
```

## Contributing

1. [Fork](https://help.github.com/en/articles/fork-a-repo) this repository
    - Create a new [git branch](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) if your change is more than a small tweak (`git checkout -b BRANCH-NAME-HERE`)
3. Make your changes locally, commit, and push to your fork
4. Create a [Pull Request](https://help.github.com/en/articles/about-pull-requests) on this repo for our Webmasters to review

## Questions/Concerns

Please file an [Issue](https://github.com/ComputerScienceHouse/pubsite/issues/new) on this repository or contact [webmaster@csh.rit.edu](mailto:webmaster@csh.rit.edu) with inquiries about the site.
