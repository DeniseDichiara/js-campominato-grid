
let tagName

let className

function createElement(tagName, className){
    const cellElement = document.createElement (tagName);
    cellElement.className += className;
    return cellElement;
}

function getNewLiElement (){
    const newLiElement = document.createElement('li');
    newLiElement.classList.add('list-item');
    return newLiElement;
}


const gridElement = document.getElementById('grid');

const olElement = document.querySelector('ol');

for (let i = 0; i < 100; i ++){

    const actualCell = createElement('div', 'cell');

    for(let i = 1; i <= 100; i++){
        olElement.appendChild(getNewLiElement());
    }

    actualCell.addEventListener('click', function(){
        
        actualCell.classList.toggle('selected')
    })

    gridElement.appendChild(actualCell);
}

