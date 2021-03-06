// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

// Creo l'Array che contengono gli oggetti 'Zucchine'
var arrayZucchine = [
    {
        'nome' : 'Zucchino nero di Milano',
        'peso' : 170,
        'lunghezza' : 20
    },
    {
        'nome' : 'Zucchino Romanesco',
        'peso' : 310,
        'lunghezza' : 15
    },
    {
        'nome' : 'Zucchino Siciliano',
        'peso' : 120,
        'lunghezza' : 10
    },
    {
        'nome' : 'Zucchina striata di Napoli',
        'peso' : 200,
        'lunghezza' : 30
    },
    {
        'nome' : 'Zucchina bianca Triestina',
        'peso' : 220,
        'lunghezza' : 22
    },
    {
        'nome' : 'Zucchina rigata Pugliese',
        'peso' : 130,
        'lunghezza' : 25
    },
    {
        'nome' : 'Zucchino tondo di Piacenza',
        'peso' : 125,
        'lunghezza' : 40
    },
    {
        'nome' : 'Zucchino tondo di Nizza',
        'peso' : 100,
        'lunghezza' : 12
    },
    {
        'nome' : 'Zucchino tondo di Firenze',
        'peso' : 150,
        'lunghezza' : 28
    },
    {
        'nome' : 'Zucchina trombetta di Albenga',
        'peso' : 300,
        'lunghezza' : 35
    }
]

// Creo due Array vuoti per pusharci gli zucchini in base alle lunghezze
var zucchineCorte = [];
var zucchineLunghe = [];

// Creo una variabile per includere il valore che volgio comparare
var valoreSeparatore = 15;


// Creo un loop for per prendere uno a uno le lunghezze degli zucchini
for ( var i = 0; i < arrayZucchine.length; i++ ) {
    var thisZucchino = arrayZucchine[i];
    if ( thisZucchino.lunghezza > valoreSeparatore ) {
        zucchineLunghe.push(thisZucchino);
    } else if ( thisZucchino.lunghezza < valoreSeparatore ) {
        zucchineCorte.push(thisZucchino);
    }
}

// Imposto due variabili su 0 per il peso delle zucchine lunghe e corte
var zucchineCortePeso = 0;
var zucchineLunghePeso = 0;

// Faccio un loop for sull'Array ZucchineCorte per prender il peso di ogni singola zucchina 
for ( var j = 0; j < zucchineCorte.length; j++ ) {
    var thisZucchinoCorto = zucchineCorte[j];
    zucchineCortePeso += thisZucchinoCorto.peso;
}

console.log('Il peso totale delle zucchine corte è di' + ' ' + zucchineCortePeso + ' ' + 'grammi')

// Faccio lo stesso con gli zucchini lunghi
for ( var k = 0; k < zucchineLunghe.length; k++ ) {
    var thisZucchinoLungo = zucchineLunghe[k];
    zucchineLunghePeso += thisZucchinoLungo.peso;
}

console.log('Il peso totale delle zucchine lunghe è di' + ' ' + zucchineLunghePeso + ' ' + 'grammi')

