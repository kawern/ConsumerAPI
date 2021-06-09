document.addEventListener("DOMContentLoaded", function () {

    let singleElm = document.querySelector(".single");
    let header = document.querySelector(".header_singleAnimal");

    if (singleElm) {

        let url = new URLSearchParams(window.location.search)
        let animalID = url.get("id")


        fetch(`https://kawernapi.herokuapp.com/api/v1/animals/${animalID}`, {
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
                <table>
                        <tr>
                            <th>TYPE</th>
                            <th>BREED</th>
                            <th>NAME</th>
                            <th>SEX</th>
                            <th>AGE</th>
                            <th>COLORS</th>
                        </tr>
                        <tr>
                            <td>${data.type}</td>
                            <td>${data.breed}</td>
                            <td>${data.name}</td>
                            <td>${data.sex}</td>
                            <td>${data.age}</td>
                            <td>${data.colors}</td>
                        </tr>
                    </table>
                `
                singleElm.append(li)

                admin.innerHTML = `
                <p><a href="/editAnimal?id=${data._id}">Edit Animal</a></p>
                <p><a class="deleteBtn" href="/deleteAnimal?id=${data._id}">Delete Animal</a></p>
                `
            })
    }
})