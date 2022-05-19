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

    var image = document.createElement("img");
    image.src = game.url;
    image.width = "300";
    image.height = "400";
    tr.append(image);

    var infodiv = document.createElement("div");
    infodiv.className = "gameinfo";


	var tdtitle = document.createElement("td");
	tdtitle.appendChild(document.createTextNode(game.title));
    infodiv.appendChild(tdtitle);

    var tdcat = document.createElement("td");
	tdcat.appendChild(document.createTextNode(game.cat));
    infodiv.appendChild(tdcat);

	var tdstudio = document.createElement("td");
	tdstudio.appendChild(document.createTextNode(game.studio));
    infodiv.appendChild(tdstudio);

	var tdpublisher = document.createElement("td");
	tdpublisher.appendChild(document.createTextNode(game.editor));
    infodiv.appendChild(tdpublisher);

    var tdrelease = document.createElement("td");
	tdrelease.appendChild(document.createTextNode(game.release));
    infodiv.appendChild(tdrelease);

    tr.appendChild(infodiv);

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
    list = [];
}

function save(){
	localStorage.setItem("saveadd",JSON.stringify(list));
}

function importsave(){
	list = JSON.parse(localStorage.getItem("saveadd"));
    if(list == null){
        list = [];
    }
    for(let game of list){
        add(game);
    }
}

function deletesave(){
    localStorage.removeItem("saveadd");
}