
//We fill the following object depending of what the user researches.
var ref = {
        "title":"",
        "url":"",
        "studio":"",
        "editor":"",
        "release":"",
        "cat":0
    }

//The following methods are called by the form of search.html to modify the ref object which is then used by showfilter to refine the content of the list.
function setTitle(title){
    ref.title = title;
    showfilter(data);
}

function setStudio(studio){
    ref.studio = studio;
    showfilter(data);
}

function setEditor(editor){
    ref.editor = editor;
    showfilter(data);
}

function setRelease(release){
    ref.release = release;
    showfilter(data);
}

function setCategory(cat){
    ref.cat = cat;
    showfilter(data);
}

//We get the content of the localstorage and add the games contained in the list taken from games.js
let imports = (JSON.parse(localStorage.getItem("saveadd")))
if(imports==null){
    imports = [];
}
for(let game of imports){
    data.push(game);
}

//We display the data taken from the game.js file and from the local storage. (The ref object is empty and won't be taken into account there)
showfilter(data);

function showfilter(data){
    let tab = "";
    
    for (let r of data){
        if (ref.title == "" || r.title.toLowerCase().startsWith(ref.title.toLowerCase())){
            if (ref.cat == 0 || r.cat.toLowerCase() == ref.cat.toLowerCase()){
                if (ref.studio == "" || r.studio.toLowerCase().startsWith(ref.studio.toLowerCase())){
                    if (ref.editor == "" || r.editor.toLowerCase().startsWith(ref.editor.toLowerCase())){
                        if (ref.release == "" || r.release.toLowerCase().startsWith(ref.release.toLowerCase())){
                            tab += `<div class="game">
                            <img src="${r.url}" width="300" height="400">
                            <div class="gameinfo">
                                <p>${r.title}</p>
                                <div class="moreinfo">
                                    <br>
                                    <p>${r.studio}</p>
                                    <p>${r.editor}</p>
                                    <p>${r.release}</p>
                                </div>
                            </div>
                            </div>`;
                        }
                    }
                }
            }
        }
        document.getElementById("tables").innerHTML = tab;
    }

    document.getElementById("tables").innerHTML = tab;
}

//The following is used to conditionnaly display the form

var shown = false;

function reveal(){
    let form = document.getElementsByClassName("headform")[0];
    console.log(form);
    if(shown==false){
        shown = true;
        form.innerHTML=`
            <form>
				<div>
					<input type="text" id="title" name="game_title" placeholder="Enter the Title" onchange="setTitle(this.value)">
    			</div>
				<div>
					<select name="category" id="game_category" onchange="setCategory(this.value)">
						<option value=0>--Category--</option>
						<option value="adventure">Adventure</option>
						<option value="rpg">RPG</option>
						<option value="shooter">Shooter</option>
						<option value="simulator">Simulator</option>
						<option value="sport">Sport</option>
						<option value="strategy">Strategy</option>
						<option value="vsfighter">VsFighter</option>	
					</select>
				</div>
				<div>
					<input type="text" id="studio" name="game_studio" placeholder="Enter the Studio" onchange="setStudio(this.value)">
    			</div>
				<div>
					<input type="text" id="editor" name="game_editor" placeholder="Enter the Editor" onchange="setEditor(this.value)">
    			</div>
				<div>
					<input type="text" id="release" name="game_release" placeholder="Enter the Year" onchange="setRelease(this.value)">
    			</div>
			</form>
        `;
    }
    else{
        shown = false;
        form.innerHTML=``;
    }
}