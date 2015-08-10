function setTarget() {
    var submitTarget = document.getElementById("submitTarget")
    target = document.getElementById("SetTarget").value
    var targetSuccess = document.getElementById("targetSuccess")
    var setTargetArea = document.getElementById("setTargetArea")
    targetText = document.getElementById("target")
    targetText.innerHTML = target.toString()
    right = 0
    wrong = 0
    setTargetArea.style.display = "none"
    targetSuccess.style.display = ""
    main()
    timer(true)
}

function generateQuiz() {
    q1 = Math.floor((Math.random() * 10) + 1);
    q2 = Math.floor((Math.random() * 10) + 1);
    var quiz = document.getElementById("quiz");
    quiz.innerHTML = (q1 + "*" + q2)

}

function checkAnswer() {
    var answerRight = document.getElementById("answerRight");
    var answerWrong = document.getElementById("answerWrong");
    var resultRight = document.getElementById("right")
    var resultWrong = document.getElementById("wrong")
    var answer = document.getElementById("answer").value.toString()
    var answerArea = document.getElementById("answer")
    var ansBtn = document.getElementById("ansBtn");
    var rightAnswer = q1 * q2

    if (answer == rightAnswer) {
        answerWrong.style.display = "none"
        answerRight.style.display = ""
        right = right + 1;
        resultRight.innerHTML = right.toString()

    } else {
        answerRight.style.display = "none"
        answerWrong.style.display = ""
        wrong = wrong + 1;
        resultWrong.innerHTML = wrong.toString()
    };
    answerArea.value = ""
    targetSuccess.style.display = "none"
    main()
};


function timer(run) {
    if (run == true) {
        finalTime = null
        counter = document.getElementById("counter");
        counterContent = counter.innerHTML
        counterNum = parseFloat(counterContent)
        num = (counterNum + 0.1).toFixed(1);
        stringNum = num.toString()
        counter.innerHTML = stringNum;
        finalTime = stringNum
        setTimeout('timer(true)', 100)
    } else {
        finalTimeText = document.getElementById("finalTime");
        counter.style.display = "none";
        finalTimeText.style.display = "";
        finalTimeText.innerHTML = finalTime + " 秒"

    }

}

function finisher() {
    var gameFinish = document.getElementById("gameFinish");
    var gameArea = document.getElementById("gameArea");
    if (right + wrong == target) {
        timer(false)
        gameFinish.style.display = ""
        gameArea.style.display = "none"
        answerWrong.style.display = "none"
        answerRight.style.display = "none"
    };
}

function handleAnswerKeyPress(e) {
    var key = e.keyCode || e.which;
    if (key == 13) {
        checkAnswer();
    }
}

function handleTargetKeyPress(e) {
    var key = e.keyCode || e.which;
    if (key == 13) {
        setTarget()
    }
}

function main() {
    document.getElementById("answer").focus();
    generateQuiz()
    finisher()
}
