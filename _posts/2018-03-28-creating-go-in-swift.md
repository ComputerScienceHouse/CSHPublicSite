---
layout: post
title: Creating Go in Swift
date: 2018-03-28
categories:
    - projects
description: A functional version of Go in Swift, using SpriteKit
image: csh.rit.edu/~zoozle/nikhedonia.PNG
image-sm: 
author: Zachary Williams
author-image: https://avatars0.githubusercontent.com/u/5004737?s=460&v=4
author-bio: Undergraduate student studying computer science at the Rochester Institute of Technology. I specialize in web & app development, as well as user experience design.
author-email: zachwilliams.me@gmail.com
author-social:
    github: https://github.com/ZachTheSloth
    linkedin: https://www.linkedin.com/in/z-n-w/
---

This project is an implementation of the board game 'Go' for iOS using Swift and and the SpriteKit framework. Go is a board game focused on surrounding enemy tiles to capture territory and remove the tiles from play. To accomplish this, I had to develop an algorithm to efficiently detect if a tile (or group of tiles) was fully surrounded, as well as practice the MVC structure for cleaner code. Using SpriteKit allowed me to take advantage of the sprite system to make logical 'tile' objects, as well as buttons and informational labels that could be animated.

The algorithm behind the checking of surrounded tiles works by iterating though all the tiles on the board. For each tile, if any of the tiles directly next to it (up, down, left, or right) are blank, it is considered able to "breath," so it is not removed. If there are no blank tiles, it checks if any tiles of the same color next to it are also able to "breath" (since in Go, tiles connected to other tiles of the same color can "breath" through each other). If none of these conditions are met, the tile must be surrounded, so it gets removed.

When working on this algorithm I ran into two major issues. The first issue had to do with the fact that when I determined a tile to be surrounded, I would remove it instantly. This would cause problems when checking the rest of the tiles on the board, because they would then consider the previously-removed tile as blank. To solve this, I would add each surrounded tile to an array, then iterate through it so they would effectively all be removed at once.

The second major issue had to do with a special rule in Go. The rule states that even if a spot on the board is already surrounded, you can still place a piece there if it would result in the surrounding tiles to be removed. My algorithm initially did not account for that, so I had to adjust it. I solved this issue by first removing any surrounded tiles regardless of their effect, and then placing them down a second time before running the algorithm again. This meant that if a tile had no effect, it would get placed and removed twice — easy. If placing it down would result in other tiles being removed, however, it would remove them on the first pass and then successfully place the tile down during the second pass.

SpriteKit was also a large part of the project. I intended to use SpriteKit in this project both to learn how to use it and to make the game feel more responsive with the use of animations. I had never used SpriteKit before this game, and a chunk of the time spent on the project was dedicated to learning how to use it correctly. SpriteKit made it easy to create the exact animations I wanted for all the UI elements, without a major performance hit.

Overall, the project was a great learning experience, both improving my general development skills and giving me more experience with iOS programming. In the future I plan to expand the game further, and build a strategy game based on Go.

To see the code, [check out the GitHub project]
(https://github.com/ZachTheSloth/NIKHEDONIA).
