'use strict';

const inputText = document.getElementById('input_text');
function keyUp(){
    let str = inputText.value;
    let num = 10 - str.length;
    console.log(num);
    const count = document.getElementById('count');
    count.textContent = num;
    const countWrap = document.getElementById('countWrap');
    if(num > 0) {
        countWrap.style.color = "black";
    } else {
        countWrap.style.color = "red"; 
    }
}

inputText.addEventListener('keyup',keyUp,false);