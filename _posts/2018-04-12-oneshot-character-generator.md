---
layout: post
title: One Shot Character Generator
date: 2018-04-12
categories:
  - projects
description: D&D Character Generator
author: Kevin Schwenk
author-bio: Second year CS major
author-email: kss3800@rit.edu
author-social:
  github: https://github.com/mouseexe
  website: http://kevinschwenk.com
---
## Why it exists:

I play in a lot of D&D one shot sessions, and I was sick and tired of wasting brain cells on character ideas I would only use for about 6 hours and then never again. This website will roll stats, select a race, and finally a class with subclass for you, all at the click of a button.

## How it's built:

I used a Python backend to roll stats and select optimal character options. I used Flask to integrate my backend with a simple HTML page and simple CSS to make it a bit prettier. I used a modified version of the Colville character generation method, which involves rolling 4d6 dropping the lowest 6 times, and using each roll down the line of stats (Strength first, then Dexterity, and so on). After the stats have been rolled, it looks at the two highest stats and assigns a race based on those. Finally, it again compares the stats to pick a class well suited to the current character.

## Challenges it presented:

Before I started this project, I was unfamiliar with web development, so that was a big learning experience. The longer I worked on the website, the more comfortable I felt with making changes and improving the design. On the back end, I encountered an issue with code readability when I tried to automatically select a race for the player. Python doesn't have switch statements, so I had to make something similar using a Python dictionary. The project was relatively straightforward once I solved the initial web issues and the switch problem, and was more focused on adding in new features.

## What could be redone:

I had to use a Python dictionary as a form of "pseudo-switch," which feels wrong to me. I can't find a better solution that doesn't involve a complex series of conditionals. I'd like to refactor the code to be a lot cleaner overall, and I plan on doing so over the summer. I also plan on adding in random background generation, and potentially automatic backstory details as well.

[Create a character](http://charactergen.win)

[View the code](https://github.com/mouseexe/OneShotCharacterGenerator)
