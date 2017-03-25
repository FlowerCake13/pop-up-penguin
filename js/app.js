//console.log("faafisdhifahsdifasidhfa");

function roar(){
     alert("Yaaaarrrr!");
}

var gamehold = document.getElementById('gameholder').childNodes;
var random = Math.floor(Math.random() * (9 - 1) + 1);
var newElements = [];
for (var i = 0; i < gamehold.length; i++){
	if (gamehold[i].tagName == "DIV") {
		newElements.push(gamehold[i]);
	}
}
var i;
for(i = 0; i < newElements.length; i++){
	//console.log(gamehold[i])
	if (newElements[i].tagName == "DIV") {
		console.log(newElements[i].id)
		if (newElements[i].id != "title") {
			console.log(newElements[i]);
			newElements[i].id = "penguin" + i;
			newElements[random].id = "yeti"; 
		}
	}
}