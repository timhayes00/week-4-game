var intervalId;
var startTime = 20;
var count = 0;
var answersCorrect = 0;
var answersWrong = 0;
var gameHTML = $(".game-container");

startClock = function () {
    intervalId = setInterval(showTime, 1000);
}

showTime = function () {
    $("#time-remaining").html("You have " + (startTime - count) + " seconds left");
    count++;
    console.log(count)
    if (count === 21) {
        gameOver();
    }
}

gameOver = function () {
    alert("Time's up!")

    $.each($("input[name='question0']:checked"), function () {
        if ($(this).val() === data[0].answer) {
            console.log("#1 is correct")
            answersCorrect++;
        } else {
            answersWrong++;
        }
  
    }),
        $.each($("input[name='question1']:checked"), function () {
            if ($(this).val() === data[1].answer) {
                answersCorrect++;
                console.log("#2 is correct")
            } else {
                answersWrong++;
            }
        }),

        $.each($("input[name='question2']:checked"), function () {
            if ($(this).val() === data[2].answer) {
                console.log("#3 is correct")
                answersCorrect++;
            } else {
                answersWrong++;
            }
        }),

        $.each($("input[name='question3']:checked"), function () {
            if ($(this).val() === data[3].answer) {
                console.log("#4 is correct")
                answersCorrect++;
            } else {
                answersWrong++;
            }
        })

    alert("You had " + answersCorrect + " correct answers");
    alert("You had " + answersWrong + " incorrect answers")
}

window.onload = function () {
    startClock();
    for (qNum = 0; qNum < data.length; qNum++) {
        var questionDiv = '<div class="question" id=quest' + qNum + '> ' + data[qNum].question + '</div>'
        gameHTML.append(questionDiv)

        for (i = 0; i < data[qNum].potentialAnswers.length; i++) {
            var newAnswerDiv = '<input type="radio" name="question' + qNum + '" id=answer' + i + ' value =' + data[qNum].potentialAnswers[i] + '> ' + data[qNum].potentialAnswers[i] + "</input> <br>";
            gameHTML.append(newAnswerDiv)
        }
        gameHTML.append("<br>")

    }

}


var data = [
    {
        question: "What is the air speed velocity of a fully laden European swallow?",
        potentialAnswers: ["11 meters per second", "8 meters per second", "14 meters per second"],
        answer: "11 meters per second"
    },
    {
        question: "How many humans are there in the Disney movie 'Bambi'?",
        potentialAnswers: ["Zero", "One", "Two", "Three"],
        answer: "Zero"
    },
    {
        question: "When he won his first Masters in 1997, at the time Tiger Woods was the youngest golfer to do so.  How old was he?",
        potentialAnswers: ["19", "20", "21", "22"],
        answer: "21"
    },
    {
        question: "What year was Prohibition repealed in the USA?",
        potentialAnswers: ["1930", "1931", "1932", "1933"],
        answer: "1933"
    }
]