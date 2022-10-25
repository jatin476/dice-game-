var randomNumber1 = Math.floor(6*(Math.random()) + 1);
var randomNumber2 = Math.floor(6*(Math.random()) + 1);


var pic1 = "images"+ "\\"+ "dice" + randomNumber1 + ".png" ;
var pic2 = "images"+ "\\"+ "dice" + randomNumber2 + ".png" ;

document.querySelector(".img1").setAttribute("src" , pic1 );
document.querySelector(".img2").setAttribute("src" , pic2 );


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Win !";
}else if(randomNumber2> randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Win !";
}else{
    document.querySelector("h1").innerHTML = "Draw !";
}