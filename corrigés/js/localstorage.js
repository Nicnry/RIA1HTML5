document.addEventListener("DOMContentLoaded", function () {
  // get currents users
  let myUsers = JSON.parse(localStorage.getItem("users"))

  // Used to validate exercise
  const finalUsers = [
    ...myUsers,
    { name: "Marcel" },
    { name: "Jean-Jacques" }
  ]

  // Puts back myUsers' content and adds Jean-Jacques & Marcel
  myUsers = [...myUsers, { name: "Jean-Jacques" }, { name: "Marcel" }]

  // Store updated users
  localStorage.setItem("users", JSON.stringify(myUsers))

  // Binds buttons
  document.getElementById("displayStorage").addEventListener("click", displayStorage)
  document.getElementById("checkButton").addEventListener("click", checkResult)

  // Display each user in storage
  function displayStorage() {
    storageDiv = document.getElementById("storageContent")
    // Empty div before adding new elements
    storageDiv.innerHTML = ""
    myUsers.forEach(user => {
      let userDiv = document.createElement("div")
      userDiv.innerHTML = user.name
      storageDiv.appendChild(userDiv)
    })
  }

  // Check storage content and informs user if he succeed
  function checkResult() {
    let resultDiv = document.getElementById("result")
    let result = JSON.parse(localStorage.getItem("users"))
    resultDiv.innerText = compareResult(finalUsers, result)
      ? "Correct !"
      : "Incorrect !"
  }

  // Compares every users to each others and return true if they all matched finalUsers
  function compareResult(finalUsers, results) {
    finalUsers.forEach(finalUser => {
      results.forEach(result => {
        if (!finalUser.matched)
          // Adds matched attribute if not present
          finalUser.matched = finalUser.name === result.name
      })
    })
    return finalUsers.every(user => {
      return user.matched
    })
  }
})
