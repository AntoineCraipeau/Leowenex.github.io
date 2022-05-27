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

	var ntab = `
    <div class="game">
    <img src="${game.url}" width="300" height="400">
    <div class="gameinfo">
        <p>${game.title}</p>
        <div class="moreinfo">
            <br>
            <p>${r.studio}</p>
            <p>${r.editor}</p>
            <p>${r.release}</p>
        </div>
    </div>
    </div>
    `;

	document.getElementById("game-list").innerHTML = ntab;
  	
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