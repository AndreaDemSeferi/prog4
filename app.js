const form = document.querySelector('#form');
const content = document.querySelector('#content');

const age = prompt('Hur gammal är du?');


//Conditional Statement
if(age > 20) {
    //visa hemsidan
    content.style.display = 'block';
    const name = prompt('Vad heter du?');
    document.querySelector('.message').innerHTML = "Välkommen " + name + "till Hemsidan";
    document.querySelector('#enter').className = 'granted';
} else {
    //inte gammal nog
    content.style.display = 'none';
    document.querySelector('.message').innerHTML = 'Du är inte gammal nog,tyvärr.';
    document.querySelector('#enter').className = 'denied';
}

function myFunction() {
    location.replace("https://www.google.com")
  }