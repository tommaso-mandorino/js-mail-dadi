// Guest email list
const guestEmails = [
                      'mariorossi@gmail.com',
                      'francescobianchi@outlook.it',
                      'mariaverdi@live.it',
                      'lucagrassi@virgilio.it',
                      'andreaneri@yahoo.com'
                    ];

// Ask the user his email
const userEmail = prompt("Inserisci la tua email:");

// Store user presence in the list starting from a false value
let userPresent = false;

// Loop all emails in the list
for (let i = 0; i < guestEmails.length; i++) {

    // IF the user email is equal to one of the list
    if (userEmail === guestEmails[i]) {

        // Mark user presence
        userPresent = true;

        // Exit loop, no need to check other emails
        break;

    }

}