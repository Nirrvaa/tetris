let tetris = document.querySelector('.tetris');

const x = 10,
    y = 20;

for (let i = 0; i < y; i++) {
	for (let j = 0; j < x; j++) {
		let cell = document.createElement('div');
		cell.classList.add('cell');
		cell.setAttribute('data-coordinateX', j);
		cell.setAttribute('data-coordinateY', i);
		tetris.appendChild(cell);
	}
}
var field = document.querySelectorAll('.cell');
	
let shapes = [
	function tPart(field,X,Y,stop) {
		field.forEach(function(item,i) {
			let coordX = item.getAttribute('data-coordinateX');
			let coordY = item.getAttribute('data-coordinateY');
			let mainPart = coordX == X && coordY == Y+1;
			let topPart = coordX == X && coordY == Y;
			let leftPart = coordX == X-1 && coordY == Y;
			let rightPart = coordX == X+1 && coordY == Y;
			if (mainPart || topPart || leftPart || rightPart) {
				item.classList.add('t-unit');
				if (stop) {
					item.classList.add('stone');
				}
			} else {
				item.classList.remove('t-unit');
			} 
		});
		return 1;},
	function iPart(field,X,Y,stop) {
		field.forEach(function(item,i) {
			let coordX = item.getAttribute('data-coordinateX');
			let coordY = item.getAttribute('data-coordinateY');
			let mainPart = coordX == X && coordY == Y;
			let topPart = coordX == X-1 && coordY == Y;
			let bottomPart1 = coordX == X+1 && coordY == Y;
			let bottomPart2 = coordX == X+2 && coordY == Y;
			if (mainPart || topPart || bottomPart1 || bottomPart2) {
				item.classList.add('l-unit');
				if (stop) {
					item.classList.add('stone');
				}
			} else {
				item.classList.remove('l-unit');
			} 
		});
		return 0;},
	function jPart(field,X,Y,stop) {
		field.forEach(function(item,i) {
			let coordX = item.getAttribute('data-coordinateX');
			let coordY = item.getAttribute('data-coordinateY');
			let mainPart = coordX == X && coordY == Y+1;
			let topPart = coordX == X && coordY == Y;
			let bottomPart = coordX == X && coordY == Y+2;
			let leftPart = coordX == X-1 && coordY == Y+2;
			if (mainPart || topPart || bottomPart || leftPart) {
				item.classList.add('j-unit');
				if (stop) {
					item.classList.add('stone');
				}
			} else {
				item.classList.remove('j-unit');
			} 
		});
		return 2},
	function lPart(field,X,Y,stop) {
		field.forEach(function(item,i) {
			let coordX = item.getAttribute('data-coordinateX');
			let coordY = item.getAttribute('data-coordinateY');
			let mainPart = coordX == X && coordY == Y+1;
			let topPart = coordX == X && coordY == Y;
			let bottomPart = coordX == X && coordY == Y+2;
			let rightPart = coordX == X+1 && coordY == Y+2;
			if (mainPart || topPart || bottomPart || rightPart) {
				item.classList.add('l-unit');
				if (stop) {
					item.classList.add('stone');
				}
			} else {
				item.classList.remove('l-unit');
			} 
		});
		return 2},
	function oPart(field,X,Y,stop) {
		field.forEach(function(item,i) {
			let coordX = item.getAttribute('data-coordinateX');
			let coordY = item.getAttribute('data-coordinateY');
			let mainPart = coordX == X && coordY == Y+1;
			let topPart1 = coordX == X && coordY == Y;
			let topPart2 = coordX == X+1 && coordY == Y;
			let rightPart = coordX == X+1 && coordY == Y+1;
			if (mainPart || topPart1 || topPart2 || rightPart) {
				item.classList.add('o-unit');
				if (stop) {
					item.classList.add('stone');
				}
			} else {
				item.classList.remove('o-unit');
			} 
		});
		return 1},
	function sPart(field,X,Y,stop) {
		field.forEach(function(item,i) {
			let coordX = item.getAttribute('data-coordinateX');
			let coordY = item.getAttribute('data-coordinateY');
			let mainPart = coordX == X && coordY == Y;
			let rightPart = coordX == X+1 && coordY == Y;
			let bottomPart = coordX == X && coordY == Y+1;
			let leftPart = coordX == X-1 && coordY == Y+1;
			if (mainPart || rightPart || bottomPart || leftPart) {
				item.classList.add('s-unit');
				if (stop) {
					item.classList.add('stone');
				}
			} else {
				item.classList.remove('s-unit');
			} 
		});
		return 1},
	function zPart(field,X,Y,stop) {
		field.forEach(function(item,i) {
			let coordX = item.getAttribute('data-coordinateX');
			let coordY = item.getAttribute('data-coordinateY');
			let mainPart = coordX == X && coordY == Y;
			let rightPart = coordX == X+1 && coordY == Y+1;
			let bottomPart = coordX == X && coordY == Y+1;
			let leftPart = coordX == X-1 && coordY == Y;
			if (mainPart || rightPart || bottomPart || leftPart) {
				item.classList.add('z-unit');
				if (stop) {
					item.classList.add('stone');
				}
			} else {
				item.classList.remove('z-unit');
			}
			
		}); return 1}
];

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

function building(random,array) {
	let rand = random(0,array.length - 1);
	let q = 0;
	let interval = setInterval(function() {
		let stop = array[rand];
		q++;
		field.forEach(function(item,i) {
			let coordX = item.getAttribute('data-coordinateX');
			let coordY = item.getAttribute('data-coordinateY');
			if (coordX == 4 && coordY == q+1 && item.classList.contains('stone')) {
				stop(field,4,q-1,true);
			}
		});
		if (q == y - stop(field,4,q-1)) {
			stop(field,4,q-1,true);
		clearInterval(interval);
		building(random,array);
	}
	},100);
}


building(randomInteger, shapes);