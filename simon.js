let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];

let started =false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
  if(started==false){
    console.log("game is started");
    started=true;
    Levelup();
  }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}

function Levelup(){
    userSeq=[];
    level++; 
  h2.innerText=`level ${level}`;
  let randomIndex=Math.floor(Math.random()*btns.length);
  let randomcolor=btns[randomIndex];
  let randomBtn=document.querySelector(`.${randomcolor}`);
  gameSeq.push(randomcolor);
  btnflash(randomBtn);
}
function checkAns(idx){

   if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
    setTimeout(Levelup,1000);
    }
   }else{
    h2.innerHTML=`Game Over! Your score was <br>${level}</br> Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
   }
}
 function btnpress() {
    let btn=this;
    userflash(btn);

   let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
 };
let allbtns=document.querySelectorAll(".btn");
for(let btn of allbtns){
    btn.addEventListener("click", btnpress);
}
console.log("GameSeq",gameSeq);
console.log("userSeq",userSeq);

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}