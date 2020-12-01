var readlineSync = require("readline-sync");
var chalk = require("chalk");

const username = readlineSync.question("What is your name? ");
console.log(chalk.red.bold("Hello " + username));
console.log("\nWelcome to " + chalk.bgBlue.underline("THE MUSIC QUIZ ")+" by Samriddhi ");

function play(ques, options, ans)
{
  console.log(chalk.green("\n"+ques));
  for(let i=0; i<options.length;i++)
    console.log(i+1 + ". " + options[i]);
  let guess = readlineSync.question(chalk.rgb(0,191,255)("Choose the correct option ~ "));

  if(guess === ans )
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
  ques: "Which of the following musical instruments is of Indian origin?",
  options: ["Guitar", "Piano", "Flute", "Drums"],
  ans: "3"
},{
  ques: "Which is a wind instrument?",
  options: ["Sitar", "Shehnai", "Pakhawaj", "Mridangam"],
  ans: "2"
},{
  ques: "Who is not related to music?",
  options: ["Mozart", "Bach", "Picasso", "Beethoven"],
  ans: "3"
},{
  ques: "Which stringed instrument has the most number of strings?",
  options: ["Guitar", "Ukelele","Violin","Sitar"],
  ans: "4"
},{
  ques: "The lowest range of musical note is referred to as",
  options: ["Treble", "Soprano", "Alto", "Bass"],
  ans: "4"
},{
  ques: "Which of the following is a percussion instrument?",
  options: ["Cymbal", "Mandolin", "Santoor", "Accordion"],
  ans: "1"
},]

let highscorers = [{
  name: "Samriddhi",
  score:6
},
{
  name: "Ustaad Ji",
  score:5
}
]

let i=0, attempted=0, score=0;
do{
  play(questions[i].ques, questions[i].options, questions[i].ans);
  i++;
  attempted++;
  let user = readlineSync.question("Press enter key to continue....to exit press 'y' and enter...");
  if(user=="y")
    break;
}
while(i<questions.length)

console.log(chalk.inverse("Congrats! You completed the quiz.\n"))
console.log(chalk.bgRed("Final score: " + score +"/"+attempted));


if(score>=highscorers[0].score){
  console.log(chalk.rgb(255,192,203).bold("Yayy you got a high score"));
  console.log("To get your name added to Top Scorers list, send me a screenshot");
}

console.log(chalk.bold("\nHere are the top scorers so far:"));
for(let i=0; i<highscorers.length; i++)
{
  console.log(">" + highscorers[i].name + ": " + highscorers[i].score);  
}