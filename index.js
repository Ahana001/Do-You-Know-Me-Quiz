var readlineSync = require('readline-sync');
var chalk = require('chalk');
var log = console.log;
var right = chalk.bgGreenBright.black;
var wrong = chalk.bgRedBright.black;
var score = 0;
const highScores = [
    {
        name: "Ankita",
        score: "5",
    },
    {
        name: "John",
        score: "4",
    },
];
var user = readlineSync.question("What is your name? ");
log("Welcome ",user , "to Do YOU KNOW ANKITA QUIZ ? ");

function play(question,answer){
  var userAns = readlineSync.question(question);
  if(userAns.toLocaleLowerCase() === answer){
    log(right("Yay, You are right :)"));
    score = score + 1;
  }else{
    log(wrong("Yay, You are  wrong"));
  }
}

var questions = [
  {
  question: "where do I live?  \n",
  answer : "bhavnagar"
  },
   {
    question : "what is my favourite color?  \n",
    answer : "blue"  
  },
  {
    question : "My favourite outdoor game?  \n",
    answer : "badminton"
  },{
    question : "what is my favourite movie? \n",
    answer : "vivah"
  },
  {
  question : "What kind of clothes do I not like to wear? \n",
  answer : "jeans"
  }
] 

for(let i = 0; i<questions.length; i++){
  play(questions[i].question,questions[i].answer)
}
function checkHighScore(score) {
    highScores.forEach((data) => {
        if (score >= data.score) {
            log(
                right(
                    "Contragts, You made a highscore By beating",
                    chalk.bgCyanBright.black(data.name)
                )
            );
        }
    });
}
checkHighScore(score);
console.log("Your Final Score : ",score);
