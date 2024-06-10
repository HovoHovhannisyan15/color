

let block = document.querySelector('div.block');

let show_block = document.querySelector('button.button');
let hide_block = document.querySelector('button.hide_block');

show_block.onclick = function() {
    block.style.display = "flex"
}
hide_block.onclick = function() {
    block.style.display = "none"
}

// function show() {
//     if(block.style.display = "flex")
//         block.style.display = "none"
//     else
//         block.style.display = "flex"
// }
//     function show() {
//         if(document.querySelector('div.block').style.display = "flex")
//             document.querySelector('div.block').style.display = "none"
//         else
//             document.querySelector('div.block').style.display = "flex"
//     }
    

// Colors

function yellow() {
    block.style.backgroundColor = "yellow";
}
function green() {
    block.style.backgroundColor = "green";
}
function greenyellow() {
    block.style.backgroundColor = "greenyellow";
}
function red() {
    block.style.backgroundColor = "red";
}
function white() {
    block.style.backgroundColor = "white";
}

