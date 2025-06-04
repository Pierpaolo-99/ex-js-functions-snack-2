/* Creare una funzione che esegue una sequenza di operazioni con ritardi
Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo. */

function sequenzaOperazioni(operazioni, intervallo) {
    operazioni.forEach((operazione, i) => {
        setTimeout(() => {
            operazione();
        }, intervallo * i);
    });
}

const operazione1 = () => console.log("Operazione 1");
const operazione2 = () => console.log("Operazione 2");
const operazione3 = () => console.log("Operazione 3");

sequenzaOperazioni([operazione1, operazione2, operazione3], 1000);