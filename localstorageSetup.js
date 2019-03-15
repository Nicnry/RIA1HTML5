let users = [{ name: "François" }, { name: "Bob" }, { name: "Louis" }]

localStorage.setItem("users", JSON.stringify(users))
users = JSON.parse(localStorage.getItem("users"))

document.getElementById("checkButton").addEventListener("click", checkResult)

function checkResult() {
  let resultDiv = document.getElementById("result")
  let finalUsers = [
    { name: "François" },
    { name: "Bob" },
    { name: "Louis" },
    { name: "Marcel" },
    { name: "Jean-Jacques" }
  ]
  let result = JSON.parse(localStorage.getItem("users"))

  if (compareResult(finalUsers, result)) {
    resultDiv.innerText = "Correct !"
  } else {
    resultDiv.innerText = "Incorrect !"
  }
}

function compareResult(finalUsers, result) {
  for (let i = 0; i < finalUsers.length; i++) {
    if (finalUsers[i].name !== result[i].name) return false
  }
  return true
}
