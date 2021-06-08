// let form = document.querySelector("#createAnimal");


// let submitAnimal = function(e) {
//     e.preventDefault();

//     const myFormData = new FormData();
//     myFormData.append("type", e.target.type.value);
//     myFormData.append("breed", e.target.type.value);
//     myFormData.append("name", e.target.type.value);
//     myFormData.append("age", e.target.type.value);
//     myFormData.append("sex", e.target.type.value);
//     myFormData.append("colors", e.target.type.value);

//     fetch("http://kawernapi.herokuapp.com/api/v1/animals", {
//   "method": "POST",
//   "headers": {
//     "Content-Type": "multipart/form-data",
//     "Authorization": "Bearer 7835iyrehbsfm7523tyewfhsvdb46oitrjgdn2u3tewgndb"
//   },
//   "body": myFormData
// })
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
// }
// form.addEventListener("submit", submitAnimal)



// // fetch("http://kawernapi.herokuapp.com/api/v1/animals", {
// //   })
// //     .then(response => response.json())
// //     .then(result => console.log(result))
// //     .catch(err => console.error(err));