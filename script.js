const sketch = document.querySelector('#sketch')
const pns = document.querySelector('#panelAndSketch');
let size = parseInt(window.getComputedStyle(sketch).width, 10);
const borderButton = document.getElementById('borderButton');
const random = document.getElementById('random');
const btnBlack = document.getElementById('btnBlack');
const btnRed = document.getElementById('btnRed');
let isBlack = 1;
let isRainbow = 0;
let gridSize = 20;


function resetGrid(){
    sketch.innerHTML = '';
    createGrid(gridSize)
    console.log(isBlack,isRainbow)
    
    
}


function createGrid(gridSize){

    for(let i = 0; i < gridSize ** 2; i++){
        
        const block = document.createElement("div");
        block.classList.add('grid-block');
        block.style.width = `${(size/gridSize)}px`
        block.style.height = `${(size/gridSize)}px`
        sketch.appendChild(block);
        
    }
    checkColor();
    

}



function blackColor() {
    const gridBlocks = sketch.querySelectorAll('.grid-block');
    btnBlack.textContent = "Default";
    btnBlack.addEventListener('click', () => { 
        blackDefault();
    })

}



function rainbowColor() {
    const gridBlocks = sketch.querySelectorAll('.grid-block');
    btnRed.textContent = "Defaultr";
    btnRed.addEventListener('click', () => { 
        rainbowDefault();
    })

}




function blackDefault(){
    const gridBlocks = sketch.querySelectorAll('.grid-block');
    isBlack = 1;
    isRainbow = 0;
    gridBlocks.forEach(gridBlock => gridBlock.addEventListener('mouseover', () => {
        console.log('is it doing anythingpls')
        gridBlock.style.background = 'black';
        
    }));
    return [isBlack, isRainbow];
        
}
function defaultSetting(){
    isBlack = 1;
    isRainbow = 0;
    console.log('the value has changed');
    return [isBlack, isRainbow];
}
//[isBlack, isRainbow] = defaultSetting();
//[isBlack,isRainbow] = rainbowDefault();
//[isBlack,isRainbow] = blackDefault();


function rainbowDefault(){
    const gridBlocks = sketch.querySelectorAll('.grid-block');
    isRainbow = 1;
    isBlack = 0;
    gridBlocks.forEach(gridBlock => gridBlock.addEventListener('mouseover', () => {
        let red = Math.floor(Math.random()* 255);
        let green = Math.floor(Math.random()* 255);
        let blue = Math.floor(Math.random()* 255);
        gridBlock.style.background = `rgb(${red}, ${green}, ${blue})`
    }));
        return [isRainbow, isBlack];
}

function checkColor(){
    if(isRainbow === 1){
        rainbowDefault();
    }else{
        blackDefault();
    }
}
createGrid(16);
rainbowColor();
blackColor();
