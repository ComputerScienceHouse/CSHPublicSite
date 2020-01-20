---
layout: post
title: Alexa RSS Skill
date: 2018-01-22
categories:
  - projects
description: Alexa Skill that reads out tags from an RSS Feed
image:
image-sm:
author: Fred Rybin
author-image: https://avatars0.githubusercontent.com/u/17693407?s=460&v=4
author-bio: First Year Computing Security student
author-email: fredrybin@gmail.com
author-social:
  github: https://github.com/frybin
  linkedin: https://www.linkedin.com/in/frybin/
---

The [Alexa RSS Skill](https://github.com/frybin/Alexa-RSS-Skill) is an Alexa skill, which is an app for Amazon's Alexa platform, that reads content in tags from an RSS Feed. It works by asking the user for an input for which RSS Feed they would like hear and then from the user's input it reads out the appropriate feed. The data for the different feeds like that name and links to the feeds are all stored in MySQL. Due to the skill needing to pull information from a database, I decided to make a companion web app to go with it. The [RSS Companion App](https://github.com/frybin/RSS-Web-App) is a simple Python Flask web app that connects to the same MySQL database as the Alexa skill and lets the user add, edit, and delete RSS feeds from the database.

The Alexa RSS Skill and its companion app is the first big coding project that I have ever made. When I first started on this project, I had very little coding experience and had no knowledge on how Amazon Alexa and AWS Lambda worked. While working on this project I had learned how to use Git, GitHub, Node.js, Amazon AWS, and Python Flask. The skill went through many iterations until I finally understood how Amazon AWS Lambda and the Alexa Skill Builder worked and communicated with each other.  

All in all, I found this project enjoyable and it was a great learning experience. Though I am finished with this project, I plan to try to make another Alexa skill using another coding language like Python. Although I might now know the basics about making a skill, I could learn something new and have more fun troubleshooting through the problems that arise in coding projects.

You can see the all of the source for the Alexa Skill [here](https://github.com/frybin/Alexa-RSS-Skill) and for the web app [here](https://github.com/frybin/RSS-Web-App).
