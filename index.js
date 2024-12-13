let hour = document.getElementById("hr")
let minute = document.getElementById("min")
let second = document.getElementById("sec")
let count = document.getElementById("count")

let hr = 0;
let min = 0;
let sec = 0;
let counter = 0;

let flag = 1;

function start() {
    flag = 1;
    stopwatch()
}

function stop() {
    flag = 0;
}

function reset() {
    flag = 0;

    hr=0;
    min=0;
    sec=0;
    counter=0;

    hour.innerText = "00";
    minute.innerText = "00";
    second.innerText = "00";
    count.innerText = "00";
}

// function to perform the stopwatch functionalities

function stopwatch() {
    if (flag == 1) {
        counter = counter+1;

        if (counter == 100) {
            sec = sec+1;

            if (sec == 60) {
                min = min+1;
                sec = 0;
            }

            if (min == 60) {
                hr = hr+1;
                min = 0;
                sec = 0;
            }

            let hrString = hr;
            let minString = min;
            let secString = sec;
            
            // adding 0 before the digit, whenever digits are single

            if (sec < 10) {
                secString = "0" + sec;
            }

            if (min < 10) {
                minString = "0" + min;
            }

            if (hr < 10) {
                hrString = "0" + hr;
            }

            hour.innerText = hrString;
            minute.innerText = minString
            second.innerText = secString
            counter = 0;
        }
        count.innerText = counter

        // calling "stopwatch" function inside setTimeout at an interval of 10ms
        setTimeout("stopwatch()", 10)
    }
}