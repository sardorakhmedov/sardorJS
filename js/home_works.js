let timer;
  let startTime;
  let isRunning = false;

  function startTimer() {
    if (!isRunning) {
      isRunning = true;
      startTime = new Date().getTime();
      timer = setInterval(updateTimer, 10);
    }
  }

  function stopTimer() {
    if (isRunning) {
      isRunning = false;
      clearInterval(timer);
    }
  }

  function resetTimer() {
    stopTimer();
    document.getElementById('timer').innerHTML = '0.000';
  }

  function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;

    const seconds = Math.floor(elapsedTime / 1000);
    const milliseconds = elapsedTime % 1000;

   const timerDisplay = `${seconds}.${String(milliseconds).padStart(3, '0')}`;

    document.getElementById('timer').innerHTML = timerDisplay;
  }

 document.getElementById('startBtn').addEventListener('click', startTimer);
  document.getElementById('stopBtn').addEventListener('click', stopTimer);
  document.getElementById('resetBtn').addEventListener('click', resetTimer);
