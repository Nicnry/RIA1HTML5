let myUsers = JSON.parse(localStorage.getItem("users"))

myUsers = [...myUsers, { name: "Jean-Jacques" }, { name: "Marcel" }]

localStorage.setItem("users", JSON.stringify(myUsers))
