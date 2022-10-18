var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question("What's Your Name? ")
console.log("Welcome😊 " + userName + " To Quiz About CRICKET... \n")

function play(question, answer) {
  var userAns = readlineSync.question(question);

  if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log("Yes It's Correct🤩 ");
    score += 1;
  } else {
    console.log("No It's Wrong😟 ")
  }
  console.log("Current Score Is : ", score)
  console.log("____________________")
}

var qAn = [
  {
    question: "How Many Players Can Play The Cricket? ",
    answer: "11"
  },
  {
    question: "What Is The Color Of The Indian team's Uniform?  ",
    answer: "blue"
  },
  {
    question: "Is Sachin Tendulkar Batsman? ",
    answer: "yes"
  }
  ,
  {
    question: "IPL Stands For? ",
    answer: "indian premiere league"
  }
  ,
  {
    question: "When India Was Won First World Cup? ",
    answer: "1983"
  }
]
for (var i = 0; i < qAn.length; i++) {
  play(qAn[i].question, qAn[i].answer)
}

if (score > 0) {
  console.log("CONGRATULATION YOU SCORED💥🤩 : " + score + "/5");
} else {
  console.log("Your Score Is " + score + "/5 You Don't Know About Cricket🙄")
}