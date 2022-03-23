# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Dinesh Thirumavalavan**

Time spent: **12** hours spent in total

Link to project: (https://windy-tourmaline-vulture.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] HTML elements have entrance and exit animations
- [X] Stats to keep track of current and high score

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

![](https://i.imgur.com/L43VZRR.gif)

![](https://i.imgur.com/h4AvBA4.gif)

![](https://i.imgur.com/M0AV27w.gif)

![](https://i.imgur.com/WTLGql9.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I utilized documentation for the Bulma framework to help me design the website (https://bulma.io/documentation/).

I also used an online guide to learn about how to create musical notes through Javascript (https://reeteshghimire.com.np/2020/03/27/play-musical-notes-with-javascript/).

Finally, I used MDB Web Docs to learn about Javascript's setInterval to help with the timer function (https://developer.mozilla.org/en-US/).

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

One challenge I encountered was creating the timer feature for this website. I was influenced by the suggested optional features to add a timing feature that limits the amount of time the player has to input the pattern. There were a lot of moving parts already in my program, so I not only had to learn about setInterval, how to format my timer, but also where it fit into my code.

The first issue was learning how to use setInterval to create a timer in the first place. I looked to MDN Web Docs to learn about the parameters and output for Javascript's setInterval, and created a test timer to countdown from 20. After that, I used my knowledge of String manipulation and logic statements from my college CS courses to format that number into time notation (minute:second). Finally, I scanned through my previous code, and found the proper positions within my code to add in checks for the time, change HTML elements (such as the color of the timer text when it goes below 5 seconds), and trigger different game features (such as the game over tag) once the time ended.

I also ran into complications on the front-end aspect of the project, as I didn't know where in my overall user interface to add the timer, as it didn't fit in my previous design. I knew that the timer was an integral aspect of the website so I wanted to place it front and center, so I partially redesigned my website, creating a new row just for my lives, and allowing my timer to lay in line with the other game statistics.

Overall, the timing function was a very challenging feature to implement, but learning how to read through the documentation, testing and bugfixing using console.log and other sanity checks, and persevering through every frustrating bug helped me overcome every obstacle that came with it, and allowed me to create the feature exactly as I envisioned it in my head.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I still have a few questions related to the front-end side of web development. I spent a lot of time tinkering with margins and alignments to get the UI to match what I had initially wanted, and had to make a few compromises based on what I had time to accomplish, so learning about different online tools and frameworks that could aid with front-end design is definitely something I'm interested in learning more about.

Additionally, I want to learn more about Javascript's promise feature. Using setTimeout to stagment my code seemed like an inefficient solution to the task, since it required me to know the exact amount of seconds, where instead (to my understanding), JS promises allow me to stagment my code as soon as one line finishes running. It seems like a powerful tool for lots of web development tasks that I should learn how to use.

Finally, I want to learn how to implement more advanced web development frameworks and techniques. Throughout college, I've learned about frameworks such as React.js and AngularJS, but I still haven't gotten close to mastering these concepts. I'm hoping through the CodePath SITE program I'll gain exposure to some of these more advanced web development concepts and ultimately become a better programmer and web developer.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours, the first feature I would like to implement is incorporating some kind of database that allows the users to store specific data about their account and their game (like their high score, stats about total deaths, etc). I would also use this database feature to allow the user to customize their game, by adding different sounds instead of just piano (banjo, kazoo, jazz), or different color palettes. 

Another feature I would like to implement are different types of gamemodes. Currently, all I have implemented is a free-play gamemode where you get as far as you can before you lose your lives, but I would also like to implement a challenge gamemode where you have only seconds to respond, or a gamemode where the number of tiles you have constantly increases.

The final feature I'd like to implement are different games entirely. I'd like to create a website that hosts a whole suite of games similar in concept to the tile memory game, such as computer games that test your reflexes, typing speed, spatial memory, and much more. Not only would that be a lot of fun, I think it would give players great insights on the type of brain activities that they excel in and the ones that they don't.


## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/1jX5EqPPbWe7CjJc0j6P7M6lXyx3i3ELa/view?usp=sharing)


## License

    Copyright Dinesh Thirumavalavan

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
