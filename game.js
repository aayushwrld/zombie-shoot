let gameBody = document.querySelector("#game-body");
let count = 0;
let score = 0;
let lives = 5;
let marginChange = 0;
let barLife = document.getElementById("max-lives");
let ops2;
let zombImage = document.querySelector("zombie-image")
let shotAudio = new Audio("./assets/shotgun.wav")
let bgmAudio = new Audio("./assets/bgm.mp3")

bgmAudio.play()
bgmAudio.loop = true
gameBody.onclick = () =>{
    shotAudio.play()
}

function zombieImage() {
    if(lives==0){
        window.open("game-over.html","_self")
    }
    ops2 = Math.ceil(Math.floor()*3)
    let img = document.createElement("img");
    let marginValue = Math.ceil(Math.random() * 90);
    img.style.marginLeft = `${marginValue}%`;
    img.setAttribute("class", "zombie-image");
    let operator = Math.ceil(Math.random()*5)
    switch(operator){
        case 1:
            img.setAttribute("src", "./assets/zombie-1.png");
            break
        case 2:
            img.setAttribute("src", "./assets/zombie-2.png");
            break
        case 3:
            img.setAttribute("src", "./assets/zombie-3.png");
            break
        case 4:
            img.setAttribute("src", "./assets/zombie-4.png");
            break
        case 5:
            img.setAttribute("src", "./assets/zombie-5.png");
            break
    }
let ops = Math.ceil(Math.random()*3)+2
img.style.animationDuration = `${ops}s`
img.style.width = "100px";
gameBody.appendChild(img);
count = 0;
img.onclick = () => {
    count ++
    score ++
    localStorage.setItem("score",score)
    gameBody.removeChild(img);
    zombieImage();
};

setTimeout(()=>{
    if (count == 0){
        gameBody.removeChild(img)   
        zombieImage()
        lives --;
        console.log(lives)
        marginChange += 10;
        barLife.style.marginLeft = `${marginChange}%`
        barLife.style.marginRight = `${marginChange}%`
        barLife.style.width = `${20*lives}%`
    }
},`${ops*1000}`)

}
let time = 20;
let timer = document.getElementById("timer");
let changeTime;

function startTimer(){
    time = 60;
    timer.textContent = time;
    changeTime = setInterval(()=>{
        time--;
        timer.textContent = time;
        if (time == 0){
            window.open("win.html", "_self");
        }
    },1000)
}
localStorage.setItem("score",score)

startTimer()
zombieImage();








// Iteration 1: Declare variables required for this game

// Iteration 1.2: Add shotgun sound

// Iteration 1.3: Add background sound

// Iteration 1.4: Add lives

// Iteration 2: Write a function to make a zombie

// Iteration 3: Write a function to check if the player missed a zombie

// Iteration 4: Write a function to destroy a zombie when it is shot or missed

// Iteration 5: Creating timer

// Iteration 6: Write a code to start the game by calling the first zombie

// Iteration 7: Write the helper function to get random integer