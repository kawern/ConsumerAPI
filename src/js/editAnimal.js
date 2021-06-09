document.addEventListener("DOMContentLoaded", function () {
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
            let test = document.querySelector("#editAnimal")
        
            test.innerHTML = `
            <form id="editAnimal">

        <label for="type">Type:<input type="text" name="type" id="type" value="${data.type}"></label>
        <label for="breed">Breed:<input type="text" name="breed" id="breed" value="${data.breed}"></label>
        <label for="name">Name:<input type="text" name="name" id="name" value="${data.name}"></label>
        <label for="age">Age:<input type="number" name="age" id="age"  value="${data.age}">
            </label>
        <label for="sex">Sex:<input type="text" name="sex" id="sex"  value="${data.sex}">
            </label>
        <label for="colors">Color(s):<input type="text" name="colors" id="colors"  value="${data.colors}"></label>
        <button type="submit">Edit animal</button>

    </form>
            `
}
)})