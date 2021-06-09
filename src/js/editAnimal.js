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

        <label for="type">Type:<input type="text" name="type" id="type" value="${data.type}"></label>
        <label for="breed">Breed:<input type="text" name="breed" id="breed" value="${data.breed}"></label>
        <label for="name">Name:<input type="text" name="name" id="name" value="${data.name}"></label>
        <label for="age">Age:<input type="number" name="age" id="age"  value="${data.age}">
            </label>
        <label for="sex">Sex:<input type="text" name="sex" id="sex"  value="${data.sex}">
            </label>
        <label for="colors">Color(s):<input type="text" name="colors" id="colors"  value="${data.colors}"></label>
        <button type="submit">Edit animal</button>

            `
let editForm = document.querySelector("#editAnimal");


let editAnimal = function(e) {
    e.preventDefault();

    const editFormData = new FormData();
    editFormData.append("type", e.target.type.value);
    editFormData.append("breed", e.target.breed.value);
    editFormData.append("name", e.target.name.value);
    editFormData.append("age", e.target.age.value);
    editFormData.append("sex", e.target.sex.value);
    editFormData.append("colors", e.target.colors.value);

    fetch(`http://kawernapi.herokuapp.com/api/v1/animals/${animalID}`, {
  "method": "PATCH",
  "headers": {
    "Authorization": "Bearer 7835iyrehbsfm7523tyewfhsvdb46oitrjgdn2u3tewgndb"
  },
  "body": editFormData
})
  .then(response => console.log(response))
  .then(alert("The animal has now been edited!"))
  .catch(err => console.error(err));
}
editForm.addEventListener("submit", editAnimal)
}
)})