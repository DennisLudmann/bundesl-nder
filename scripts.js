let states = [];
let letters = [];

async function init() {
    let resp = await fetch('./states.json');
    states = await resp.json();
    render();
}

function render(filter){
    let content = document.getElementById('container');
    content.innerHTML = '';
    for (let i = 0; i < states.length; i++) {
        let state = states[i];
        let population = (state['population'] + '').replace('.', ',');
        let firstLetter = state ['name'].charAt(0); 
        content.innerHTML = generateHTML(state, population);

        if (!filter || filter == firstLetter) {
            content.innerHTML += generateHTML(state, population);
        }

        if (!letters.includes(firstLetter)) {
            letters.push(firstLetter);
        }  
    }
    displayLetters();
}

function filterStates(letters){
        render(letters);
    }

function displayLetters(){
    for (let i = 0; i < letters.length; i++) {
        let element = letters[i];
        document.getElementById('letters').innerHTML += `
        <a class="singleletters">${element}</a>
        `;
    }
}

function generateHTML(state, population){ //returns the html structure and content for the cards
    return `
    <a class="state__card" href="${state['url']}" target=_blank>
    <h3>${state}
    </h3>
    <p>${population} Millionen
    </p>
    </a>
`
}