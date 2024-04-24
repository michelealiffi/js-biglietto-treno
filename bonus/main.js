let request = prompt('Scegliere tra pari e dispari');

if(request == 'pari') {
    console.log('Hai scelto pari');
} else if(request == 'dispari') {
    console.log('Hai scelto dispari');
} else {
    console.log('Scegli di nuovo');
}

const requestNumber = Number(prompt('Scegliere un numero tra 1 a 9'));

if(requestNumber == NaN || requestNumber > 9 || requestNumber < 1) {
    console.log('Scegli un numero valido');
} else {
    console.log('Ottima scelta!');
}

console.log('Hai scelto il numero: ' + requestNumber);

const randomNumber = Math.floor(Math.random() * 9) + 1;

console.log('Il pc ha scelto: ' + randomNumber);

const totalNumber = requestNumber + randomNumber;

let result = 'dispari';

if(totalNumber % 2 == 0) {
    result = 'pari';
}

console.log("Il numero è " + result);

if(result != request) {
    console.log('Il pc ha vinto, ritenta sarai più fortunato');
} else {
    console.log('Bravo user! Hai vinto!');
}

