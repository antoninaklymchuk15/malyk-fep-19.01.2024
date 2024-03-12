let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

var randomIndex = Math.floor(Math.random() * images.length);

var imageElement = document.createElement("img");
imageElement.src = "img/" + images[randomIndex];


document.getElementById("container").appendChild(imageElement);