const container = document.getElementsByClassName("cards")[0]

async function mostrar() {
    try {
        const apiUrl = await fetch('https://rickandmortyapi.com/api/character');

        const characters = await apiUrl.json();

        characters.results.forEach(character => {
            const card_one = document.getElementsByClassName("card-dad")[0]

            const imga = card_one.querySelector(".imga")
            imga.src = character.image;

            const nombre_carta = card_one.querySelector(".nombre");
            nombre_carta.innerHTML = character.name;

            const status = card_one.querySelector(".status")
            status.innerHTML = "Status: " + character.status

            const species = card_one.querySelector(".species")
            species.innerHTML = "Species: " + character.species

            const gender = card_one.querySelector(".gender")
            gender.innerHTML = character.gender

            // appendChild = agrega nuevos elementos a la pagina
            const clonedCard = card_one.cloneNode(true);
            container.appendChild(clonedCard);

        });

    } catch (error) {
        console.error("Error al obtener datos de la API:", error);
    }
}

mostrar();
