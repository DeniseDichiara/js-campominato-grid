
/**             <div class="cell">
                    <p>1</p>
                </div> 
                
*/

const playButton = document.querySelector('div.play-button');

const gridElement = document.getElementById('grid');


//*ogni volta che clicco mi svuota la griglia e me la ricrea(così non la duplica)
playButton.addEventListener(('click'), function () {

    //* svuto la griglia prima di aggiungere altri elementi, così quando clicco non  mi duplica la griglia
    gridElement.innerHTML = "";

    for(let i = 0; i < 100; i ++){

        const newCell = document.createElement('div');
        newCell.classList.add('cell');
        newCell.innerHTML = [i + 1];

        //* A newCell aggiugo un evento: quando clicco stampa in console il proprio contenuto
        newCell.addEventListener('click', function(){
            console.log(i + 1);
            //* inpiù aggiunge una classe (selected) che lo colora di blue quando viene selezionato
            newCell.classList.toggle('selected');
        })

        gridElement.appendChild(newCell);
    }

    
});

