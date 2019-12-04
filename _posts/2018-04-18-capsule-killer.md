---
layout: post
title: Capsule Killer
date: 2018-04-18
categories:
  - projects
description: A first-person shooter developed using Unity and C#.
image: https://user-images.githubusercontent.com/34044719/36330154-8e78a804-1336-11e8-940b-57497fe4d757.png
image-sm: https://user-images.githubusercontent.com/34044719/36330154-8e78a804-1336-11e8-940b-57497fe4d757.png
author: Zack Yenchik
author-image: https://avatars0.githubusercontent.com/u/34044719?s=460&amp;v=4
author-bio: First Year Computer Science Student at Rochester Institute of Technology
author-email: zyenchik@gmail.com
author-social:
  github: https://github.com/zackyenchik
---
# Summary
[Capsule Killer](https://github.com/zcy3071/CapsuleKiller) is a first-person shooter that I developed to learn more about the skills and 
processes involved with game development. Upon launching the game, the player will be met with a main menu that allows them to start a game, 
view the controls, or exit the game. When a player starts a game, they will spawn in the center of the map and enemies will begin spawning 
at random locations throughout the map every 2-5 seconds. The enemies move towards the player, doing damage upon collision with the player. 
The player has the ability to run away from and shoot enemies. The goal of the game is to defeat as many enemies as possible.

## The Enemies
The enemies in the game are pretty simple. Once they spawn, they find the player in the game and begin moving towards them.
If the enemy is able to collide with the player they stop moving to avoid pushing the player aroundand then begin doing damage
to the player. Damage is continually dealt until the enemy and player are no longer colliding. It takes 4 shots to destroy an
enemy in the current build of the game.

## The Player
Much like the enemies, the player isn't too complex. Input is recorded from the mouse and the W, A, S, and D keys on the keyboard
and translated into movement of the player using some fun vector math. The player also has the ability to press the Space key
to jump. Jumping was actually one of the most difficult aspects of the game for me to figure out. I wanted it to feel smooth, responsive,
and reasonable; I didn't want the player to be able to jump super high. Shooting uses simple raycasting and input detection. If the left 
mouse button is clicked, a ray is casted forwad from the player camera's position. If it hits an enemy, the enemy loses 25 health points.

## Conclusion
Overall, I had a blast with this project. Developing Capsule Killer was my first true experience working on a large project. 
Before this I had never used Git, Unity, or C#, so I had my fair share of issues along the way. These issues, however, were 
valuable opportunities to further my understanding of what I was doing. Although the game itself is pretty simple, I think
the experience I gained made it worthwhile, as it has furthered my understanding of things like version control, game engines,
and programming in general.

Feel free to check out the source code for Capsule Killer [here](https://github.com/zcy3071/CapsuleKiller)!