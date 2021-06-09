document.addEventListener("DOMContentLoaded", function () {

let form = document.querySelector("#createAnimal");


let submitAnimal = function(e) {
    e.preventDefault();

    const myFormData = new FormData();
    myFormData.append("type", e.target.type.value);
    myFormData.append("breed", e.target.breed.value);
    myFormData.append("name", e.target.name.value);
    myFormData.append("age", e.target.age.value);
    myFormData.append("sex", e.target.sex.value);
    myFormData.append("colors", e.target.colors.value);

    fetch("http://kawernapi.herokuapp.com/api/v1/animals", {
  "method": "POST",
  "headers": {
    "Authorization": "Bearer 7835iyrehbsfm7523tyewfhsvdb46oitrjgdn2u3tewgndb"
  },
  "body": myFormData
})
  .then(response => console.log(response))
  .catch(err => console.error(err));
}
form.addEventListener("submit", submitAnimal)
})
