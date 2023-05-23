
let tagName

let className

function createElement(tagName, className){
    const cellElement = document.createElement (tagName);
    cellElement.className += className;
    return cellElement;

}

const gridElement = document.getElementById('grid');

for (let i = 0; i < 100; i ++){

    const actualCell = createElement('div', 'cell');

    actualCell.addEventListener('click', function(){
        
        actualCell.classList.toggle('selected')
    })

    gridElement.appendChild(actualCell);
}