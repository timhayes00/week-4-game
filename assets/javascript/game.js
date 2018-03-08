// STOPWATCH ACTIVITY (SOLUTION)
// =============================
var clockRunning = false;
var intervalId;
var startTime = 30;
count = 0;
var answersUnanswered = 4;
var answersCorrect = 0;
var answersWrong =0;


startClock = function() {
if (!clockRunning) {
    console.log("we have ignition");
    clockRunning = true;
    while (count < 30)
        {
            intervalId = setInterval(showTime(), 1000);
        }
}
}

showTime = function(){
    $("#time-remaining").html("You have " + (startTime - count) + " seconds left");
    count++;
}

startClock();



var data = [
    {
        question:"What is the air speed velocity of a fully laden European swallow?",
        potentialAnswers:["11 meters per second", "8 meters per second", "14 meters per second"],
        answer:"11 meters per second"
    },
    {   
        question:"How many humans are there in the Disney movie 'Bambi'?",
        potentialAnswers:["Zero", "One", "Two", "Three"], 
        answer:"Zero"
    },
    {   
        question:"When he won his first Masters in 1997, at the time Tiger Woods was the youngest golfer to do so.  How old was he?",
        potentialAnswers:["19", "20", "21", "22"],
        answer:"21"
    },
    {
        question:"What year was Prohibition repealed in the USA?",
        potentialAnswers:["1930", "1931", "1932", "1933"],
        answer:"1933"
    }
]


for (var qNum = 0; qNum < 4; qNum++){
    var questionDiv = '<div class="container"><div class ="row"><div class="col-md-8">' + data[qNum].question + '</div></div></div>'
    document.querySelector(".question").innerHTML += "<br>" + questionDiv + "<hr>";

    for (var i = 0; i < data[qNum].potentialAnswers.length; i++) {
        var newAnswerDiv = '<label><input type="radio" name="optradio"><div class="radio-btns">' + data[qNum].potentialAnswers[i] + "</label></div>";
        document.querySelector(".radio-btns").innerHTML += newAnswerDiv + "<hr>";
        console.log(newAnswerDiv);
        }
}


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




