// We try to import data from Local Storage on load
var list = JSON.parse(localStorage.getItem("saveadd"));

if(list == null){
    list = [];
}
for(let game of list){
    add(game);
}

function decryptform(){
    var game = document.forms.newGame;
    let gameobject = ({
        "title":game.elements.title.value,
        "url":game.elements.image.value,
        "studio":game.elements.studio.value,
        "editor":game.elements.publisher.value,
        "release":game.elements.release.value,
        "cat":game.elements.category.value
    })
    //We had the new game to stored list
    list.push(gameobject);
    localStorage.setItem("saveadd",JSON.stringify(list));
    //We had the new game to displayed list
    add(gameobject);
}

function add(game){

	var ntab = document.createElement("tr");
    ntab.innerHTML = `
    <tr class="game">
    <img src="${game.url}" width="300" height="400">
    <div class="gameinfo">
        <p>${game.title}</p>
        <div class="moreinfo">
            <br>
            <p>${game.studio}</p>
            <p>${game.editor}</p>
            <p>${game.release}</p>
        </div>
    </div>
    </tr>
    `;

	let list = document.getElementById("game-list");
    list.appendChild(ntab);
  	
}


//We keep the two deleters separated, just in case.
function del(){
    deletedisplay();
    deletesave();
}

function deletedisplay(){
	var table = document.getElementById('game-list');
	var length = table.rows.length;
	for (var i = 0; i < length; i++) {
    	table.deleteRow(0);
	}
    list = [];
}
function deletesave(){
    localStorage.removeItem("saveadd");
}

//The following is used to conditionnaly display the form

var shown = false;

function reveal(){
    let form = document.getElementsByClassName("headform")[0];
    console.log(form);
    if(shown==false){
        shown = true;
        form.innerHTML=`
        <form name="newGame" class="box" id="newGame" onsubmit="">
				<div class="choice">
					<div>
						<input type="text" id="title" name="game_title" placeholder="Enter game title" required>
					</div>
					<div>
						<input type="text" id="image" name="game_image" placeholder="Enter link to game poster" required>
					</div>
					<div>
						<input type="text" id="studio" name="game_studio" placeholder="Enter studio" required>
					</div>
                </div>
                <div class="choice">
					<div>
						<input type="text" id="publisher" name="game_publisher" placeholder="Enter publisher" required>
					</div>
					<div>
						<input type="date" id="release" name="game_release"
							value="2022-04-22" min="2022-04-22">
					</div>
					<div>
						<select name="category" id="game_category">
							<option value="Miscelaneous">--Please choose an option--</option>
							<option value="Adventure">Adventure</option>
							<option value="RPG">RPG</option>
							<option value="Shooter">Shooter</option>
							<option value="Simulator">Simulator</option>
							<option value="Sport">Sport</option>
							<option value="Strategy">Strategy</option>
							<option value="VsFighter">VsFighter</option>
						</select>
					</div>
				</div>
                <div class="validate">
                    <button onclick="decryptform()" type="reset">Add</button>
                    <button type="button" onclick="del()">Delete</button>
                    <button type="reset">Cancel</button>
                </div>
			</form>
        `;
    }
    else{
        shown = false;
        form.innerHTML=``;
    }
}