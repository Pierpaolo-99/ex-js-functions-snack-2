/* Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri. */

function eseguiOperazione(num1, num2, operatore) {
    return operatore(num1, num2);
}

const somma = (a, b) => a + b;
const prodotto = (a, b) => a * b;

console.log(eseguiOperazione(5, 3, somma));
console.log(eseguiOperazione(5, 3, prodotto));