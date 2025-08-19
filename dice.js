class Dice {
  score = 0;
  getScore() {
    return this.score;
  }
}

class Game extends Dice {
  constructor() {
    super();
  }
  reset() {
    this.score = 0;
  }
}

const game = new Game();
let position = -1;
let gameStarted = false;
let score = 0;
let totalboxes = 10;


const scoreEl = document.getElementById("score");
const boxes = document.querySelectorAll(".box");
const boxtrap1 = document.getElementById("boxtrap1");
const boxtrap2 = document.getElementById("boxtrap2");
const boxtrap3 = document.getElementById("boxtrap3");
const boxtrap4 = document.getElementById("boxtrap4");
const diceEl = document.querySelectorAll(".dice");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const rollbtn = document.getElementById("rollbtn");
const circle = document.createElement("div");
const resetbtn = document.getElementById("reset");
const circleDiv = document.getElementById("circle");
const customAlert = document.getElementById("customAlert");
const customAlert1 = document.getElementById("customAlert1");
const okBtn = document.getElementById("okBtn");
const cancelBtn = document.getElementById("cancelBtn");
const showscore= document.getElementById("showscore");
const traps=["boxtrap1", "boxtrap2", "boxtrap3", "boxtrap4"]
const diceSound = new Audio("audio/dice-roll.mp3");
function resetGame(){
    if (typeof position === "number" && boxes[position]) {
        boxes[position].innerHTML = "";
    }

    position = -1;
    game.reset();
    gameStarted = false;
    scoreEl.textContent = "0";

    for (let i = 0; i < 6; i++) {
        const el = document.getElementById(`dice${i}`);
        if (el) {
            el.style.display = "none";
        }
    }
}
resetbtn.addEventListener("click", resetGame);
rollbtn.addEventListener("click",()=>{

   const roll = Math.floor(Math.random() * 6) + 1;
   diceSound.play()
    if (!gameStarted) {
    if (roll === 6 && position === -1) {
        gameStarted = true;
        position = 0;
        game.score = 0; 
        scoreEl.textContent = "0";

    } else {
        for (let i = 0; i < 6; i++) {
        const el = document.getElementById(`dice${i}`);
        if (el) {
            el.style.display = i === roll - 1 ? "block" : "none";
            el.style.transition = "transform 0.1s ease";

          el.style.transform = "translateX(-5px)";
          setTimeout(() => { el.style.transform = "translateX(5px)"; }, 100);
          setTimeout(() => { el.style.transform = "translateX(-5px)"; }, 200);
          setTimeout(() => { el.style.transform = "translateX(5px)"; }, 300);
          setTimeout(() => { el.style.transform = "translateX(0)"; }, 400);
        }
    }  
    }
} else {
    position += roll;
    game.score += roll; 
    scoreEl.textContent = game.score; 
}


    
        const totalboxes= boxes.length;
        if (position >= totalboxes) {
            position = totalboxes - 1;
           showToast("Game Over!☠️");
           gameStarted=false;
           resetGame()
          customAlert.style.display = "none";
          setTimeout(()=>{
          customAlert.style.display = "block";
    },2000)

          okBtn.onclick = () => {
          customAlert.style.display = "none";
          resetGame(); 
};

        cancelBtn.onclick = () => {
        customAlert.style.display = "none";
};
       }

        function showToast(message) {
        const x = document.getElementById("snackbar");
        x.textContent = message;
        x.classList.add("show");
        setTimeout(() => {
        x.classList.remove("show");
    }, 3000); 

}



    if (boxes[position] && traps.includes(boxes[position].id)) {
    showToast("Oh no! You hit a trap!💀");
    gameStarted=false;
    position=-1;
    game.reset();
    scoreEl.textContent="0"
    customAlert.style.display = "none";
    setTimeout(()=>{
    customAlert.style.display = "block";
    },2000)
    

okBtn.onclick = () => {
  customAlert.style.display = "none";
  resetGame(); 
};

cancelBtn.onclick = () => {
  customAlert.style.display = "none";
};

    }
    
    if(boxes[position] && boxes[position].id === "end"){
    showToast("You Win!🎉")
    }
        for (let i = 0; i < 6; i++) {
        const el = document.getElementById(`dice${i}`);
        if (el) {
            el.style.display = i === roll - 1 ? "block" : "none";
            el.style.transition = "transform 0.1s ease";

          el.style.transform = "translateX(-5px)";
          setTimeout(() => { el.style.transform = "translateX(5px)"; }, 100);
          setTimeout(() => { el.style.transform = "translateX(-5px)"; }, 200);
          setTimeout(() => { el.style.transform = "translateX(5px)"; }, 300);
          setTimeout(() => { el.style.transform = "translateX(0)"; }, 400);
        }
    }       
         if (boxes[position]) {
         boxes[position].appendChild(circleDiv);
    }
    if(gameStarted===true && position===0){
    showscore.style.display="block"
    setTimeout(()=>{
    showscore.style.display="none"
    },2000)
    }else{
    showscore.style.display="none"
    }
    
  });


    




 

