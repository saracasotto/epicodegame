let difficulty = prompt("Scegli la difficoltà del gioco tra facile, medio e difficile")
let maxtentativi = undefined
let maxrange = undefined
let tentativiRimasti = undefined
let inputUtente = undefined

switch (difficulty) {
    case "facile":
        maxtentativi = 10
        maxrange = 10
        break
    case "medio":
        maxtentativi = 8
        maxrange = 40
        break
    case "difficile":
        maxtentativi = 5
        maxrange = 60
        break
    default:
        alert("Valore inserito non valido")
}

let numeroVincente = Math.floor(Math.random() * maxrange)

tentativiRimasti = maxtentativi

while (tentativiRimasti > 0) {
    inputUtente = parseInt(prompt(`Indovina il numero da uno a ${maxrange}. Tentativi rimasti ${tentativiRimasti}`));
    
    if (inputUtente < numeroVincente) {
        alert("Inserisci un numero più alto");
    } else if (inputUtente > numeroVincente) {
        alert("Inserisci un numero più basso");
    } else if (inputUtente === numeroVincente) {
        alert("Hai vinto");
        break;
    }
    
    tentativiRimasti--;
}

if (tentativiRimasti === 0) {
    alert("Game Over! Il numero vincente era " + numeroVincente);
}