'use strict';

function setNuberSelectElementContent(element, maxValue){
  let text = [...Array(maxValue).keys()].map(s => "<option value='${s}'>${s}</option>").concat();
  element.insertAdjacentHTML('afterbegin', text);
}
