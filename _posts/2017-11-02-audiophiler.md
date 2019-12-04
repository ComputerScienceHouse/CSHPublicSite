---
layout: post
title:  Creating Audiophiler
date:   2017-11-02 21:25:00
categories: projects
description: Audiophiler, a neat python web app for serving music
author: Stephen Greene
author-image: https://avatars0.githubusercontent.com/u/17414243?s=460&v=4
author-bio: Second Year Computer Science Student at Rochester Institute of Technology and a System Administrator for CSH as well as KGCOE
author-email: purple@csh.rit.edu
author-social:
  github: https://github.com/sgreene570
---
[Audiophiler](https://github.com/sgreene570/audiophiler) is a Python Flask web app that serves audio files.
Audiophiler uses CSH's Ceph storage cluster to hold audio files and serves them through an easy to use API.
The Audiophiler API allows other house services to quickly retrieve a member's uploaded audio files.
When members come off of the NRH elevators and walk onto floor, they can tap their iButton against one of the
readers in the elevator lobby to load up songs on Audiophiler and play them aloud.

Audiophiler is the first web app that I've written entirely by myself.  While working on the project, I learned _a lot_ about
writing code for the web.  Within my web app, I leverage a Postgres database to store audio file information.  I also use
CSH's Ceph environment to hand out links to audio files, allowing for very fast file retrieval.  

Audiophiler went through many changes before I passed it as a major project, and is still being worked on now.  In my opinion, Audiophiler is a great example of what CSH computer resources are capable of.  The CSH OpenShift cluster lets me "deploy" my web app to the internet without any hassle.

In the future, I plan on cleaning up and optimizing Audiophiler. Recently, I have gotten some other CSHers to help me tweak my web app and offer feedback.
I look forward to working with more people on my project and creating something that house members will use for a while.
