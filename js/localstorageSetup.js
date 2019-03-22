document.addEventListener("DOMContentLoaded", function () {
  // Setup exercise
  let users = [{ name: "François" }, { name: "Guillaume" }, { name: "Louis" }]
  let finalUsers = [
    ...users,
    { name: "Marcel", matched: false },
    { name: "Jean-Jacques", matched: false }
  ]
  localStorage.setItem("users", JSON.stringify(users))

  document.getElementById("checkButton").addEventListener("click", checkResult)

  function checkResult() {
    let resultDiv = document.getElementById("result")
    let result = JSON.parse(localStorage.getItem("users"))
    resultDiv.innerText = compareResult(finalUsers, result)
      ? "Correct !"
      : (resultDiv.innerText = "Incorrect !")
  }

  function compareResult(finalUsers, results) {
    finalUsers.forEach(finalUser => {
      results.forEach(result => {
        if (!finalUser.matched)
          finalUser.matched = finalUser.name === result.name
      })
    })
    return finalUsers.every(user => {
      return user.matched
    })
  }
})
