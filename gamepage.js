var y = Math.floor(Math.random() * 10 + 1)
playername = localStorage.getItem("player_name");

var guess = 1;

function submit(){
    var x = document.getElementById("guessField").value;
    if (x == y){
        alert("PARABÉNS!!!!"+playername+"Você acertou em"+guess+"tentativa(s)");
        guess = 1
    }
    else if (x > y){
        guess++;
        alert("Opa, resposta errada.Tente um numero menor");
    }
    else
    {
        guess++;
        alert("Opa, resposta errada.Tente um numero maior");
    }
}
  
function playAgain(){
    y = Math.floor(Math.random()* 10+1);
}

