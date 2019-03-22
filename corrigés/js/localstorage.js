document.addEventListener("DOMContentLoaded", function () {
  let myUsers = JSON.parse(localStorage.getItem("users"))

  storageDiv = document.getElementById("storageContent")
  myUsers.forEach(user => {
    let userDiv = document.createElement("div")
    userDiv.innerHTML = user.name
    storageDiv.appendChild(userDiv)
  })

  myUsers = [...myUsers, { name: "Jean-Jacques" }, { name: "Marcel" }]

  localStorage.setItem("users", JSON.stringify(myUsers))
})
