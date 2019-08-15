---
layout: post
title: Deepnet Synapse Delta Visualizer
date: 2017-12-27
categories:
  - projects
description: Four Layer Deep-Learning Neural Network with OpenGL Visualization
image: https://csh.rit.edu/~jpotter/tri.png
image-sm: https://csh.rit.edu/~jpotter/tri.png
author: Jacob Potter
author-image: https://csh.rit.edu/~jpotter/jpotter.jpg
author-bio: Second year Computer Science major.
author-email: jmp1617@rit.edu
author-social:
  github: https://github.com/jmp1617
  linkedin: https://www.linkedin.com/in/jacob-potter-325754129/
---
This project involves the use of a simple four layer deep-learning neural network written in C that I built from scratch which leverages the [sigmoid](https://en.wikipedia.org/wiki/Sigmoid_function) activation function along with [backpropagation](https://en.wikipedia.org/wiki/Backpropagation) to assist previous layers with correction. The option for variable size and count of the training data allows for the network to optimally determine and associate patterns in any zero padded binary data. This also allows for the simulation of [full-batch](https://visualstudiomagazine.com/articles/2014/08/01/batch-training.aspx) training. The option to export the trained synaptic weights is also available. This allows you to train the network on a certain set of data, export the synapses, and then later import them to run the network in validation mode.

Thanks to OpenGL, ( more specifically the OpenGL, OpenGL ES, and Vulkan development library GLFW, and GLEW for function pointer association ) you are able to watch the neural network learn. The fact that the base network is 4 layers is important for this implementation because that means that there are 3 synaptic weight matrices, therefore, allows me to easily map each synapse to a respective Cartesian coordinate axis (X,Y,Z). I then render the location of the normalized ( -1.0 to 1.0 ) synaptic weight values to the screen and redraw each frame without clearing so a path can be seen ( default mode ).

Three visualization modes are available: Default, Line, Dot, and Tri. ( The picture shown is tri ). These options can be changed via compiling with the respective flag. I have yet to implement rotation so all that can really be seen right now is X and Y.

The visualization of the synapse deltas during training greatly slows the training loop due to the overhead of OpenGL, but this could probably be minimized with a multi-threaded support.

For more info on running/compiling and more screen shots, [Check it out on Github!](https://github.com/jmp1617/deepnet)

