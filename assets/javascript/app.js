//display timer, questions, and answers when start is clicked
var rightAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var questionNumber = 0;
var questionAnswerA = $("<p>", {class: "answers"});
var questionAnswerB = $("<p>", {class: "answers"});
var questionAnswerC = $("<p>", {class: "answers"});
var questionAnswerD = $("<p>", {class: "answers"});
var timerDiv = $("<div>", {class: "timer"});
var time = 30;
var intervalId;
var clockRunning = false;
var gamePlay = function game (){
    if (questionNumber < 8){
        time = 30;
        intervalId = setInterval(count,1000);
        $("#game").html(timerDiv);
        $("#game").append(qArray[questionNumber].question);
        $("#game").append(questionAnswerA.html(qArray[questionNumber].answers.a));
        $("#game").append(questionAnswerB.html(qArray[questionNumber].answers.b));
        $("#game").append(questionAnswerC.html(qArray[questionNumber].answers.c));
        $("#game").append(questionAnswerD.html(qArray[questionNumber].answers.d));
    }
    else {
        $("#game").html('<div> Lets see how well you know the Windy City </div>');
        $("#game").append('<div> Right Answers: ' + rightAnswers + '</div>');
        $("#game").append('<div> Wrong Answers: ' + wrongAnswers + '</div>');
        $("#game").append('<div> Uanswered: ' + unanswered + '</div>');
        $("#game").append('<button class="restartButton">RESTART</button>')
    }
};
var count = function countdown (){
    if(time > 0){
        $(".timer").text("Time Remaining: " + time);
        time--;
    }
    else {
        unanswered++;
        clearInterval(intervalId);
        $("#game").html('<img class="image" src="'+qArray[questionNumber].img+'">');
        $("#game").prepend('<div> Out of Time! </div>');
        questionNumber++;
        setTimeout(gamePlay, 1000 * 3);
        console.log("Time's Up!")
    }
}
questionAnswerA.attr("data-answer", "a");
questionAnswerB.attr("data-answer", "b");
questionAnswerC.attr("data-answer", "c");
questionAnswerD.attr("data-answer", "d");

$(".startButton").on("click", gamePlay);
$(document).on("click", ".restartButton", function(){
    rightAnswers = 0;
    wrongAnswers = 0;
    unanswered = 0;
    questionNumber = 0;
    time = 30;
    intervalId = setInterval(count,1000);
    $("#game").html(timerDiv);
    $("#game").append(qArray[questionNumber].question);
    $("#game").append(questionAnswerA.html(qArray[questionNumber].answers.a));
    $("#game").append(questionAnswerB.html(qArray[questionNumber].answers.b));
    $("#game").append(questionAnswerC.html(qArray[questionNumber].answers.c));
    $("#game").append(questionAnswerD.html(qArray[questionNumber].answers.d)); 
});

$(document).on("click", ".answers", function(){
    var selectedAnswer = $(this).attr("data-answer");
    var correctAnswer = qArray[questionNumber].correctAnswer;
    console.log(selectedAnswer);
    if(selectedAnswer === correctAnswer){
        rightAnswers ++;
        clearInterval(intervalId);
        $("#game").html('<img class="image" src="'+qArray[questionNumber].img+'">');
        $("#game").prepend('<div> Correct! </div>');
        questionNumber ++;
        setTimeout(gamePlay, 1000 * 3);
        console.log("correct!")
    }
    else {
        wrongAnswers ++;
        clearInterval(intervalId);
        $("#game").html('<img class="image" src="'+qArray[questionNumber].img+'">');
        $("#game").prepend('<div> Wrong the answer was ' + qArray[questionNumber].correctAnswerText + '</div>');
        questionNumber ++;
        setTimeout(gamePlay, 1000 * 3);
        console.log("wrong!")
    }
})
//create an array of questions
var qArray = [
    {
    question: "How many championships have the Bulls won?",
    answers: {
        a: "Six",
        b: "Seven",
        c: "Nine",
        d: "Ten"
    },
    correctAnswer: "a",
    correctAnswerText: "Six",
    img: "assets/images/michaeljordan.jpg",
    },
    {
    question: "Who is the current captain of the Chicago Blackhawks?",
    answers: {
        a: "Jonathan Toews",
        b: "Patrick Kane",
        c: "Jaromir Jagr",
        d: "Corey Crawford"
    },
    correctAnswer: "a",
    correctAnswerText: "Jonathan Toews",
    img: "assets/images/jonathantoews.jpg",
    },
    {
    question: "What year did the Bears win their Superbowl?",
    answers: {
        a: "2001",
        b: "1999",
        c: "1985",
        d: "1975"
    },
    correctAnswer: "c",
    correctAnswerText: "1985",
    img: "assets/images/bearssuperbowl.jpg",
    },
    {
    question: "Who is the last Bulls player to win 6th man of the year?",
    answers: {
        a: "Nikola Mirotic",
        b: "Kirk Heinrich",
        c: "Steve Kerr",
        d: "Ben Gordon"
    },
    correctAnswer: "d",
    correctAnswerText: "Ben Gordon",
    img: "assets/images/bengordon.jpg",
    },
    {
    question: "What former Bear was voted to the most pro-bowls as a Chicago Bear",
    answers: {
        a: "Walter Payton",
        b: "Mike Singletary",
        c: "Brian Urlacher",
        d: "Dick Butkis"
    },
    correctAnswer: "b",
    correctAnswerText: "Mike Singletary",
    img: "assets/images/mikesingletary.jpg",
    },
    {
    question: "What was the original name of the ballpark built at Clark and Addison?",
    answers: {
        a: "Weeghmam Park",
        b: "Wrigley Field",
        c: "Clark Park",
        d: "Cubs Field"
    },
    correctAnswer: "a",
    correctAnswerText: "Weeghmam Park",
    img: "assets/images/wrigleyfield.jpg",
    },
    {
    question: "On what day did the Cubs play their first night game at Wrigley Field?",
    answers: {
        a: "August 8th, 1988",
        b: "August 8th, 1989",
        c: "August 9th, 1988",
        d: "August 9th, 1989"
    },
    correctAnswer: "c",
    correctAnswerText: "August 9th, 1988",
    img: "assets/images/wrigleyrain.jpg",
    },
    {
    question: "Kerry Wood tied whose record for most strikeouts (20) in an MLB game?",
    answers: {
        a: "Randy Johnson",
        b: "Curt Schilling",
        c: "Nolan Ryan",
        d: "Roger Clemens"
    },
    correctAnswer: "d",
    correctAnswerText: "Roger Clemens",
    img: "assets/images/rogerclemens.jpg",
    },
]
//start the timer when start button is clicked
//allow user to click answers
//stop timer and display correct vs incorrect
//show next question
//when questions are complete show correct vs incorrect number
