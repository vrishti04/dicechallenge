var score1=0
var score2=0
function rollMe(){
var diceSound = new Audio("./dicesound.mp3");
diceSound.play();

var randomnumber1=Math.random()
randomnumber1=Math.floor(randomnumber1*6)+1
var randomimage1="dice"+randomnumber1+".png"
var randomimagesource1="./images/"+randomimage1
document.querySelector("img.img1").setAttribute("src",randomimagesource1);

var randomnumber2=Math.random()
randomnumber2=Math.floor(randomnumber2*6)+1
var randomimage2="dice"+randomnumber2+".png"
var randomimagesource2="./images/"+randomimage2
document.querySelector("img.img2").setAttribute("src",randomimagesource2)


if (randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player1 wins";
    score1++;
    document.getElementById("score1").innerHTML="Score: " + score1;
}
else if(randomnumber1<randomnumber2)
{
     document.querySelector("h1").innerHTML="Player2 wins";
     score2++;
     document.getElementById("score2").innerHTML="Score: " +score2;
}
else if(randomnumber1===randomnumber2)
{
     document.querySelector("h1").innerHTML="Draw"
}
document.querySelector("button").style.backgroundColor="wheat"

}