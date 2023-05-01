var random1 = (Math.random() * 6) + 1;
var rand1 = Math.floor(random1);

var image1 = "images/dice" + rand1 + ".png";

document.querySelector(".img1").setAttribute("src" , image1);


var random2 = (Math.random() * 6) + 1;
var rand2 = Math.floor(random2);

var image2 = "images/dice" + rand2 + ".png";

document.querySelector(".img2").setAttribute("src" , image2);


if(rand1 > rand2)
{
    document.querySelector("h1").innerHTML = "Player 1 won";
}
else if(rand1 < rand2)
{
    document.querySelector("h1").innerHTML = "Player 2 won";
}

else
{
    document.querySelector("h1").innerHTML = "Draw";
}

