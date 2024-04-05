let demoPokemon = {};
const pokemonContainer = document.querySelector("#pokemon-container");


function getRandomPokemon() {
    // let's max out number of possibilities to 1000
    const totalPokemon = 999;
    const randomInteger = Math.floor(Math.random() * totalPokemon) + 1;
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${randomInteger}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(response => {
            // console.log("demoResponse: ", response);
            demoPokemon.name = response.name;
            demoPokemon.abilities = response.abilities;
            demoPokemon.moves = response.moves;

            // display demo links & content
            let pokeDOM = `
                <div class="pokemon">
                    <h2>Name: ${demoPokemon.name.charAt(0).toUpperCase() + demoPokemon.name.slice(1)}</h2>`;

            // add list of abilities
            // console.log(demoPokemon.abilities);
            pokeDOM += `<h3>Abilities:</h3>
                <ul class="abilities">`;
            demoPokemon.abilities.forEach(ability => {
                pokeDOM += `<li>${ability.ability.name}</li>`;
            });
            // close out abilities ul
            pokeDOM += `</ul>`;

            // add list of moves
            // console.log(demoPokemon.moves);
            pokeDOM += `
                <h3>Moves:</h3>
                <ul class="moves">`;
            demoPokemon.moves.forEach(move => {
                pokeDOM += `<li>${move.move.name}</li>`;
            });
            // close out moves ul
            pokeDOM += `</ul>`;

            // finish up pokeDOM
            pokeDOM += `</div>`;

            // add pokeDOM to pokemonContainer
            pokemonContainer.innerHTML = pokeDOM;
        })
        .catch(error => {
            console.error(error);
        });
}

const updatePokemon = document.querySelector("#update-pokemon");
updatePokemon.addEventListener("click", getRandomPokemon);

getRandomPokemon();

