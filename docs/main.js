'use strict';

function setNuberSelectElementContent(elementId, maxValue){
	let element = document.getElementById(elementId);
  let text = [...Array(maxValue).keys()].map(s => `<option value="${s}">${s}</option>`).concat();
  element.insertAdjacentHTML('afterbegin', text);
}
/*
function setNuberSelectElementContent(element, maxValue){
  let text = [...Array(maxValue).keys()].map(s => "<option value='${s}'>${s}</option>").concat();
  element.insertAdjacentHTML('afterbegin', text);
}
*/
