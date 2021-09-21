var readlineSync = require("readline-sync");

const chalk = require('chalk');

var userName = readlineSync.question(chalk.cyanBright("Hey.. I bet you are doing Great on this lovely day!\n\n"+ chalk.greenBright("⩱  May i know your name?  ⩱\n")));

var score = 0;

console.log(chalk.magentaBright("\n\n⫎⫎⫎   Welcome " + userName + " to how well do you know money heist?   ⫍⫍⫍\n\n"));
console.log(chalk.redBright("            ㄟ( ▔, ▔ )ㄏ        \n\n"))

function play(question, answer) {
  var currentQuestion = readlineSync.question(question);
  if (currentQuestion.toUpperCase() === answer.toUpperCase()) {
    score += 1;
    console.log(chalk.bgGreen("\nLezzGOO!\n"));
    console.log("~(=^‥^)ノ\n");
    console.log(chalk.cyanBright.underline("You'r Score is:") + " " + chalk.yellowBright(score) + ("\n"));
  } else {
    console.log(chalk.bgRed("\nWoopsiez!\n"));
    console.log("~(>_<。)＼\n");
    console.log(chalk.cyanBright.underline("You'r Score is:") + " " + chalk.yellowBright(score) + ("\n"));
  }  
  console.log("⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘\n")
}

var questions = [{
  question : chalk.blueBright("1) ") + chalk.yellowBright("Where was money heist filmed?\n"),
  answer : "spain",
},{
  question : chalk.blueBright("2) ") + chalk.yellowBright("Name a football player that acted in this series\n"),
  answer : "neymar",
},{
  question : chalk.blueBright("3) ") + chalk.yellowBright("The Professer is a ne__?\n"),
  answer : "nerd",
},{
  question : chalk.blueBright("4) ") + chalk.yellowBright("Name the famous song in the series\n"),
  answer : "bella ciao",
},{
  question : chalk.blueBright("5) ") + chalk.yellowBright("Is 'Money Heist' the most viewed Netflix show or movie in six countries? (yes or no)\n"),
  answer : "yes",
},{
  question : chalk.blueBright("6) ") + chalk.yellowBright("Do you plan on performing a heist in the futre?\n"),
  answer : "no",
}]

for(var i=0;i<questions.length;i++) {
  var currentQuestion = questions[i];
 play(currentQuestion.question,currentQuestion.answer)
}

console.log(chalk.magentaBright("Congratzz on completing the Quiz...! You Scored: " + chalk.underline(score) + "\n"))

// for (let i=0;i<highestScore.length;i++) {
//   if(score > highestScore.score) {
//     console.log("You beat the high score!");
//   }
// }


//highscores

var highscores = [
  {
    name: chalk.greenBright("Pavan (anyday)"),
    score: 6,
  },

  {
    name: chalk.greenBright("Man"),
    score: 5,
  },
]

 var scoreMessage = chalk.magentaBright("Send me a screenshot if you beat one of their scores:\n")

 console.log(scoreMessage);

for (var i=0;i<highscores.length;i++) {
  var highCount = highscores[i];
  console.log(highCount.name);
  console.log(highCount.score);
}

