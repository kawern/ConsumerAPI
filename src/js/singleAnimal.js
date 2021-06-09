document.addEventListener("DOMContentLoaded", function () {

    let singleElm = document.querySelector(".single");
    let header = document.querySelector(".header_singleAnimal");

    if (singleElm) {

        let url = new URLSearchParams(window.location.search)
        let animalID = url.get("id")


        fetch(`http://kawernapi.herokuapp.com/api/v1/animals/${animalID}`, {
            "method": "GET",
            "headers": {
              "Authorization": "Bearer 7835iyrehbsfm7523tyewfhsvdb46oitrjgdn2u3tewgndb"
            }
          })
            .then(response => response.json())
            .then(data => {
                console.log(data)

                header.innerHTML = `${data.name}`


                let li = document.createElement("div")
                let admin = document.querySelector(".admin")
            
                li.innerHTML = `
                <p>Type: ${data.type}</p>
                <p>${data.breed}</p>
                <p>${data.name}</p>
                <p>${data.sex}</p>
                <p>${data.age}</p>
                <p>${data.colors}</p>
                `
                singleElm.append(li)

                admin.innerHTML = `
                <p><a href="/editAnimal?id=${data._id}">Edit Animal</a></p>
                <p><a class="deleteBtn" href="/deleteAnimal?id=${data._id}">Delete Animal</a></p>
                `
            })
    }
})