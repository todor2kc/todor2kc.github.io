var timeLeft = 30;
var elem = document.getElementById('memory');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = 'Time: ' + timeLeft;
        timeLeft--;
    }
}

function doSomething() {
    alert("Your time is up, go to next quiz");
    window.location.href = "quiz.html";
}

function intro() {
    window.location.href = "memory.html";
}

function quizbtn() {
    window.location.href = "swipe.html";
}

function swipebtn() {
    window.location.href = "registration.html";
}

function regbtn() {
    window.location.href = "result.html";
}


