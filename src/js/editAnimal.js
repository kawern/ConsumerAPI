document.addEventListener("DOMContentLoaded", function () {
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
            let editAnimalForm = document.querySelector("#editAnimal")
        
            editAnimalForm.innerHTML = `

        <label for="type">Type:</label>
        <input type="text" name="type" id="type" value="${data.type}">
        <label for="breed">Breed:</label>
        <input type="text" name="breed" id="breed" value="${data.breed}">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" value="${data.name}">
        <label for="age">Age:</label>
        <input type="number" name="age" id="age"  value="${data.age}">
            
        <label for="sex">Sex:</label>
        <input type="text" name="sex" id="sex"  value="${data.sex}">
            
        <label for="colors">Color(s):</label>
        <input type="text" name="colors" id="colors"  value="${data.colors}">
        <input type="submit" value="Edit animal"></input>

            `
let editForm = document.querySelector("#editAnimal");


let editAnimal = function(e) {
    e.preventDefault();

    const editFormData = new FormData();

    let barArray = [e.target.colors.value];

    editFormData.append("type", e.target.type.value);
    editFormData.append("breed", e.target.breed.value);
    editFormData.append("name", e.target.name.value);
    editFormData.append("age", e.target.age.value);
    editFormData.append("sex", e.target.sex.value);
    editFormData.append("colors", JSON.stringify(barArray));

    fetch(`https://kawernapi.herokuapp.com/api/v1/animals/${animalID}`, {
  "method": "PATCH",
  "headers": {
    "Authorization": "Bearer 7835iyrehbsfm7523tyewfhsvdb46oitrjgdn2u3tewgndb"
  },
  "body": editFormData
})
  .then(response => console.log(response))
  .then(alert("The animal has now been edited!"))
  .then(window.history.back())
  .catch(err => console.error(err));
}
editForm.addEventListener("submit", editAnimal)
}
)})