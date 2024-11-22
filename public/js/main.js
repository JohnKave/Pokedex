const output = document.querySelector('#output');
const button = document.querySelector('#get-pokemons-btn');


// Get and show posts
async function showPokemons() {

    console.log("hellow");
    try {
        console.log("hellow");
        const res = await fetch('http://localhost:8000/api/pokemons');
        if (!res.ok) {
            throw new Error('Failed to fetch pokemonss');
        }
    
        const pokemons = await res.json();
        output.innerHTML = '';
    
        pokemons.forEach((pokemon) => {
            const pokemonEl = document.createElement('div');
            pokemonEl.textContent = pokemon.name;
            output.appendChild(pokemonEl);
        })
    } catch (error) {
        console.log('Error fetching pokemons: ', error);
    } 
}

//even listener
button.addEventListener('click', showPokemons);