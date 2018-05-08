var intervalId;
var startTime = 10;
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
    if (count === 11) {
        gameOver();
    }
}

gameOver = function () {
    alert("Time's up!")




    console.log(data[3].answer)
    $.each($("input[name='question0']:checked"), function () {
        console.log("ignition")
        if ($(this).val() === data[0].answer) {
            answersCorrect++;
        } else {
            answersWrong++;
        }
  
    }),
        $.each($("input[name='question1']:checked"), function () {
            if ($(this).val() === data[1].answer) {
                answersCorrect++;
            } else {
                answersWrong++;
            }
        }),

        $.each($("input[name='question2']:checked"), function () {
            if ($(this).val() === data[2].answer) {
                answersCorrect++;
            } else {
                answersWrong++;
            }
        }),

        $.each($("input[name='question3']:checked"), function () {
            if ($(this).val() === data[3].answer) {
                answersCorrect++;
            } else {
                answersWrong++;
            }
        })


    alert("You had " + answersCorrect + " correct answers");
    alert("You had " + answersWrong + " incorrect answers")
}

{/* <div><input type="checkbox" value="1" class="chk"> Value 1</div>
<div><input type="checkbox" value="2" class="chk"> Value 2</div>
<div><input type="checkbox" value="3" class="chk"> Value 3</div>
<div><input type="checkbox" value="4" class="chk"> Value 4</div>
<div><input type="checkbox" value="5" class="chk"> Value 5</div> */}



window.onload = function () {
    startClock();
    //console.log(data[2].answer)
    for (qNum = 0; qNum < data.length; qNum++) {
        var questionDiv = '<div class="question" id=quest' + qNum + '> ' + data[qNum].question + '</div>'
        gameHTML.append(questionDiv)
        // console.log(questionDiv);

        for (i = 0; i < data[qNum].potentialAnswers.length; i++) {
            var newAnswerDiv = '<input type="radio" name="question' + qNum + '" id=answer' + i + ' value =' + data[qNum].potentialAnswers[i] + '> ' + data[qNum].potentialAnswers[i] + "</input> <br>";
            gameHTML.append(newAnswerDiv)
            // console.log(newAnswerDiv);
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





//   var questionsObject = {
//     "q1": "What is the air speed velocity of a fully laden European swallow?",
//     "q2": "How many humans are there in the Disney movie 'Bambi'?",
//     "q3": "When he won his first Masters in 1997, at the time Tiger Woods was the youngest golfer to do so.  How old was he?",
//     "q4": "What year was Prohibition prohibited in the USA?",
//     "a1": ["11 meters per second", "8 meters per second", "14 meters per second"],
//     "a2": ["Zero", "One", "Two", "Three"],
//     "a3": ["19", "20", "21", "22"],
//     "a4": ["1930", "1931", "1932", "1933"],
//     "a1correct": "11 meters per second",
//     "a2correct": "Zero",
//     "a3correct": "21",
//     "a4correct": "1933"
//   }




