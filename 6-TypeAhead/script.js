//Json file with cities
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// empty array for cities
const cities = [];

//fetch the data and spread into array 
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(citySearched, cities) {
    return cities.filter(place => {
        //Need to match a variable with whats in array 
        // g = global i = insensitive
        const regex = new RegExp(citySearched, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    }); 
}



// get the input
const searchInput = document.querySelector('.search');
const results = document.querySelector('.results');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);


// display the matches in the list on the page 
function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`); 
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li> 
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${place.population}</span>
        </li>
        `;
    }).join('');
    results.innerHTML = html;
}