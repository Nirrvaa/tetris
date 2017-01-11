'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var photos = document.querySelector('.photos');
var carusel = document.querySelector('#carusel');
var spiner = document.querySelector('#spiner');
var list = spiner.querySelectorAll('.album');
var description = document.querySelector('.description');
var answers = document.querySelector('.answers');
var navigation = document.querySelector('.navigation');
var insideNavigation = document.querySelectorAll('.inside-navigation .click');
var outsideNavigation = document.querySelectorAll('.outside-navigation div');
var fixBtn = document.querySelector('.fixed');

window.onresize = function (e) {
	photos.style.height = document.documentElement.clientHeight + 'px';
	carusel.style.height = document.documentElement.clientHeight + 'px';
};
photos.style.height = document.documentElement.clientHeight + 'px';
carusel.style.height = document.documentElement.clientHeight + 'px';

spiner.setAttribute('style', 'transform-origin: 50% 50% -' + zTranslate(list[0], list, 'vertical') + 'px;');

/*
list.forEach(function(item, i) {
	item.setAttribute("style", "transform: rotateX(" + (360/list.length)*i + "deg); transform-origin: 50% 50% -"  +  zTranslate(list[0],list,'vertical') + "px;");
	let album = item.querySelectorAll('ul li');
	album.forEach(function(it,j) {
		it.setAttribute("style", "transform: rotateY(" + (360/album.length)*j + "deg); transform-origin: 50% 50% -"  +  zTranslate(album[0],album) + "px;");
	});
});
*/

description.addEventListener('click', function (event) {
	var target = event.target;
	do {
		if (!(target.classList.contains('show') || target.classList.contains('hide')) || target.classList.contains('side-panel')) {
			return;
		}
		target = target.parentNode;
	} while (target != this);
	show(this);
	freeze2(this);
});

answers.addEventListener('click', function (event) {
	var target = event.target;
	do {
		if (!(target.classList.contains('show') || target.classList.contains('hide')) || target.classList.contains('side-panel')) {
			return;
		}
		target = target.parentNode;
	} while (target != this);
	show(this);
	freeze2(this);

	if (navigation.classList.contains('moved')) {
		navigation.classList.remove('moved');
	} else {
		navigation.classList.add('moved');
	}
});

fixBtn.addEventListener('click', function (event) {
	var value = this.getAttribute('data-state');
	if (value == 'hidden') {
		freeze.apply(undefined, _toConsumableArray(outsideNavigation).concat([answers, description], _toConsumableArray(insideNavigation)));
		this.setAttribute('data-state', 'half-access');
	} else if (value == 'half-access') {
		fullAccess.apply(undefined, _toConsumableArray(description.children).concat(_toConsumableArray(answers.children)));
		if (!navigation.classList.contains('moved')) {
			navigation.classList.add('moved');
		}
		this.setAttribute('data-state', 'full-access');
	} else if (value == 'full-access') {
		fullAccess.apply(undefined, _toConsumableArray(description.children).concat(_toConsumableArray(answers.children)));
		freeze.apply(undefined, _toConsumableArray(outsideNavigation).concat([answers, description], _toConsumableArray(insideNavigation)));
		if (navigation.classList.contains('moved')) {
			navigation.classList.remove('moved');
		}
		this.setAttribute('data-state', 'hidden');
	}
});

function show(element) {
	if (element.classList.contains('opened')) {
		Array.prototype.forEach.call(element.children, function (item, i) {

			if (item.classList.contains('content')) {
				item.style.transform = "rotateY(90deg)";
			}
			if (item.classList.contains('hide')) {
				item.style.transform = "rotateY(90deg)";
			}
			if (item.classList.contains('show')) {
				item.classList.add('border-radius');
				item.classList.remove('full-width');
			}
		});

		element.classList.remove('opened');
	} else {
		Array.prototype.forEach.call(element.children, function (item, i) {

			if (item.classList.contains('content')) {
				item.style.transform = "rotateY(0deg)";
			}
			if (item.classList.contains('hide')) {
				item.style.transform = "rotateY(0deg)";
			}
			if (item.classList.contains('show')) {
				item.classList.remove('border-radius');
				item.classList.add('full-width');
			}
		});

		element.classList.add('opened');
	}
}

function freeze() {
	arguments.forEach = Array.prototype.forEach;
	arguments.forEach(function (item, i) {
		if (item.classList.contains('visible')) {
			item.classList.remove('visible');
		} else {
			item.classList.add('visible');
		}
	});
}

function freeze2() {
	arguments.forEach = Array.prototype.forEach;
	arguments.forEach(function (item, i) {
		if (item.classList.contains('visible2')) {
			item.classList.remove('visible2');
		} else {
			item.classList.add('visible2');
		}
	});
}

function zTranslate(child, parent, orientation) {
	var parameter = void 0;
	if (orientation == 'vertical') {
		parameter = child.scrollHeight;
	} else {
		parameter = child.scrollWidth;
	}
	return parameter / 2 * Math.tan((90 - 180 / parent.length) / 57.2958);
};

function fullAccess() {
	arguments.forEach = Array.prototype.forEach;
	arguments.forEach(function (item, i) {
		if (item.classList.contains('full-access')) {
			item.classList.remove('full-access');
		} else {
			item.classList.add('full-access');
		}
	});
}