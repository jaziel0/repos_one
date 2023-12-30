
const container = document.getElementsByClassName("cards")[0]

async function mostrar(){

    const apiUrl = await fetch('https://rickandmortyapi.com/api/character');
    //console.log(apiUrl)

    const characters = await apiUrl.json();
    console.log(characters)
    
    characters.results.forEach(character => {
        const card_one = document.getElementsByClassName("card-dad")[0]
        const name = character.name
        //console.log(card_one)
        const nombre_carta = card_one.getElementsByClassName("nombre")
        //console.log(nombre_carta)

        nombre_carta.innerHTML = name
        container.appendChild(card_one)

        //console.log(container)
    });

    
}

mostrar()