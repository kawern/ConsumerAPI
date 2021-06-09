document.addEventListener("DOMContentLoaded", function () {
    let url = new URLSearchParams(window.location.search)
    let animalID = url.get("id")

    let deleteBtn = document.querySelector(".deleteBtn")
    deleteBtn.addEventListener("click", function () {
    
        fetch(`https://kawernapi.herokuapp.com/api/v1/animals/${animalID}`, {
            "method": "DELETE",
            "headers": {
              "Authorization": "Bearer 7835iyrehbsfm7523tyewfhsvdb46oitrjgdn2u3tewgndb"
            }
          })
            .then(alert("deleted"))
            .then(window.location="../")
            })
    })