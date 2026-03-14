function createConfetti(){

for(let i=0;i<80;i++){

let confetti=document.createElement("div");

confetti.classList.add("confetti");

confetti.style.left=Math.random()*100+"vw";

confetti.style.backgroundColor=
["#ff4fa3","#ffcc00","#00eaff","#ffffff"][Math.floor(Math.random()*4)];

confetti.style.animationDuration=(Math.random()*2+2)+"s";

document.body.appendChild(confetti);

setTimeout(()=>{
confetti.remove();
},5000);

}

}

setTimeout(createConfetti,5000);