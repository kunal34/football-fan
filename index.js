

var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("Enter your name  ? ");
console.log("Hey ...!"  +userName);
console.log("----------");
console.log(" Welcome to  Football quiz ");
console.log("----------");
console.log("Select the appropriate option i.e a or b or c");
console.log("----------");
function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer)
{
  console.log("Correct");
  score = score + 1;
}
else
{
  console.log("Wrong");
}
console.log("Current score : ", score)
console.log("----------");
}
var questions =
[
  {
    question: "1. Which player scored the fastest hat-trick in the Premier League? ? a. CR7 b. Messi c. Sadio Mane ",
    answer: "c"
  },
  {
    question: "2. With 260 goals, who is the Premier League's all-time top scorer ? a. Zlatan b. Ronaldinho c.Alan Shearer ",
    answer: "b"
  },
  {
    question: "3. Which team won the first Premier League title? ? a. Man UTD b. Barcelona c. PSG  ",
    answer: "a"
  },
  {
    question: "4. How many clubs competed in the inaugural Premier League season? ? a. 22 b. 21 c. 20 ",
    answer: "a"
  },
    {
    question: "5. Current Football Club CR7 ? a. PSG b. Juventus c. Man Utd ",
    answer: "c"
  }
];
for (var i = 0; i<questions.length; i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
};
console.log("There You go , You have scored : ", score); 




