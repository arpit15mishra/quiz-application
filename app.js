function populate(){
    if(quiz.isEnded()){
        showScores();
    }else
    {
        var element = document.getElementById("questions");
        element.innerHTML= quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0 ; i < choices.length; i++){
            var element = document.getElementById("choice"+i);
            element.innerHTML = choices[i];
            guess("choice"+i,choices[i]);
        }
        showProgress();
    }
};

function showProgress(){

    var currentQuestionNumber = quiz.questionIndex+1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question  "+ currentQuestionNumber + " of " +quiz.questions.length;
};



function guess(id,guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
    
};


function showScores(){
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score' style='text-align:center'> Your Scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML=gameOverHtml; 
};

var questions = [new Question("who is the prime minister of india",["mahatma gandhi","rabindra nath tagore","sushma swaraj","narendra modi"],"narendra modi"),
new Question("1-who is the prime minister of india",["mahatma gandhi","rabindra nath tagore","sushma swaraj","narendra modi"],"narendra modi"),
new Question("2-who is the prime minister of india",["mahatma gandhi","rabindra nath tagore","sushma swaraj","narendra modi"],"narendra modi"),
new Question("3-who is the prime minister of india",["mahatma gandhi","rabindra nath tagore","sushma swaraj","narendra modi"],"narendra modi"),
new Question("4-who is the prime minister of india",["mahatma gandhi","rabindra nath tagore","sushma swaraj","narendra modi"],"narendra modi"),
new Question("5-who is the prime minister of india",["mahatma gandhi","rabindra nath tagore","sushma swaraj","narendra modi"],"narendra modi")
];
var quiz = new Quiz(questions);

populate();
