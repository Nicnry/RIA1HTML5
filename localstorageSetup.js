// Setup exercise
let users = [{ name: "François" }, { name: "Bob" }, { name: "Louis" }]
let finalUsers = [
  { name: "François", matched: false },
  { name: "Bob", matched: false },
  { name: "Louis", matched: false },
  { name: "Marcel", matched: false },
  { name: "Jean-Jacques", matched: false }
]
localStorage.setItem("users", JSON.stringify(users))
JSON.parse(localStorage.getItem("users"))

// Need to bind events like this if you obfuscate the code
document.getElementById("checkButton").addEventListener("click", checkResult)

// Gather all required data and then informs user if he correctly completed the exercise
function checkResult() {
  let resultDiv = document.getElementById("result")
  let result = JSON.parse(localStorage.getItem("users"))

  if (compareResult(finalUsers, result)) {
    resultDiv.innerText = "Correct !"
  } else {
    resultDiv.innerText = "Incorrect !"
  }
}

function compareResult(finalUsers, results) {
  finalUsers.forEach(finalUser => {
    results.forEach(result => {
      if (!finalUser.matched) finalUser.matched = finalUser.name === result.name
    })
  })
  return finalUsers.every(user => {
    return user.matched
  })
}
