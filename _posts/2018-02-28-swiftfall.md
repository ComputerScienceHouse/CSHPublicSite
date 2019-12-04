---
layout: post
title:  Swiftfall
date:   2018-02-28 21:25:00
categories: projects
description: A wrapper for an API called Scryfall.
author: Braden Bowdish
author-image: https://avatars2.githubusercontent.com/u/15185628?s=460&v=4
author-bio: Lover of Swift and Magic. 3rd year member of Computer Science House.
author-email: bmbowdish@csh.rit.edu
author-social:
  github: https://github.com/bmbowdish
---

# What is Swiftfall? 

Swiftfall is an API wrapper written in Swift for the API Scryfall.

[Scryfall](https://scryfall.com/docs/api) is an API which handles information about the card game Magic: The Gathering. 

I like Magic the Gathering, but getting tons of information about Magic cards is really annoying, especially if you don't want to or don't know how to implement a JSON parser or make requests to a website. Many newer developers would like to combine their passions but it's not always easy. 

Thankfully, [Scrython](https://github.com/nandascott/Scrython) does this already, but in Python. 

### Why Swift Was Appealing
1. Swift's use of optionals was really appealing. Sometimes you can't be absolutely sure about whether or not a request has been successful. Optionals allow a developer to handle those situations extremely safely.
2. Swift has a JSON decoder built in and it is appealing to have no dependencies.
3. iOS, Apple TV, Apple Watch, and MacOS development are all far easier in Swift
4. Swift is new, and it is fun to do things never done before

# How do you use Swiftfall? 
First, create an executable package. The executable includes a Hello World function by default.

```
$ mkdir MyExecutable
$ cd MyExecutable
$ swift package init --type executable
$ swift build
$ swift run
Hello, World!
```

Next, 

```
$ swift package generate-xcodeproj
```

This creates the correct package files so you can add dependencies. 

Then, add Swiftfall as a dependency for the executable.

```
import PackageDescription

let package = Package(
    name: "MyExecutable",
    dependencies: [
        // Dependencies declare other packages that this package depends on.
        // .package(url: /* package url */, from: "1.0.0"),
        .package(url:"https://github.com/bmbowdish/Swiftfall.git", from: "1.2.0")
    ],
    targets: [
        // Targets are the basic building blocks of a package. A target can define a module or a test suite.
        // Targets can depend on other targets in this package, and on products in packages which this package depends on.
        .target(
            name: "MyExecutable",
            dependencies: ["Swiftfall"]),
    ]
)
```

Then, run:

```
$ swift package generate-xcodeproj
```

I believe this is because you need to pull down the new dependencies from the source.


Now you're ready to use Swiftfall!

# Actually Using Swiftfall

## Getting a Card
`Swiftfall.getCard(fuzzy:String) -> Card? _(Fuzzy search)_`

`Swiftfall.getCard(exact:String) -> Card? _(Exact search)_`

`Swiftfall.getRandomCard() -> Card? _(Random Card)_`

Ex.

``` 
import Swiftfall
let card = Swiftfall.getCard(exact:"Black Lotus")
card?.simplePrint()
```

Out.

```
Name: Black Lotus
Cost: {0}
Type Line: Artifact
Oracle Text:
{T}, Sacrifice Black Lotus: Add three mana of any one color to your mana pool.
```

## Other Things
Swiftfall supports more than just cards. Other items you can retrieve include:

* Sets 
* Rulings 
* Ruling Lists
* Card Lists
* Set Lists

You can find more information about [Swiftfall on GitHub.com](https://github.com/bmbowdish/Swiftfall) 
