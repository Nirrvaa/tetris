let lockButton = document.getElementById('fixed');
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
			elem.setAttribute(attribute, 0);
			continue;
		}
		elem.setAttribute(attribute, +value+1); 
	}
}


