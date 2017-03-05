var graphQLEndpoint = 'https://api.graph.cool/simple/v1/cizv9xq1aeviz0154kakoee26';

function createPokemon() {
  var name = $('#pokemon-name').val();
  console.log('createPokemon', name)
  $.ajax({
    url: graphQLEndpoint,
    type: 'POST',
    data: JSON.stringify({ "query": "mutation { createPokemon(name: \"" + name + "\" ) { id name } } " }),
    contentType: 'application/json'
  }).done(function(response, error) {
    console.log('received data', response, error);
    var pokemonList = document.getElementById("pokemon-list");
    var pokemon = response.data.createPokemon
    var li = document.createElement("li");
    li.textContent = pokemon.name;
    pokemonList.appendChild(li);
  });
}

function fetchAllPokemons() {
  console.log('fetchAllPokemons')
  $.ajax({
    url: graphQLEndpoint,
    type: 'POST',
    data: '{ "query": " { allPokemons { id name } } " }',
    contentType: 'application/json'
  }).done(function(response, error) {
    console.log('received data', response, error);
    var pokemonList = document.getElementById("pokemon-list");
    response.data.allPokemons.forEach(function (pokemon) {
        var li = document.createElement("li");
        li.textContent = pokemon.name;
        pokemonList.appendChild(li);
    });
  });
}
