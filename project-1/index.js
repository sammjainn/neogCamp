var readlineSync = require("readline-sync");
var chalk = require("chalk");

const username = readlineSync.question("What is your name? ");
console.log(chalk.red.bold("Hello " + username));
console.log("\nWelcome to " + chalk.bgBlue.underline("HOW WELL DO YOU KNOW SAMRIDDHI? \n"));

let score = 0;

function play(ques, ans)
{
  let guess = readlineSync.question(chalk.green(ques));

  if(guess.toLowerCase() === ans.toLowerCase() )
  {
    score++;
    console.log(chalk.yellow("Correct answer"));
  }
  else{
    console.log(chalk.red("Wrong answer"));
  }
  console.log("Current score: "+score+"\n-------------");
}

let questions = [{
  ques: "How old am I? ",
  ans: "20"
},{
  ques: "Where do I live? ",
  ans: "Delhi"
},
{
  ques: "Am I awesome? ",
  ans: "Yes"
},{
  ques: "What is my last name? ",
  ans: "Jain"
},{
  ques: "How many siblings do I have? ",
  ans: "1"
},{
  ques: "Will I complete neogCamp level 0? ",
  ans: "Yes"
}]


for(let i=0; i<questions.length; i++)
{
  play(questions[i].ques, questions[i].ans);
}

console.log(chalk.inverse("Congrats! You completed the quiz.\n"))
console.log(chalk.bgRed("Final score: " + score +"/"+questions.length));