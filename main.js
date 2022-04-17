// fetch('https://api.pokemontcg.io/v2/cards?q=name:')
//   .then(response => response.json())
//   .then(data => console.log(data));

const pokemonSearch = document.getElementById("txt");
const form = document.getElementById("form");
const cont = document.getElementById("cont"); // container

form.addEventListener("submit", (event) => {
  event.preventDefault();

  cont.innerHTML = "";

  fetch("https://api.pokemontcg.io/v2/cards?q=name:" + pokemonSearch.value) // CALL API
    .then((response) => response.json()) // response to json
    .then((payload) => {
      console.log(payload.data); //send data to console

      for (let i = 0; i < payload.data.length; i++) {
        const cardDiv = document.createElement("div"); // created div
        cardDiv.classList.add("card"); // gave cardDiv a class named card

        const img = document.createElement("img");
        img.src = payload.data[i].images.small;
        // document.getElementById().append(img);
        cardDiv.append(img);
        cont.append(cardDiv);

        pokemonSearch.value = "";
      }
    });
});

//pokemonSearch.addEventListener("sumbit");
