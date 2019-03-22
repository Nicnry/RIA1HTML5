document.addEventListener("DOMContentLoaded", function () {
  // Setup exercise
  let users = [{ name: "François" }, { name: "Guillaume" }, { name: "Louis" }]
  localStorage.setItem("users", JSON.stringify(users))
})
