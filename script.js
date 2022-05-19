const data = [
    {
        "title":"GUILTY GEAR -STRIVE-",
        "studio":"Arc System Works",
        "editor":"Bandai Namco",
        "release":"2021",
    }, 
    {
        "title":"Street Fighter V",
        "studio":"Capcom",
        "editor":"Capcom",
        "release":"2016"
    }, 
    {
        "title":"Blazblue: Cross Tag Battle",
        "studio":"Arc System Works",
        "editor":"Arc System Works",
        "release":"2018"
    },
    {
        "title":"Dragon Ball FighterZ",
        "studio":"Arc System Works",
        "editor":"Bandai Namco Entertainment",
        "release":"2018"
    },
    {
        "title":"SoulCalibur VI",
        "studio":"Project Soul",
        "editor":"Bandai Namco Entertainment",
        "release":"2018"
    },
    {
        "title":"Tekken 7",
        "studio":"Bandai Namco Studios",
        "editor":"Bandai Namco Entertainment",
        "release":"2015"
    },
    {
        "title":"One Piece: Burning Blood",
        "studio":"Spike Chunsoft",
        "editor":"Bandai Namco Entertainment",
        "release":"2016"
    },
    {
        "title":"Super Smash Bros. Ultimate",
        "studio":"Sora",
        "editor":"Nintendo",
        "release":"2018"
    },
    {
        "title":"Naruto Shippuden: Ultimate Ninja Storm 4",
        "studio":"CyberConnect2",
        "editor":"Bandai Namco Entertainment",
        "release":"2017"
    },
    {
        "title":"Mortal Kombat 11",
        "studio":"NetherRealm Studios",
        "editor":"Warner Bros. Interactive Entertainment",
        "release":"2019"
    }
]

console.log(JSON.stringify(data));


function load(){
    document.getElementById('loading').style.display = 'none';
}


function show(data){
    let tab = 
        `<tr>
            <th>Title</th>
            <th>Studio</th>
            <th>Editor</th>
            <th>Release</th>
        </tr>`;
    
    for (let r of data){
        tab += `<tr>
        <td>${r.title}</td>
        <td>${r.studio}</td>
        <td>${r.editor}</td>
        <td>${r.release}</td>
        </tr>`;
    }

    document.getElementById("tables").innerHTML = tab; 

    show(data);
}