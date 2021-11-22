const sketch = document.querySelector('#sketch')
const pns = document.querySelector('#panelAndSketch');
let size = parseInt(window.getComputedStyle(sketch).width, 10);
const borderButton = document.getElementById('borderButton');
let gridSize = 20;


function createGrid(gridSize){

    for(let rowCol = 0; rowCol < gridSize ** 2; rowCol++){
        
        console.log('isitdoinganything');
        const block = document.createElement("div");
        block.classList.add('grid-block');
        
        
        block.style.width = `${(size/gridSize)}px`
        block.style.height = `${(size/gridSize)}px`
        sketch.appendChild(block);
    }
    
}

document.addEventListener('DOMContentLoaded', function(e){
        sketch.innerHTML = "";
        createGrid(gridSize = 20);
});
function resetGrid(){
    sketch.innerHTML = '';
    createGrid(gridSize)
}
