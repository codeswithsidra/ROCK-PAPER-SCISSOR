let text2 = document.querySelector(".scores");

const score = JSON.parse(localStorage.getItem("score")) || {

    wins: 0,
    Loses: 0,
    ties: 0,
  };
  console.log(score);

  // This function is for computer move.
  function Function_1_for_ComputerMove() {
    let computerMove = "";
    let result = "";

    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber <= 1 / 3) {
      computerMove = "Rock";
    } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
      computerMove = "Paper";
    } else if (randomNumber > 2 / 3 && randomNumber <= 1) {
      computerMove = "Scissors";
    }
    return computerMove;
  }
  // using parameters to clean and reduce the redendency in the code.

  function Function_2_for_User_Move(userMove) {
    const computerMove = Function_1_for_ComputerMove(); //take const computerMove variable to store the value of function1 computerMove
    let result = "";
    const message = document.querySelector(".message");
    let text1 = document.querySelector(".moves");
   

    if (userMove === "Rock") {
      if (computerMove === "Rock") {
        result = "Tie Try again!";
      } else if (computerMove === "Paper") {
        result = "You Lose!";
      } else if (computerMove === "Scissors") {
        result = "You Win";
      }
    } else if (userMove === "Paper") {
      if (computerMove === "Rock") {
        result = "You Win";
      } else if (computerMove === "Paper") {
        result = "Tie Try again!";
      } else if (computerMove === "Scissors") {
        result = "You Lose!";
      }
    } else if (userMove === "Scissors") {
      if (computerMove === "Rock") {
        result = "You Lose!";
      } else if (computerMove === "Paper") {
        result = "You Win";
      } else if (computerMove === "Scissors") {
        result = "Tie Try again!";
      }
    }
    if (result === "You Win") {
      message.innerHTML = "You Win";
      score.wins += 1;
    } else if (result === "You Lose!") {
      message.innerHTML = "You Lose!";
      score.Loses += 1;
    } else if (result === "Tie Try again!") {
      message.innerHTML = "Tie Try again!";
      score.ties += 1;
    }
    localStorage.setItem("score", JSON.stringify(score));

    text1.innerHTML = `You choose: <img src="Newfolder/${userMove}-emoji.png" width="70px"/> Computer choose: <img src="Newfolder/${computerMove}-emoji.png" width="70px"/>`;
   
    updateScore();
   
  }
function updateScore(){
    text2.innerHTML = `Wins: ${score.wins}, Losses: ${score.Loses}, Ties: ${score.ties}`;
};



let intervalId;
let autoPlay = false;

  const Buttoon = document.querySelector('.autoPlay');
  Buttoon.addEventListener('click',()=>{
    AutoPlay();
  })
 

function AutoPlay(){

  if(!autoPlay){
    intervalId = setInterval(()=>{
      let UserMove = Function_1_for_ComputerMove();
      Function_2_for_User_Move(UserMove);
      autoPlay = true;
    Buttoon.innerText = 'Stop Playing';
     
    },1000);
  }
  else{
    clearInterval(intervalId);
    autoPlay= false;
    Buttoon.innerHTML = 'AutoPlay';
  }
  
  };



 document.addEventListener('keydown', (event)=>{
      console.log(event.key);
      if(event.key === 'r' || event.key === 'R'){
        Function_2_for_User_Move('Rock');
      } else if(event.key === 'p' || event.key === 'P')
      {
        Function_2_for_User_Move('Paper');
      } else if(event.key === 's' || event.key === 'S')
      {
        Function_2_for_User_Move('Scissors');
      }
      else if(event.key === 'a' || event.key === 'A')
      {
        AutoPlay();
      }
  else if(event.key === 'Backspace'){
    resetMessage();
    // localStorage.removeItem('score');
    // score.wins = 0;
    // score.Loses = 0;
    // score.ties = 0;
    // updateScore();
  }
  });
  

  document.querySelector('.reset-btn').addEventListener('click', ()=>{
    resetMessage();
    // localStorage.removeItem('score');
    // score.wins = 0;
    // score.Loses = 0;
    // score.ties = 0;
    // updateScore();
  })

  function resetMessage(){
  
  let msgpara = document.querySelector('.resetmsg');
  msgpara.innerHTML = `Are you sure you want to reset the score. <button class="js yes">Yes</button><button class="js no">No</button>`;
  document.querySelector('.yes').addEventListener('click',()=>{
    msgpara.innerHTML = '';
    localStorage.removeItem('score');
    score.wins = 0;
    score.Loses = 0;
    score.ties = 0;
    updateScore();
  })
  document.querySelector('.no').addEventListener('click',()=>{
    msgpara.innerHTML = '';
  })}