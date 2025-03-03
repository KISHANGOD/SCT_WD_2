let timer;
    let startTime = 0;
    let running = false;
    let laps = [];

    function formatTime(ms) {
        let minutes = Math.floor(ms / 60000);
        let seconds = Math.floor((ms % 60000) / 1000);
        let milliseconds = Math.floor((ms % 1000) / 10);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
    }

    function updateDisplay() {
        document.getElementById("display").innerText = formatTime(startTime);
    }

    function startStopwatch() {
        if (!running) {
            running = true;
            let start = Date.now() - startTime;
            timer = setInterval(() => {
                startTime = Date.now() - start;
                updateDisplay();
            }, 10);
        }
    }

    function pauseStopwatch() {
        running = false;
        clearInterval(timer);
    }

    function resetStopwatch() {
        running = false;
        clearInterval(timer);
        startTime = 0;
        laps = [];
        updateDisplay();
        document.getElementById("laps").innerHTML = "";
    }

    function recordLap() {
        if (running) {
            laps.push(startTime);
            let lapItem = document.createElement("li");
            lapItem.innerText = `Lap ${laps.length}: ${formatTime(startTime)}`;
            document.getElementById("laps").appendChild(lapItem);
            }
    }
