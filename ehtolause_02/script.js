// Funktio, joka tarkistaa, pitääkö pukea takki päälle lämpötilan perusteella
function getTemperature(temp) {
    if (temp < 15) {
        alert('Pue takki päälle, koska lämpötila on alle 15°C!');
    } else {
        alert('Ei tarvitse takkia, lämpötila on tarpeeksi lämmin.');
    }
}

// Kysytään käyttäjältä lämpötilaa
let esimerkki = prompt('Mikä on nykyinen lämpötila?');

// Muutetaan käyttäjän syöte numeroksi
let numero = Number(esimerkki);

// Suoritetaan getTemperature-funktio
getTemperature(numero);
