# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Andre Limos**

Time spent: **4** hours spent in total

Link to project: [https://glitch.com/edit/#!/fuschia-chief-lady](https://glitch.com/edit/#!/fuschia-chief-lady)

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

The following **additional** features are implemented:

* [X] Keyboard support (just qwert)
* [X] Secret coded added when game not running (for fun) :0


## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://cdn.glitch.global/13cb2695-3bf6-4ec9-8d66-bd3441ac50b3/Game_Logic.gif?v=1650327634172)
![](https://cdn.glitch.global/13cb2695-3bf6-4ec9-8d66-bd3441ac50b3/Three_Strikes.gif?v=1650327636699)
![](https://cdn.glitch.global/13cb2695-3bf6-4ec9-8d66-bd3441ac50b3/Randomization.gif?v=1650327638877)
![](https://cdn.glitch.global/13cb2695-3bf6-4ec9-8d66-bd3441ac50b3/Keyboard_Implementation.gif?v=1650327659378)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

[https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
[https://www.w3schools.com/colors/colors_picker.asp](https://www.w3schools.com/colors/colors_picker.asp)
[https://www.digitalocean.com/community/tutorials/how-to-work-with-strings-in-javascript](https://www.digitalocean.com/community/tutorials/how-to-work-with-strings-in-javascript)
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
[https://www.w3schools.com/js/js_random.asp](https://www.w3schools.com/js/js_random.asp)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 


I initially had trouble figuring out how to implement keyboard support to the website. Aside from marking the corresponding keys to each of the game's buttons, I had to make sure each of the keys had the same guessing function as clicking each button. Implementing functions that detects keyboard input and applies it to a function took some research and trial and error. At first there was an issue while playtesting to where if you held the key for too long, the game would think you inputted the same key twice since you're holding it down and mark you wrong for it. I circumvented this by only having the game register it as a guess when you release the key, but the visual and audio cues of the button are still in place when you first press down on the key.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 


I would like to learn more about file manipulation as college courses I have taken has given me entry level knowledge on file manipulation through web applications.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 


With a bit more time and expertise, I would've wanted to have a leaderboard to compete against because as of now there is no forseeable "end" unless someone can reach 1024 points. In addition to that, I would've liked to make the website prettier, more stylized buttons and a more pleasing color pallette.


## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright Andre Limos

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.