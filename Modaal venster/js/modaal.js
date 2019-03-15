// variable die alle content van de modale vensters heeft
const modaalContent = document.querySelectorAll('.modaalContent');

// content verwijderen
for(let i=0; i<modaalContent.length; i++) {
 let modaalNode = modaalContent[i];
 modaalNode.parentNode.removeChild(modaalNode);
}

let modaalBackground = document.createElement('div');
modaalBackground.className = 'modaalBackground';
let modaal = document.createElement('div');
modaal.className = 'modaal';

// modaalContent aan DOM toevoegen
const voegtInhoud = (element) => {
  modaal.appendChild(element);
  modaalBackground.appendChild(modaal);
  document.body.appendChild(modaalBackground);
}
