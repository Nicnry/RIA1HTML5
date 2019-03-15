let myUsers = JSON.parse(localStorage.getItem("users"))

myUsers = [...myUsers, { name: "Marcel" }, { name: "Jean-Jacques" }]

localStorage.setItem("users", JSON.stringify(myUsers))
