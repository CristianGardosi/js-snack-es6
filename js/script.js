$(document).ready(function () {
    // JSnack 1 ******************************************
    // Creare un array di oggetti
    // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    // Stampare a schermo la bici con peso minore con destructuring e template literal.
    let bikes = [
        { nome: 'Pinarello', peso: 12, colore: 'blu'},
        {nome: 'Bianchi', peso: 10, colore: 'verde'},
        { nome: 'Europa', peso: 14, colore: 'rosso'}
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


    )

    


}); // End document ready