
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
