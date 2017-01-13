let lockButton = document.getElementById('fixed');
let description = document.querySelector('.description');
let answers = document.querySelector('.answers');
let insideNavigation = document.querySelector('.inside-navigation');
description.addEventListener('click', function(event) {
	let target = event.target;
	changeContent.call(this,target,fixed);
});

answers.addEventListener('click', function(event) {
	let target = event.target;
	changeContent.call(this,target,fixed,insideNavigation);

});

let changingElementsOpacity = document.querySelectorAll('[data-opacity]');
let changingElementsVisibility = document.querySelectorAll('[data-visibility]');
let changingElementPosition = document.querySelectorAll('[data-position]');



lockButton.addEventListener('click', function(event) {
	let value = this.getAttribute('data-value');
	let finish = 2;
	changeElements(changingElementsOpacity, value,'visible','data-opacity', 0,finish);
	changeElements(changingElementsVisibility, value,'full-size','data-visibility', 0,finish);
	changeElements(changingElementPosition, value,'change-view','data-position', 1,finish);
	value++;
	if (value > finish) {
		value = 0;
	}
	
	this.setAttribute('data-value', value);
});




function changeElements(enteringArray,value,clas,attribute,start,finish) {
	let elements = [...enteringArray];
	for (let elem of elements) {
		if (value == start) {
			elem.classList.add(clas);
		} else if (value == finish) {
			elem.classList.remove(clas);
			elem.setAttribute(attribute, value);
			continue;
		}
		elem.setAttribute(attribute, +value+1); 
	}
}

function changeContent(target,menu,nav) {
	let array = this.children;
	let fixed = menu;
	let check = fixed.getAttribute('data-value');
	if (target == array[0] || target == array[2]) {
		let value = this.getAttribute('data-counter');
		if (value == 2) {
			value=0;
		}
		value++
		if (!nav) {
			if (!+check) {
				changeElements(array, value,'visible','data-opacity', 1,2);
				changeElements(array, value,'change-view','data-position', 1,2);
			} else {
				changeElements(array, value,'change-view','data-position', 1,2);
			}
		} else {
			
			if (!+check) {
				changeElements(array, value,'visible','data-opacity', 1,2);
				changeElements(array, value,'change-view','data-position', 1,2);
				changeElements([nav], value,'change-view','data-position', 1,2);
			} else {
				changeElements(array, value,'change-view','data-position', 1,2);
				changeElements([nav], value,'change-view','data-position', 1,2);
			}
		}
		this.setAttribute('data-counter', value);
		}
}


