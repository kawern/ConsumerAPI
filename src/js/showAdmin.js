document.addEventListener("DOMContentLoaded", function () {

    let adminBtn = document.querySelector(".showAdmin")

    adminBtn.addEventListener("click", function showAdmin() {
        var x = document.querySelector(".adminContent");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      })

  })