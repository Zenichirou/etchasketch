const sketch = document.querySelector('#sketch')
const colorButtons = document.querySelectorAll('.color-choice');
const clearButton = document.getElementById('clearButton');
let size = parseInt(window.getComputedStyle(sketch).width, 10);

let color = 'black';
gridSize = 20;


function resetGrid(){
    sketch.innerHTML = '';
    createGrid(gridSize)
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
            this.style.backgroundColor = `rgb(${rgbLArray[0] - (rgbLArray[0] * 0.2)},${rgbLArray[1] - (rgbLArray[1] * 0.2)},${rgbLArray[2] - (rgbLArray[2] * 0.2)})`;
            break;
        case 'darken':
            const rgbDArray = (this.style.backgroundColor.replace(/ /g, '').slice(4,-1).split(','));
            this.style.backgroundColor = `rgb(${rgbDArray[0] + (rgbDArray[0] * 0.1)},${rgbDArray[1] + (rgbDArray[1] * 0.1)},${rgbDArray[2] + (rgbDArray[2] * 0.1)})`;
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
        case 'darken':
            color = 'darken';
            break;
        case 'eraser':
            color = 'eraser';
            break;
        default:
            color = 'black';
            break;
    }
}

function userSelection(event){
    color = event.target.value;
}

createGrid(16);



colorButtons.forEach(colorButton => colorButton.addEventListener('click', changeColor) );
clearButton.addEventListener('click', resetGrid);





























