const sketch = document.querySelector('#sketch')
const colorButtons = document.querySelectorAll('.color-choice');
const clearButton = document.getElementById('clearButton');
const userColorSelector = document.getElementById('color-select')
const sliderLabel = document.getElementById('slider-label');
const slider = document.getElementById('slider');
const colorDefault = document.getElementById('colorDefault');
let size = parseInt(window.getComputedStyle(sketch).width, 10);

let color = 'rgb(44,44,44)';
gridSize = 16;


function resetGrid(){
    sketch.innerHTML = '';
    createGrid(gridSize);
}



function createGrid(gridSize){

    for(let i = 0; i < gridSize ** 2; i++){
        
        const block = document.createElement("div");
        block.classList.add('grid-block');
        block.style.backgroundColor = 'rgb(255,255,255)';
        block.style.width = `${(size/gridSize)}px`
        block.style.height = `${(size/gridSize)}px`
        
        sketch.appendChild(block);
        
    }
    
    const gridBlocks = sketch.querySelectorAll('.grid-block');
    
    gridBlocks.forEach(gridBlock => gridBlock.addEventListener('mouseover', gridColor));
    
    

}


function gridColor(){
    switch(color){
        case 'rainbow':
            let red = Math.floor(Math.random()* 255);
            let green = Math.floor(Math.random()* 255);
            let blue = Math.floor(Math.random()* 255);
            this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            break;
        case 'black':
            this.style.backgroundColor = 'rgb(0,0,0)'
            break;
        case 'shade':
            const rgbLArray = (this.style.backgroundColor.replace(/ /g, '').slice(4,-1).split(','));
            this.style.backgroundColor = `rgb(${rgbLArray[0] - (rgbLArray[0] * 0.10)},${rgbLArray[1] - (rgbLArray[1] * 0.10)},${rgbLArray[2] - (rgbLArray[2] * 0.10)})`;
            break;
        case 'colorMode':
            color = userColorSelector.value;
            break;
        case 'eraser':
            this.style.backgroundColor = 'rgb(255,255,255)';
            break;
        default:
            this.style.backgroundColor = color;
            break;
    }
}

function changeColor(event){
    switch (event.target.dataset.color){
        case 'rainbow':
            color = 'rainbow';
            break;
        case 'shade':
            color = 'shade';
            break;
        case 'colorMode':
            color = 'colorMode';
            break;
        case 'eraser':
            color = 'eraser';
            break;
        default:
            color = 'black';
            break;
    }
}
function toggleClass(event){
    console.log(event.target.value);
    switch(event.target.value){
        case 'rainbow':
            colorButtons.forEach(e => e.classList.remove('selected'));
            event.currentTarget.classList.add('selected');
            break;
        case 'shade':
            colorButtons.forEach(e => e.classList.remove('selected'));
            event.currentTarget.classList.add('selected');
            break;
        case 'colorMode':
            colorButtons.forEach(e => e.classList.remove('selected'));
            event.currentTarget.classList.add('selected');
            break;
        case 'eraser':
            colorButtons.forEach(e => e.classList.remove('selected'));
            event.currentTarget.classList.add('selected');
}
}
function defaultColor(){
    colorButtons.forEach(e => e.classList.remove('selected'));
    colorDefault.classList.add('selected');

}
function userSelection(event){
    color = event.target.value;
}

function changeLabelSlider(event){
    sliderLabel.textContent = `${event.target.value} X ${event.target.value}`;
}
function makeNewGrid(event){
    gridSize = event.target.value;
    resetGrid(gridSize);
    return gridSize;
}




createGrid(16);


colorButtons.forEach(colorButton => colorButton.addEventListener('click', toggleClass));
colorButtons.forEach(colorButton => colorButton.addEventListener('click', changeColor) );
clearButton.addEventListener('click', resetGrid);
userColorSelector.addEventListener('click', defaultColor);
userColorSelector.addEventListener('click', userSelection);
userColorSelector.addEventListener('change', userSelection);
userColorSelector.addEventListener('input', userSelection);
slider.addEventListener('mouseup', changeLabelSlider);
slider.addEventListener('mouseup', makeNewGrid);



























