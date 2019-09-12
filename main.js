// Async and Await method to fetch an API

async function getPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/');
    const json = await response.json();
    console.log(json);
};

getPokemon();