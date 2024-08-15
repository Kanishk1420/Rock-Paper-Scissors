let userscore = 0;
let compscore = 0;
let drawscore = 0;

const options = ["rock", "paper", "scissors"];
const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const user = document.getElementById("user-score");
const comp = document.getElementById("comp-score");
const draw = document.getElementById("draw-score");
const aud = new Audio("../Audios/Click - Sound Effect (HD).mp3");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    const rand = Math.floor(Math.random() * 3);
    const compChoice = options[rand];
    aud.play();
    if (userChoice === compChoice) {
      drawscore++;
      msg.innerText="Game was Draw!";
      msg.style.backgroundColor="#081b31";
      draw.innerText= drawscore;
      
    } else {
      let userwin;
      if (userChoice === "rock") {
        userwin = compChoice === "scissors";
      } else if (userChoice === "paper") {
        userwin = compChoice === "rock";
      } else if (userChoice === "scissors") {
        userwin = compChoice === "paper";
      }
      showWinner(userwin,userChoice,compChoice); // function call
    }
  });
});
const showWinner = (userwin,userChoice,compChoice) => {
  if (userwin) {
    userscore++;
    user.innerText= userscore;
    msg.innerText=`You win! Your ${userChoice} Beats ${compChoice}`;
    msg.style.backgroundColor="Green";
  } else {
    compscore++;
    comp.innerText=compscore;
    msg.innerText=`You lose! ${compChoice} Beats ${userChoice}`;
    msg.style.backgroundColor="Red";
  }
};
