const states = [
    {
        "name": "Baden-Württemberg",
        "population": 11.1,
        "url": "https://www.baden-wuerttemberg.de/de/startseite/"
    },
    {
        "name": "Bayern",
        "population": 13.1,
        "url": "https://www.bayern.de/"
    },
    {
        "name": "Berlin",
        "population": 3.7,
        "url": "https://www.berlin.de/"
    },
    {
        "name": "Brandenburg",
        "population": 2.5,
        "url": "https://www.brandenburg.de/"
    },
    {
        "name": "Bremen",
        "population": 0.7,
        "url": "https://www.bremen.de/"
    },
    {
        "name": "Hamburg",
        "population": 1.8,
        "url": "https://www.hamburg.de/"
    },
    {
        "name": "Hessen",
        "population": 6.3,
        "url": "https://www.hessen.de/"
    },
    {
        "name": "Mecklenburg-Vorpommern",
        "population": 1.6,
        "url": "https://www.mecklenburg-vorpommern.de/startseite/"
    },
    {
        "name": "Niedersachsen",
        "population": 8,
        "url": "https://www.niedersachsen.de/startseite/"
    },
    {
        "name": "Nordrhein-Westfalen",
        "population": 17.9,
        "url": "https://www.land.nrw/"
    },
    {
        "name": "Rheinland-Pfalz",
        "population": 4.1,
        "url": "https://www.rlp.de/de/startseite/"
    },
    {
        "name": "Saarland",
        "population": 1,
        "url": "https://www.saarland.de/DE/home/home_node.html"
    },
    {
        "name": "Sachsen",
        "population": 4.1,
        "url": "https://www.sachsen.de/"
    },
    {
        "name": "Sachsen-Anhalt",
        "population": 2.2,
        "url": "https://www.sachsen-anhalt.de/startseite/"
    },
    {
        "name": "Schleswig-Holstein",
        "population": 2.9,
        "url": "https://www.schleswig-holstein.de/DE/Home/home_node.html"
    },
    {
        "name": "Thüringen",
        "population": 2.1,
        "url": "https://thueringen.de/"
    }
]

let letters = [];

function init(){
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
