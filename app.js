let humascore = 0;
let computerscore = 0;
let result = "";
const choices = ['rock','paper','scissor'];
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const who_won = document.querySelector(".who-won");
const hs = document.querySelector(".human-score");
const cs = document.querySelector(".computer-score");
const msg = document.querySelector(".message");
const restart = document.querySelector("#restart");
const divbox = document.querySelector(".result");
hs.textContent=0;
cs.textContent=0;

function play(userchoice){
    const computerchoice = choices[Math.floor(Math.random()*3)];
    if (userchoice==='rock'){
        box1.textContent= '✊';
    } else if (userchoice==='paper'){
        box1.textContent= '✋';
    } else{
        box1.textContent='✌️';

    }
    if (computerchoice==='rock'){
        box2.textContent= '✊';
    } else if (computerchoice==='paper'){
        box2.textContent= '✋';
    } else{
        box2.textContent='✌️';

    }
    if (userchoice===computerchoice){
        who_won.textContent= "It's a tie!!!";
    }

    else if (userchoice==='rock' && computerchoice==='scissor' ||
        userchoice==='paper' && computerchoice==='rock' ||
        userchoice==='scissor' && computerchoice==='paper'){
            humascore++;
            who_won.textContent= 'User win this round!!!';
    } else {
            computerscore++;
            who_won.textContent= "Computer win this round!!!";
    }
    hs.textContent=humascore;
    cs.textContent=computerscore;

    if (humascore==5 || computerscore==5){
        if (humascore>computerscore){
            result = "User has won the match!!!";
        } else {
            result= "Computer has won the match!!!";
        }
        msg.textContent= result;
        divbox.classList.add('addition');
      
    } 
     
    
   
  
}

restart.addEventListener("click",function(){
    divbox.classList.remove("addition");
    humascore=0;
    computerscore=0;
    result="";
    hs.textContent=0;
    cs.textContent=0;
});

