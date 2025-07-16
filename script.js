let timeLeft = 25 * 60; // 25 minutes in seconds
let timer;
let isRunning = false;

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("timer").textContent =
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      alert("Time's up! Take a break! 🍵");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 25 * 60;
  isRunning = false;
  updateDisplay();
}

updateDisplay();
function setCustomTime() {
  const input = document.getElementById("customMinutes").value;
  timeLeft = parseInt(input) * 60;
  isRunning = false;
  clearInterval(timer);
  updateDisplay();
}
let stopwatchTime = 0;
let stopwatchInterval;
let stopwatchRunning = false;

function updateStopwatch() {
  const minutes = Math.floor(stopwatchTime / 60);
  const seconds = stopwatchTime % 60;
  document.getElementById("stopwatch").textContent =
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStopwatch() {
  if (stopwatchRunning) return;
  stopwatchRunning = true;
  stopwatchInterval = setInterval(() => {
    stopwatchTime++;
    updateStopwatch();
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  stopwatchRunning = false;
  updateStopwatch();
}

updateStopwatch(); // Initialize

let studyDuration = 25 * 60; // default study time (seconds)
let breakDuration = 5 * 60;  // default break time (seconds)
let isStudyTime = true;      // track if it's study or break time

function setCustomTime() {
  const input = document.getElementById("customMinutes").value;
  studyDuration = parseInt(input) * 60;
  timeLeft = studyDuration;
  isStudyTime = true;
  isRunning = false;
  clearInterval(timer);
  updateDisplay();
  updateStatus();
}

function updateStatus() {
  const statusEl = document.getElementById("status");
  if (isStudyTime) {
    statusEl.textContent = "📚 Study Time";
  } else {
    statusEl.textContent = "💩 Poop Break!";
  }
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      isStudyTime = !isStudyTime; // Switch modes
      timeLeft = isStudyTime ? studyDuration : breakDuration;
      updateStatus();
      alert(isStudyTime ? "Back to study! 📚" : "Time for a poop break! 💩");
      updateDisplay();
      startTimer();
    }
  }, 1000);
}

