let spiner = document.getElementById('spiner');

for (let value of dataBase) {
	spiner.appendChild(item(value))
}



function item(arg) {
	let array = arg;
	let album = document.createElement('li');
	album.classList.add('album');
	let ul = document.createElement('ul');
	for (let item of array['photos']) {
		let li = document.createElement('li');
		li.style.backgroundImage = "url("+ item +")";
		ul.appendChild(li);
	}
	album.appendChild(ul);
	return album;
}

