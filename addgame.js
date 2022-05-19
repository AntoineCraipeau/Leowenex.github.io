function add(){
	var task = document.forms["newTask"];
	console.log(task.elements.name.value);
	console.log(task.elements.date.value);
	console.log(task.elements["category"].value);

	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	td1.appendChild(document.createTextNode(task.elements.name.value));
	var td2 = document.createElement("td");
	td2.appendChild(document.createTextNode(task.elements.date.value));
	var td3 = document.createElement("td");
	td3.appendChild(document.createTextNode(task.elements["category"].value));

	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);

	console.log(tr);

	var currentDiv = document.getElementById('game-list');
	console.log(currentDiv);
	currentDiv.appendChild(tr);
  	
}