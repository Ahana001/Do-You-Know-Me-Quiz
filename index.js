var readlineSync = require('readline-sync');
var score = 0;
var user = readlineSync.question("What is your name? ");
console.log("Welcome ",user , "to Do YOU KNOW ANKITA QUIZ ? ");

function play(question,answer){
  var userAns = readlineSync.question(question);
  if(userAns === answer){
    console.log("you are right")
    score = score + 1;
  }else{
    console.log("You are wrong")
  }
}

var questions = [
  {
  question: "where do I live?  \n",
  answer : "Bhavnagar"
  },
   {
    question : "what is my favourite color?  \n",
    answer : "blue"  
  },
  {
    question : "My favourite outdoor game?  \n",
    answer : "badminton"
  }
] 

for(let i = 0; i<questions.length; i++){
  play(questions[i].question,questions[i].answer)
}

console.log("Your Final Score : ", score);