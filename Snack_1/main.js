/* Crea una funzione che somma due numeri.
 - Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
 - Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
 - Quindi, riscrivi la funzione somma con la sintassi delle arrow functions. */

// funzione dichiarativa

console.log(somma1(10, 10));

function somma1(num1, num2) {
    return Number(num1) + Number(num2)
}

// funzione anonima assegnata a una variabile

const somma2 = function (num1, num2) {
    return Number(num1) + Number(num2)
}

console.log(somma2(5, 5));

// arrow function

const somma3 = (num1, num2) => Number(num1) + Number(num2)

console.log(somma3(20, 20));


