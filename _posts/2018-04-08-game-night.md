---
layout: post
title: Game Night
date: 2018-04-08
categories: projects
description: A Board and Card Games Database
author: Michael Francis
author-image: https://avatars0.githubusercontent.com/u/4574480?s=460&v=4
author-bio: First Year Computer Science Masters Student at Rochester Institute of Technology
author-email: maf1144@rit.edu
author-social:
    github: https://github.com/mfrancis95
    linkedin: https://www.linkedin.com/in/mfrancis95/
---

## Background

In the Fall of 2017, I created a Slack channel for Computer Science House called **#game-night** (formerly known as **#card-games**). The purpose of the channel was to help the organization's members get together to play many of the fun board and card games owned by CSH. As of the Spring of 2018, the channel has really been taking off. Seeing that rise in popularity, I decided to do more with this neat corner of CSH and develop a web application that would benefit those who frequented the game nights and the organization as a whole.

## Introducing Game Night

I created a fully searchable database of our available games called **[Game Night](https://game-night.csh.rit.edu)**. When landing on the home page, the web application lists out all of the games in the database, but since it could be a lot to scroll through, there are ways in which the results can be filtered down.

The site provides a search field at the top to help users match games in the database that contain a certain keyword or string. If one happens to be familiar with regular expressions, they can use those in their queries. For example, searching with the query **b** will match all games that contain a **b** in their name, and searching with the regex query **^b** will match all games that start with a **b**. These queries are case-insensitive.

In a situation where a number of people have gathered together and would like to figure out which games support that number of players, there is an additional search option for doing just that. By clicking on the button next to the search field, a small menu will appear with a dropdown selection for choosing the number of players. Since each game in the database has properties that represent the minimum and maximum number of players it supports, all the games returned in this query will be those that have the user-specified number of players fall within those ranges. This filtering option can be combined with the textual search option.

Lastly, in that same menu there is a button for retrieving a random game from the database. This random option can be filtered by the aforementioned search options too.

## The RESTful API

I made sure from the very beginning that **Game Night** would have a RESTful API exposed for CSH members to use. The API endpoint starts at **[https://game-night.csh.rit.edu/api](https://game-night.csh.rit.edu/api)**. Similar to the index page without a search query, it returns all of CSH's games, but in JSON format. The API can be filtered by adding on URL query parameters such as **name** and **players** to the end. An example would be **[https://game-night.csh.rit.edu/api?players=10](https://game-night.csh.rit.edu/api?players=10)**, which returns all games in JSON format that support 10 players. The API endpoint for retrieving a random game is also available at **[https://game-night.csh.rit.edu/api/random](https://game-night.csh.rit.edu/api/random)** and is filterable in the same way.

## The Technology Stack

The primary tools I used to develop this web application were Python, Bootstrap 4, Flask and MongoDB. I had never used Flask before, but I was familiar with the similar Express framework used in Node.js. Going from Express to Flask, I grew to absolutely love the Flask framework even more than Express. I found its methodology of using decorators to handle responses to URL routes very elegant. I decided to use MongoDB over the more common MySQL or PostgreSQL for a few reasons:

1. It was an opportunity to learn something new.
2. Since I was only storing games in the database and there were no dependencies on other types of data, I did not need to make use of features offered by typical SQL-based relational database management systems such as foreign keys and joins.
3. MongoDB stores data in a format almost identical to JSON called BSON, meaning it is simpler to translate that to a format suitable for rendering in a view or returning in a RESTful API. Using a SQL-based RDMS typically requires an ORM.

Like many other CSH services, **Game Night** is behind OIDC authentication.

## Future Plans

A project like this has a lot of room for augmentation, and I plan on continuing work on it throughout the remainder of my time at RIT. Some features I've already thought about implementing are:

1. A way for users to upload games to the database through the web interface. Currently, only I can upload games.
2. Including games that are owned by individual CSH members. If the above feature were implemented, then a user uploading a game could specify whether they own it or it belongs to floor.
3. Keeping track of games that are up for trade or being borrowed. If a member would like to borrow a game to use outside of CSH for some time, there should be a way of updating that game's entry in the database to show that it's currently in use by someone.

Any changes made will be pushed to the project's **[GitHub repository](https://github.com/mfrancis95/game-night)**.

## Special Thanks

Thank you to Jordan for creating my OIDC client credentials and thank you to Zoe for helping me compile the initial list of the games.