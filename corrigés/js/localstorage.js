document.addEventListener("DOMContentLoaded", function () {
  // get currents users
  let myUsers = JSON.parse(localStorage.getItem("users"))

  document.getElementById("displayStorage").addEventListener("click", displayStorage)

  // Display each user in storage
  function displayStorage() {
    storageDiv = document.getElementById("storageContent")
    myUsers.forEach(user => {
      let userDiv = document.createElement("div")
      userDiv.innerHTML = user.name
      storageDiv.appendChild(userDiv)
    })
  }

  // Puts back myUsers' content and adds Jean-Jacques & Marcel
  myUsers = [...myUsers, { name: "Jean-Jacques" }, { name: "Marcel" }]

  // Store updated users
  localStorage.setItem("users", JSON.stringify(myUsers))
})
