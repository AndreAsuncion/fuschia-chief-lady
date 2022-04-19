// Global constants
// PREPARE TO BECOME VARIABLE
var clueHoldTime = 500; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var sequencePlaying = false;
var volume = 0.5; // 0 < x < 1
var guessCounter = 0;
var strikes = 0;

// Variables for Secret
var secretPattern = [2, 2, 2, 1, 2, 3];
var secretProgress = 0;
var secretAudio = new Audio('https://cdn.glitch.global/13cb2695-3bf6-4ec9-8d66-bd3441ac50b3/SecretAudio.mp3?v=1650325736773');



function startGame(){
  // init the random pattern
  pattern = [];
  for(let i = 0; i < (Math.pow(2,10)); i++) {
    pattern.push(Math.floor(Math.random() * 5) + 1)
  }
  // for(let i = 0; i < (Math.pow(2,10)); i++) {
  //   console.log(`${pattern[i]}`);
  // }
  // init game var
  clueHoldTime = 500;
  strikes = 0;
  progress = 0;
  gamePlaying = true;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  stopTone();
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  alert(`You scored ${progress} points!`);
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    clueHoldTime = clueHoldTime * (31/32) ;
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You win.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    // Going to copy the game logic for a secret code when game is not running
    if(secretPattern[guessCounter] == btn){
      if(secretProgress == secretPattern.length - 1){
        // alert('you found a secret!'); Testing purposes
        secretAudio.play();
        guessCounter = 0;
        secretProgress = 0;
      }
      else{
        guessCounter++;
        secretProgress++;
      }
    }
    else{
      guessCounter = 0;
      secretProgress = 0;
    } 
  }
  

  if(gamePlaying){
    // add game logic here
    // Correct Guess
    if(pattern[guessCounter] == btn){    
      // If player has finished the current line
      if(guessCounter == progress){
        // If player has finished game to its completion
        if(progress == pattern.length - 1){
          winGame();
        }
        // Go next in progression and run the sequence again
        else{
          progress++;
          playClueSequence();
        }
      }
      // Check next part in the sequence
      else{
        guessCounter++;
      }
    }
    // Incorrect Guess
    else if(strikes < 2){
      if(strikes == 0){
        alert("Wrong! 2 attempts left.");
      }
      else if(strikes == 1){
        alert("Wrong! 1 attempt left.")
      }
      stopTone();
      strikes++;
      playClueSequence();
    }
    else if(strikes == 2){
      loseGame();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 470,
  5: 526 // Just added what I thought sounded best, maybe from a scale?
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

// Stuff I added

// Guess the button when keyboard is button is pressed
document.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  
  switch (event.key) {
    case "q":
      startTone(1);
      lightButton(1);
      break;
    case "w":
      startTone(2);
      lightButton(2);
      break;
    case "e":
      startTone(3);
      lightButton(3);
      break;
    case "r":
      startTone(4);
      lightButton(4);
      break;
    case "t":
      startTone(5);
      lightButton(5);
      break;
    default:
      return;
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);

// This one plays the music if the button is pressed
document.addEventListener("keyup", function (event) {
  if (event.defaultPrevented) {
    return;
  }
  
  switch(event.key){
    case "q":
      guess(1);
      stopTone();
      clearButton(1);
      break;
    case "w":
      guess(2);
      stopTone();
      clearButton(2);
      break;
    case "e":
      guess(3);
      stopTone();
      clearButton(3);
      break;
    case "r":
      guess(4);
      stopTone();
      clearButton(4);
      break;
    case "t":
      guess(5);
      stopTone();
      clearButton(5);
      break;
    default:
      return;
  }
  
  event.preventDefault();
}, true);