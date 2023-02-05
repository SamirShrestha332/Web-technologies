let guess;
let rnum=Math.floor(Math.random()*10)+1;           
     console.log(rnum)
function amir(){
    guess=window.prompt("guess a number ?");
    if (rnum==guess){
     alert("cograts you guess the number !!!!");
    }
    else{
      message=document.getElementById("myLabel").style.Color="blue";
    }
    condition()
   }
let gameBegin=document.getElementById("myButton").onclick = function game(){
      guess=window.prompt("guess a number ?");
      if (rnum==guess){
       alert("congrats  you guess the number !!!!!")
      }
      else if(rnum!=guess){
        chance()
      }
      else{
        alert("invalid");
      }
      condition()
     }
     function condition(){
        let rematch=window.prompt("do u want to play again y/n")
        if(rematch=="y"){
            amir()
        }
        else{
           message=document.getElementById("myLabel").innerHTML="<h1>thank u for playing</h1>";
    
        }
     }
     function chance(){
         for(i=1;i<3;i++){
            let l=3;
              l=l-1;
            guess=window.prompt("wrong ! guess a number ?");
        }
     }