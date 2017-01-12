'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var lockButton = document.getElementById('fixed');
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
				elem.setAttribute(attribute, 0);
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