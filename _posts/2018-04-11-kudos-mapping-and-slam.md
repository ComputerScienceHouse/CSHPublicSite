---
layout: post
title: Kudos Mapping and SLAM Project
date: 2018-04-11
categories: 
    - Robotics
    - SLAM
    - ROS
    - Mapping
    - Project
description: Added LiDAR mapping functionality to Computer Science House's floor robot, Kudos.  
image: https://github.com/ComputerScienceHouse/Kudos/blob/master/kudos_csh/images/CSH_Map_2.png?raw=true
image-sm: http://www.trevorsherrard.com/images/CSH_Map_2.png
author: Trevor Sherrard
author-image: http://www.trevorsherrard.com/images/profile_pics.jpg
author-bio: Electrical Engineer, roboticist, computer vision enthusiast. I have a strong passion for seeing my software come alive in my projects.
author-email: tws4129@rit.edu
author-social:
    github: https://github.com/sherrardTr4129
    linkedin: https://www.linkedin.com/in/trevor-sherrard
---

## Background
Computer Science House purchased a robot chasis from one of our members in the Spring semester of 2017. I had worked on previous versions of the CSH H.E.R.O.I.N project and thought I would be able to make significant strides given we now had a stable robot chassis. So, using robot operating system constructs and several new pieces of hardware/sensors, I added mapping functionality to Kudos.

## Details
First, I needed to install a LiDAR sensor on the robot. Standard off-the-shelf LiDAR solutions, such as the 16-channel Velodyne puck, start at upwards of $5000. Being a student organization, we needed a more financially sensible solution. I decided on using a replacement LiDAR sensor from the NeatoXV robot vacuum cleaner. Once the serial communication between the LiDAR controller board was setup with the Raspberry Pi, ROS development began. The LiDAR scans were "off-boarded" from the robot via the rostopic /laserscan over the network to a VM running on CSH Proxmox. On this VM, a program subscribed to this data and performed an algorithm to simultaneously localize the robot within a map and build the map as the robot moved through its enviornment. A navigation goal could be set for the robot to navigate to, and a path to follow to obtain this goal was computed. From this path, individual robot movements were calculated and streamed to the robot via Computer Science House's WiFi network. This robot movement was actuated upon by the robot through its move base controller. See the figure below for a drawing of the control topology for Kudos.

![Kudos Control Topology](http://www.trevorsherrard.com/images/KudosCommProtocol.png)

## Future Iterations
For anyone thinking about working on this project in future student generations, make sure to develop/use a SLAM algorithm that takes its odometry data from encoders. Currently the software setup relies on a fairly consistent LiDAR scan update rate and a large difference between LiDAR scan frames. Unfortunately, most walls are very flat and not very feature-rich. Even more unfortunate, most of CSH is comprised of very flat walls, so Kudos had some difficulty navigating when traveling through long, straight hallways. Kudos has gearboxes that allow for easy install of AndyMark standard encoders. 

## GitHub Links
Have a look at the project setup and code below!

[Kudos ROS package](https://github.com/ComputerScienceHouse/Kudos/tree/master/kudos_csh)

[MoveBase Controller](https://github.com/ComputerScienceHouse/Kudos/tree/master/KudosROS)
