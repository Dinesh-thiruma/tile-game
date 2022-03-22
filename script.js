// Global variables
let buttons = document.getElementsByClassName("memoryTiles");

let clueHoldTime = 1000; //how long to hold each clue's light/sound
let cluePauseTime = 333; //how long to pause in between clues
let nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

let pattern = [Math.floor(Math.random() * 6)];
let progress = 0;
let guessCounter = 0;
let tonePlaying = false;
let gamePlaying = false;
let lives = 3;

let highScore = 0;

let TIME_LIMIT = 10;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

// Play cue sequence
function playClueSequence() {
  tonePlaying = true;
  let playButton = document.getElementById("playButton");
  playButton.setAttribute("disabled", true);
  playButton.innerHTML = "Repeat the pattern!";

  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= pattern.length; i++) {
    // for each clue that is revealed so far
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  setTimeout(() => {
    tonePlaying = false;
    progress = 0;
    gamePlaying = true;
    startTimer();
  }, delay - cluePauseTime - clueHoldTime);
}

// Play single cue
function playSingleClue(btnIndex) {
  lightTile(btnIndex);
  playNote(btnIndex + 1, "sine");
  playNote(btnIndex + 1, "square");
  playNote(btnIndex + 1, "triangle");
  playNote(btnIndex + 1, "sawtooth");
  setTimeout(dimTile, clueHoldTime, btnIndex);
}

// Function to press tile
function clickTile(btnIndex) {
  if (!tonePlaying) {
    playSingleClue(btnIndex);

    if (gamePlaying) {
      if (progress === pattern.length - 1 && pattern[progress] === btnIndex) {
        levelComplete();
      } else if (pattern[progress] === btnIndex) {
        progress += 1;
      } else {
        levelLost();
      }
    }
  }
}

function levelComplete() {
  if (progress + 1 > highScore) {
    highScore = progress + 1;
  }

  document.getElementById("currentScore").innerHTML = progress + 1;
  document.getElementById("highScore").innerHTML = highScore;

  let successTag = document.getElementById("successTag");
  successTag.classList.remove("animate__fadeOut");
  successTag.classList.add("animate__fadeIn");
  successTag.style.visibility = "visible";
  setTimeout(() => {
    successTag.classList.remove("animate__fadeIn");
    successTag.classList.add("animate__fadeOut");
  }, 1000);

  let playButton = document.getElementById("playButton");
  playButton.removeAttribute("disabled");
  playButton.innerHTML = "Play Sound";

  progress = 0;
  gamePlaying = false;
  pattern.push(Math.floor(Math.random() * 6));
  cluePauseTime -= 10;
  clueHoldTime -= 5;

  clearInterval(timerInterval);
  TIME_LIMIT += 2;
  timePassed = 0;
  timeLeft = TIME_LIMIT;
  document.getElementById("timer").innerHTML = formatTime(TIME_LIMIT);
  document.getElementById("timer").classList.remove("has-text-danger");
}

function levelLost() {
  if (lives > 1) {
    let failureTag = document.getElementById("failureTag");
    failureTag.classList.remove("animate__fadeOut");
    failureTag.classList.add("animate__fadeIn");
    failureTag.style.visibility = "visible";
    setTimeout(() => {
      failureTag.classList.remove("animate__fadeIn");
      failureTag.classList.add("animate__fadeOut");
    }, 1000);

    lives -= 1;
  } else {
    let outOfLivesTag = document.getElementById("outOfLivesTag");
    outOfLivesTag.classList.remove("animate__fadeOut");
    outOfLivesTag.classList.add("animate__fadeIn");
    outOfLivesTag.style.visibility = "visible";
    setTimeout(() => {
      outOfLivesTag.classList.remove("animate__fadeIn");
      outOfLivesTag.classList.add("animate__fadeOut");
    }, 1000);

    let playButton = document.getElementById("playButton");
    playButton.removeAttribute("disabled");
    playButton.innerHTML = "Play Sound";

    TIME_LIMIT = 10;
    timePassed = 0;
    timeLeft = TIME_LIMIT;
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = formatTime(TIME_LIMIT);
    document.getElementById("timer").classList.remove("has-text-danger");

    lives = 3;
    clueHoldTime = 1000;
    cluePauseTime = 333;
    progress = 0;
    gamePlaying = false;
    pattern = [Math.floor(Math.random() * 6)];
    document.getElementById("currentScore").innerHTML = 0;
  }
  setHearts();
}

function setHearts() {
  let heart1 = document.getElementById("heart1");
  let heart2 = document.getElementById("heart2");
  let heart3 = document.getElementById("heart3");
  if (lives == 1) {
    heart1.classList.remove("fa-heart-broken");
    heart1.classList.add("fa-heart");
    heart1.classList.remove("has-text-dark");
    heart1.classList.add("has-text-danger");

    heart2.classList.add("fa-heart-broken");
    heart2.classList.remove("fa-heart");
    heart2.classList.add("has-text-dark");
    heart2.classList.remove("has-text-danger");

    heart3.classList.add("fa-heart-broken");
    heart3.classList.remove("fa-heart");
    heart3.classList.add("has-text-dark");
    heart3.classList.remove("has-text-danger");
  } else if (lives == 2) {
    heart1.classList.remove("fa-heart-broken");
    heart1.classList.add("fa-heart");
    heart1.classList.remove("has-text-dark");
    heart1.classList.add("has-text-danger");

    heart2.classList.remove("fa-heart-broken");
    heart2.classList.add("fa-heart");
    heart2.classList.remove("has-text-dark");
    heart2.classList.add("has-text-danger");

    heart3.classList.add("fa-heart-broken");
    heart3.classList.remove("fa-heart");
    heart3.classList.add("has-text-dark");
    heart3.classList.remove("has-text-danger");
  } else {
    heart1.classList.remove("fa-heart-broken");
    heart1.classList.add("fa-heart");
    heart1.classList.remove("has-text-dark");
    heart1.classList.add("has-text-danger");

    heart2.classList.remove("fa-heart-broken");
    heart2.classList.add("fa-heart");
    heart2.classList.remove("has-text-dark");
    heart2.classList.add("has-text-danger");

    heart3.classList.remove("fa-heart-broken");
    heart3.classList.add("fa-heart");
    heart3.classList.remove("has-text-dark");
    heart3.classList.add("has-text-danger");
  }
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("timer").innerHTML = formatTime(timeLeft);

    if (timeLeft < 0) {
      lives = 1;
      levelLost();
    } else if (timeLeft <= 5) {
      document.getElementById("timer").classList.add("has-text-danger");
    }
  }, 1000);
}

function startHover(btnIndex) {
  if (!tonePlaying) {
    buttons[btnIndex].style.cursor = "pointer";
    lightTile(btnIndex);
  } else {
    buttons[btnIndex].style.cursor = "not-allowed";
  }
}

function stopHover(btnIndex) {
  buttons[btnIndex].style.cursor = "default";
  if (!tonePlaying) {
    dimTile(btnIndex);
  }
}

// Function to temporarily light up specific tile
function lightTile(btnIndex) {
  switch (btnIndex) {
    case 0:
      buttons[0].classList.remove("has-background-info-light");
      buttons[0].classList.add("has-background-info");
      break;
    case 1:
      buttons[1].classList.remove("has-background-danger-light");
      buttons[1].classList.add("has-background-danger");
      break;
    case 2:
      buttons[2].classList.remove("has-background-warning-light");
      buttons[2].classList.add("has-background-warning");
      break;
    case 3:
      buttons[3].classList.remove("has-background-success-light");
      buttons[3].classList.add("has-background-success");
      break;
    case 4:
      buttons[4].classList.remove("has-background-link-light");
      buttons[4].classList.add("has-background-link");
      break;
    case 5:
      buttons[5].classList.remove("has-background-primary-light");
      buttons[5].classList.add("has-background-primary");
      break;
  }
}

// Function to power down specific tile
function dimTile(btnIndex) {
  switch (btnIndex) {
    case 0:
      buttons[0].classList.add("has-background-info-light");
      buttons[0].classList.remove("has-background-info");
      break;
    case 1:
      buttons[1].classList.add("has-background-danger-light");
      buttons[1].classList.remove("has-background-danger");
      break;
    case 2:
      buttons[2].classList.add("has-background-warning-light");
      buttons[2].classList.remove("has-background-warning");
      break;
    case 3:
      buttons[3].classList.add("has-background-success-light");
      buttons[3].classList.remove("has-background-success");
      break;
    case 4:
      buttons[4].classList.add("has-background-link-light");
      buttons[4].classList.remove("has-background-link");
      break;
    case 5:
      buttons[5].classList.add("has-background-primary-light");
      buttons[5].classList.remove("has-background-primary");
      break;
  }
}

// Removes the instruction card once the Let's Play Button is pressed
function playGame() {
  let instructionsCard = document.getElementById("instructions");
  let gameDiv = document.getElementById("gameDiv");

  instructionsCard.classList.add("animate__lightSpeedOutLeft");
  setTimeout(() => {
    instructionsCard.remove();
    gameDiv.style.display = "block";
    gameDiv.classList.add("animate__fadeIn");
  }, 800);
}

let volume = 0.5;

// Sound Synthesis Functions
const freqMap = {
  1: 523.3,
  2: 587.3,
  3: 659.3,
  4: 698.5,
  5: 784.0,
  6: 880.0,
};

var context = new AudioContext();
var o = null;
var g = null;

function playNote(btn, type) {
  setTimeout(function () {
    o = context.createOscillator();
    g = context.createGain();
    o.type = type;
    o.connect(g);
    o.frequency.value = freqMap[btn];
    g.connect(context.destination);
    o.start(0);
    g.gain.exponentialRampToValueAtTime(
      0.00001,
      context.currentTime + clueHoldTime / 500
    );
  }, 200);
}
