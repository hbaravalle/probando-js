fetch("https://rickandmortyapi.com/api/character")
  .then(function (response) {
    console.log("La promesa se ha cumplido");
    return response.json();
  })
  .then(function (data) {
    console.log("Se ha terminado de leer la informacion dentro del body");

    // Los personajes están ordenados en un array...
    console.log(data.results);

    const listadoDePersonajes = document.querySelector(
      "#listado-de-personajes"
    );

    for (let character of data.results) {
      // Ir incorporando este personaja al DOM (al HTML)
      listadoDePersonajes.insertAdjacentHTML(
        "beforeend",
        `
        <a href="/receta${character.id}.html">
            <div class="card">
                <img src="${character.image}" alt="${character.name}" />
                <div class="text-wrapper">
                    <h2>${character.name}</h2>
                    <small>${character.species} - ${character.status}</small>
                    <h3>Last known location:</h3>
                    <p>${character.origin.name}</p>
                    <h3>First seen in:</h3>
                    <p>${character.location.name}</p>
                </div>
            </div>
        </a>
        `
      );
    }
  });

console.log("Hola");
