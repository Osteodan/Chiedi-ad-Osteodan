// script.js

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const responseBox = document.getElementById("response");

    // Mostra il messaggio dell'utente
    responseBox.innerHTML += `<p><strong>Tu:</strong> ${userInput}</p>`;

    // Qui puoi aggiungere la logica per connetterti a GPT o simulare una risposta
    responseBox.innerHTML += `<p><strong>Osteodan:</strong> Questa è una risposta di esempio. Implementa qui la logica della chat GPT.</p>`;

    // Pulisci il campo di input
    document.getElementById("user-input").value = "";
}
