var readlineSync = require('readline-sync');

const chalk = require('chalk');
// console.log(chalk.blue('Hello world!')); 

var questionAnswersLevelOne = [
  {
    question: "1.Shortcut key for selecting the text? \n A : ctrl+c \n B : ctrl+x \n C : ctrl+a \n D : ctrl+v \n \n ",
    answer: "C"
  },
  {
    question: "2.Shortcut Key for copying the text?  \n A : ctrl+z \n B : ctrl+v \n C : ctrl+d \n D : ctrl+c \n \n ",
    answer: "D"
  },
  {
    question: "3.Shortcut key for pasting the text?  \n A : ctrl+s \n B : ctrl+a \n C : ctrl+v \n D : ctrl+z \n \n ",
    answer: "C"
  },
  {
    question: "4.Shortcut key for cutting the text?  \n A : ctrl+x \n B : ctrl+v \n C : ctrl+c \n D : ctrl+a \n \n ",
    answer: "A"
  },
  {
    question: "5.Shortcut key for saving the current document?  \n A : ctrl+s \n B : ctrl+v \n C : ctrl+z \n D : ctrl+s \n \n ",
    answer: "D"
  }
];

// questions and answers for level two.     mouse, cameras, scanners, keyboards,
var questionAnswersLevelTwo = [
  {
    question: "\nWhich of the following is an output device?  \n A : Keyboard \n B : Camera \n C : Printer \n D : Mouse \n \n  ",
    answer: "C"
  },
  {
    question: "Which device is used for entering data into a computer?  \n A : Printer \n B : Mouse \n C : Scanner \n D : Keyboard \n \n  ",
    answer: "D"
  },
  {
    question: "Which is not the operating system of a computer?  \n A : Windows \n B : Linux \n C : Android \n D : macOS \n \n  ",
    answer: "C"
  }, {
    question: "Is Ubuntu operating system? \n \n A : Yes \n B : No \n \n ",
    answer: "A"
  },
  {
    question: "Is HP indian company? \n \n A : Yes \n B : No \n \n ",
    answer: "B"
  }

];

//***
var score = 0;

var userName = readlineSync.question(chalk.blue("What is your Name? "));
console.log(chalk.cyan("\nWelcome " + userName.toUpperCase() + "😊 into quiz about shortcut keys of computer💻💻\n"));

// exit game or not
var yesNo = readlineSync.question(chalk.magenta("Are you ready? (yes/no): "));
// chalk.green('Right!')
if (yesNo === "yes") {
  console.log(chalk.red("\nNote:\n 1.This is the level one of the quiz. \n 2. You have to score 5 to go into level two.\n 3.select A, B, C or D for the answers. \n"));

  for (var i = 0; i < questionAnswersLevelOne.length; i++) {
    playTheGame(questionAnswersLevelOne[i].question, questionAnswersLevelOne[i].answer);
  }

  // main Function
  function playTheGame(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer) {
      console.log(chalk.green("\nYeyy! You Guessed Correct🤩\n"));
      score++;
    }
    else {
      console.log(chalk.red("Ohh! You Guessed Wrong😔\n"));
    }
    console.log(chalk.bgGrey("Current Score: ", score, "\n"));
    console.log("------------------------------------\n");
  }

  // ***
  var levelTwoScore = 0;
  if (score >= 5) {
    console.log(chalk.blue("CONGRATULATIONS🤩 " + userName.toUpperCase() + " YOU HAVE PASSED THE LEVEL ONE😎 \n \n "))
    console.log(chalk.magenta("Welcome to the Level Two of the quiz."));
    for (var i = 0; i < questionAnswersLevelTwo.length; i++) {
      levelTwoScore++;
      playTheGame(questionAnswersLevelTwo[i].question, questionAnswersLevelTwo[i].answer);
    }
    console.log(chalk.cyan("You Scored: " + levelTwoScore + " in to thee level Two.\n"));
  }
  else {
    var requireScore = 5 - score;
    console.log(chalk.cyan("You Scored: " + score + "😐 You need " + requireScore + " more points to go into the Level Two."));

  }

  // ***


  if (score > 5) {
    console.log(chalk.green("Congratulations🤩 You Scored: " + score + "/10"));
  }
  else {
    console.log(chalk.magenta("You Scored😐: " + score + "/10"));
  }


}

else {
  console.log(chalk.red("\n" + userName.toUpperCase() + " You are out from the game!!!"))
}


