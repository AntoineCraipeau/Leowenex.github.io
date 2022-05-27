var ref = {
        "title":"",
        "url":"",
        "studio":"",
        "editor":"",
        "release":"",
        "cat":0
    }

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

let imports = (JSON.parse(localStorage.getItem("saveadd")))
if(imports==null){
    imports = [];
}
for(let game of imports){
    data.push(game);
}

console.log(JSON.stringify(data));

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