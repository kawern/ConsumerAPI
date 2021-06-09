document.addEventListener("DOMContentLoaded", function () {

    const pokelistElm = document.querySelector(".pokelist");
    const pokefooter = document.querySelector("footer");

if (pokelistElm) {    
    let url = new URLSearchParams(window.location.search)
    let offset = url.get("offset") ? url.get("offset") : 0

    let nextOffset;
    let prevOffset;

//     let offset;
//     if (url.get("offset")) {
// offset = URL.get("offset")
    
//     } else {
//         offset = 0;
//     }
//     console.log(url)

fetch("https://kawernapi.herokuapp.com/api/v1/animals?offset=0&limit=50", {
    "method": "GET",
    "headers": {
      "Authorization": "Bearer 7835iyrehbsfm7523tyewfhsvdb46oitrjgdn2u3tewgndb"
    }
  })
        .then(response => response.json())
        .then(data => {
            console.log(data);
addToList(data)
        })

    function addToList(data) {
        let animals = data.result;

        animals.forEach(animal => {
            let li = document.createElement("li")

            li.innerHTML = `<a href="animal/?id=${animal._id}">${animal.name}</a>`;

            pokelistElm.append(li)
        })
    }
}
});