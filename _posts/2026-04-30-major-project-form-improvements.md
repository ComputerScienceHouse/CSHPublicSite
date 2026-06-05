---
layout: post
title: Major Project Form Updates
date: 2026-04-30
categories:
  - projects
description: "Making it easier for members to show off their projects!"
image: /projects/new-mp-form.png
image-sm: /projects/new-mp-form.png
author: Ella Soccoli
author-image: https://profiles.csh.rit.edu/image/ella
author-email: ella@csh.rit.edu
author-social:
  github: https://github.com/pikachu0542
  linkedin: https://www.linkedin.com/in/ella-soccoli/
---

## Overview

Every Active Member of CSH is required to complete at least one "major project" every year, as a means of getting members to work on cool stuff outside of their classes. However, when E-Board goes to verify the completion of this requirement, they often find that the member has not provided enough information for them to be able to make an informed decision. 

The most common pieces of information that E-Board members have to ask people for are:

1. How long did you spend on this project?
2. What did you learn from this / what skills did you apply?
3. Is the source code public / do you have any links that we can look at?
4. Do you have any images or a demo of the project?

All four of those questions can provide E-Board with valuable information about the project, and every member submitting a project should have to answer those questions. 

## How it works

The major project form is located inside of CSH's membership portal, [Conditional](https://github.com/ComputerScienceHouse/conditional). The form is pretty simple, basically just being a standard HTML form on the frontend that, when submitted, calls an API route that parses the data provided by the user and sends it to the database. In order to make this work, changes need to be made to all 3 components of the project (frontend, backend, database). However, none of the changes seem too complicated, so this shouldn't be too difficult overall.

### Schema Changes

While I initially thought that the schema changes would just be adding a couple of columns to the existing `major_projects` table, I realized that tracking skills is a bit more complicated. I opted to create a new table, called `major_project_skills` that tracks a project id and a skill. This acts as a join table, allowing the database to track many projects that each will have one or more skill(s). The code for this was pretty simple, and although I have never worked with SQLAlchemy before, I was able to easily implement this using the models for other tables as a reference.

### Backend Logic

The backend logic was not super complicated, but due to it being my first time using SQLAlchemy, it took some time for me to get a proper understanding of how the logic worked and what exactly I needed to add. The most challenging aspect for me was the fact that I needed to figure out how SQLAlchemy's abstracted queries worked, and how to write one for my new schema. I am quite comfortable writing raw SQL, and abstractions like this usually just make it more confusing to me, so even though I knew exacly what the SQL query needed to look like, it took some time for me to figure out how to build an equivalent query with SQLAlchemy.

### Frontend UI

Adding the new form fields to the frontend was by far the most tedious part of this endeavor. I was not the first person to attempt to make these form changes, and I actually was able to use a frontend design made by [Tyler Allen](https://github.com/tallen42) in September of 2024 as a starting point. Their previous work had a nearly complete frontend, but never updated the backend to support the new frontend. With this as my starting point, and then made some tweaks and quality of life improvements to make the overall user experience smoother. The biggest roadblock I encountered here was how tedious the trial and error process was. Since I was running the application in a Docker compose, every time I made any changes, I had to fully rebuild the container, leading to a lot of time spent sitting and waiting. Not to mention the frustration that comes with CSS not doing what it is theoretically supposed to be doing.


## Challenges

The biggest challenge I encountered while working on this was dealing with database migrations. In order to develop and test locally, I set up a local database in the docker compose, and then pulled data from the dev database into my local database. In doing this, however, it caused issues with the migrations, because the dev database expected different migration identifiers than what my local clone had.

This led me to spending many hours fighting with migrations, trying to figure out why i couldnt migrate or update my database, and wiping and repopulating my local database a couple times. In addition, I was working on this over the span of roughly a month, and in the time that I was working on my changes, other people got other changes merged that also involved database changes. That meant that I had to update my branch, and in order to do that, I had to deal with conflicting migrations. This was similarly frustrating to deal with, and there were 2 different occasions when I decided to fully reset my branch back to dev because that was easier than trying to fix the conflicting migrations the proper way.

## What I Learned

I learned a ton from this whole process. I gained a better understanding of how Flask works, and learned about SQLAlchemy for the first time. The experience working with the database and migrations, while quite frustrating at the time, was incredibly valuable, because I learned how database migrations actually work and the purpose of them. Overall, this was a great experience with contributing to an existing project. I had previously been terrified of working on Conditional, because I didn't like Flask and always heard about how bad and unmaintainable the codebase is. However, after working on it myself, I realize that it was not nearly as bad as I thought it would be. I definitely had my fair share of challenges, but I don't think it was nearly as bad to work with as it was always made out to be.