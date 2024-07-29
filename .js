let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
let hoursEl = document.getElementById("hours");
let startBtnEl = document.getElementById("startBtn");
let stopBtnEl = document.getElementById("stopBtn");
let resetBtnEl = document.getElementById("resetBtn");
let countersec = 0;
let countermin = 0;
let counterhou = 0;

function resetfunction() {
    countersec = 0;
    countermin = 0;
    counterhou = 0;
    minutesEl.textContent = "00";
    hoursEl.textContent = "00";
    secondsEl.textContent = "00";



}

function startfunction() {
    let uniqueid = setInterval(function() {
        countersec = countersec + 1;
        if (countersec < 10) {
            secondsEl.textContent = "0" + countersec;
        } else {
            secondsEl.textContent = countersec;
        }

        if (countersec === 60) {
            countermin = countermin + 1;
            countersec = 0;
            if (countermin < 10) {
                minutesEl.textContent = "0" + countermin;
            } else {
                minutesEl.textContent = countermin;
            }

        }
        if (countermin === 60) {
            counterhou = counterhou + 1;
            countermin = 0;
            if (counterhou < 10) {
                hoursEl.textContent = "0" + counterhou;
            } else {
                hoursEl.textContent = counterhou;
            }

        }

        stopBtnEl.onclick = function() {
            clearInterval(uniqueid);

        }
        resetBtnEl.onclick = function() {
            clearInterval(uniqueid);
            resetfunction();

        }



    }, 1000);
}


startBtnEl.onclick = function() {
    startfunction();

}
