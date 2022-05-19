var list = [];

function decryptform(){
    var game = document.forms["newGame"];
    let gameobject = ({
        "title":game.elements.title.value,
        "url":game.elements.image.value,
        "studio":game.elements.studio.value,
        "editor":game.elements.publisher.value,
        "release":game.elements.release.value,
        "cat":game.elements.category.value
    })
    list.push(gameobject)
    add(gameobject)
}

function add(game){

    

	var tr = document.createElement("tr");

	var tdtitle = document.createElement("td");
	tdtitle.appendChild(document.createTextNode(game.title));
    tr.appendChild(tdtitle);

    var tdcat = document.createElement("td");
	tdcat.appendChild(document.createTextNode(game.cat));
    tr.appendChild(tdcat);

	var tdstudio = document.createElement("td");
	tdstudio.appendChild(document.createTextNode(game.studio));
    tr.appendChild(tdstudio);

	var tdpublisher = document.createElement("td");
	tdpublisher.appendChild(document.createTextNode(game.editor));
    tr.appendChild(tdpublisher);

    var tdrelease = document.createElement("td");
	tdrelease.appendChild(document.createTextNode(game.release));
    tr.appendChild(tdrelease);

	var currentDiv = document.getElementById('game-list');
	console.log(currentDiv);
	currentDiv.appendChild(tr);
  	
}

function del(){
	var table = document.getElementById('game-list');
	var length = table.rows.length;
	for (var i = 1; i < length; i++) {
    	table.deleteRow(1);
	}
}

function save(){
	localStorage.setItem("saveadd",JSON.stringify(list));
}

function importsave(){
	list = JSON.parse(localStorage.getItem("saveadd"));
    for(let game of list){
        add(game);
    }
}