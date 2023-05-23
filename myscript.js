
let tagName

let className

function createCell(tagName, className){
    const cellElement = document.createElement (tagName);
    cellElement.className += className;
    return cellElement;

}

const gridElement = document.getElementById('grid');

for (let i = 0; i < 100; i ++){

    const actualCell = createElement('div', 'cell');
    gridElement.appendChild(createElement ('div' , 'cell'));
}