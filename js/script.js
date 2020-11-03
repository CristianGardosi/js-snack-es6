$(document).ready(function () {

    // JSnack 1 ******************************************
    // Creare un array di oggetti
    // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    // Stampare a schermo la bici con peso minore con destructuring e template literal.

    let bikes = [
        { nome: 'Pinarello', peso: 12, colore: 'blu'},
        {nome: 'Bianchi', peso: 10, colore: 'verde'},
        { nome: 'Europa', peso: 9, colore: 'rosso'}
    ];
    // Inizializzo la variabile lighterBike
    let lighterBike= 0;
    // Utilizzo forEach per estrapolare l'elemento bici più leggera in maniera dinamica settando gli if
    bikes.forEach(element => {
        if (lighterBike === 0 || lighterBike.peso > element.peso)
        lighterBike = element;
    });
    // Destructuring per prendere i dati che mi serve printare su schermo
    const {nome, peso} = lighterBike;
    $('.lighter-bike').html(
        `
            <div>
                <h3> Nome bici più leggera: ${nome}</h3>
                <h4> Peso bici più leggera: ${peso}</h4>
            </div>
        `
    );


    // JSnack 2 ******************************************
    // Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
    // Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
    // Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente.

    const names = [ 'Marco', 'Matteo', 'Andrea', 'Gianni', 'Flavio' ];

    // Necessario indicare il -1 in quanto array parte da 0 e length da 1
    const lunghezzaArray = names.length - 1;
    // Imposto i due prompt di richiesta range all'utente
    let min = parseInt( prompt('Inserisci il valore di inizio range compreso tra 0 e ' + lunghezzaArray) );
    let max = parseInt( prompt('Inserisci il valore di fine range compreso tra 0 e ' + lunghezzaArray) );

    let rangedNames = []; 

    // Caso di filter in cui voglio estrapolare una parte dell'array esistente e filtrare alcuni elementi in un array nuovo
    rangedNames = names.filter((element, index) => {
            // Returno il mio nuovo array se rispetta la condizione similarmente a come lavora, con una sintassi diversa, if.
            return min <= index && max >= index;
    });
    console.log(rangedNames);


    


}); // End document ready