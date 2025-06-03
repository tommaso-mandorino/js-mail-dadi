// Generate a random number between 1 and 6 for the user
const userNumber = Math.floor(Math.random() * 6) + 1;

// Generate a random number between 1 and 6 for the computer
const computerNumber = Math.floor(Math.random() * 6) + 1;

// IF user number is grather than computer number
if (userNumber > computerNumber) {

    // Show a user win message
    alert(`Hai VINTO! Il tuo numero ${userNumber} è più grande del numero ${computerNumber} del computer.`);

}
// ELSE IF user number is less than computer number
else if (userNumber < computerNumber) {

    // Show a user loss message
    alert(`Hai PERSO! Il tuo numero ${userNumber} è più piccolo del numero ${computerNumber} del computer.`);

}
// ELSE numbers are the same
else {

    // Show a player tie message
    alert(`NESSUNO dei due ha vinto. Entrambi avete il numero ${userNumber}`);
}