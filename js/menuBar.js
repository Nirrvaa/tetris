'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var lockButton = document.getElementById('fixed');
var description = document.querySelector('.description');
var answers = document.querySelector('.answers');
var insideNavigation = document.querySelector('.inside-navigation');
description.addEventListener('click', function (event) {
	var target = event.target;
	changeContent.call(this, target, fixed);
});

answers.addEventListener('click', function (event) {
	var target = event.target;
	changeContent.call(this, target, fixed, insideNavigation);
});

var changingElementsOpacity = document.querySelectorAll('[data-opacity]');
var changingElementsVisibility = document.querySelectorAll('[data-visibility]');
var changingElementPosition = document.querySelectorAll('[data-position]');

lockButton.addEventListener('click', function (event) {
	var value = this.getAttribute('data-value');
	var finish = 2;
	changeElements(changingElementsOpacity, value, 'visible', 'data-opacity', 0, finish);
	changeElements(changingElementsVisibility, value, 'full-size', 'data-visibility', 0, finish);
	changeElements(changingElementPosition, value, 'change-view', 'data-position', 1, finish);
	value++;
	if (value > finish) {
		value = 0;
	}

	this.setAttribute('data-value', value);
});

function changeElements(enteringArray, value, clas, attribute, start, finish) {
	var elements = [].concat(_toConsumableArray(enteringArray));
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var elem = _step.value;

			if (value == start) {
				elem.classList.add(clas);
			} else if (value == finish) {
				elem.classList.remove(clas);
				elem.setAttribute(attribute, value);
				continue;
			}
			elem.setAttribute(attribute, +value + 1);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}

function changeContent(target, menu, nav) {
	var array = this.children;
	var fixed = menu;
	var check = fixed.getAttribute('data-value');
	if (target == array[0] || target == array[2]) {
		var value = this.getAttribute('data-counter');
		if (value == 2) {
			value = 0;
		}
		value++;
		if (!nav) {
			if (!+check) {
				changeElements(array, value, 'visible', 'data-opacity', 1, 2);
				changeElements(array, value, 'change-view', 'data-position', 1, 2);
			} else {
				changeElements(array, value, 'change-view', 'data-position', 1, 2);
			}
		} else {

			if (!+check) {
				changeElements(array, value, 'visible', 'data-opacity', 1, 2);
				changeElements(array, value, 'change-view', 'data-position', 1, 2);
				changeElements([nav], value, 'change-view', 'data-position', 1, 2);
			} else {
				changeElements(array, value, 'change-view', 'data-position', 1, 2);
				changeElements([nav], value, 'change-view', 'data-position', 1, 2);
			}
		}
		this.setAttribute('data-counter', value);
	}
}