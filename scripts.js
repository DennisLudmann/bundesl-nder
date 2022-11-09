let states = [];
let letters = [];

async function init() {
    let resp = await fetch('./states.json');
    states = await resp.json();
    render();
}

function render(){
    for (let i = 0; i < states.length; i++) {
        let element = states[i];
        document.getElementById('container').innerHTML += 
        generateHTML(i);
        
        let firstLetter = states[i]['name'].charAt(0);  // push first letters in array when they dont exist already
        if (!letters.includes(firstLetter)) {
            letters.push(firstLetter);
        }  
    }
    displayLetters();
}

function generateHTML(i){ //returns the html strukture and content for the cards
    return `
    <a class="state__card" href="${states[i]['url']}" target=_blank>
    <h3>${states[i]['name']}
    </h3>
    <p>${states[i]['population']} Millionen
    </p>
    </a>
`
}

function filterStates(){
    let startsWithB = states.filter((state) => state.startsWith("B"));
    console.log(startsWithB);
}

function displayLetters(){      // 
    for (let i = 0; i < letters.length; i++) {
        const element = letters[i];
        document.getElementById('letters').innerHTML += `
        <a class="singleletters">${element}</a>
        `;
    }
}

init();
