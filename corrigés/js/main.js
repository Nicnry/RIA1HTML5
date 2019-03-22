document.addEventListener("DOMContentLoaded", function() {

  //Define variable
  let form = document.getElementById("dom-form")
  let wordInput
  let div
  

  //Submit event on form
  form.addEventListener("submit", function(e) {

      e.preventDefault()

      //Get value from my form
      wordInput = document.getElementById("value").value
      AddText()
  })

  
  //Add text to my DOM
  function AddText() {

    //Create div
    div = document.createElement('div')

    //Add class to my new div
    div.className = 'dynamic-value'
    div.style.color=getRandomColor()
    
    //Add text to my new div
    div.innerHTML = wordInput

    //Insert data after my form
    form.parentNode.insertBefore( div, form.nextSibling )

    //Remove value on my form⁄
    form.reset()
  }

  
  //Generate random color
  function getRandomColor() {

    //Define variable
    let letters = '0123456789ABCDEF'
    let color = '#'
    let i

    //count for get hexa format
    for (i = 0; i < 6; i++) {
      
      //Add the new value
      color += letters[Math.floor(Math.random() * 16)];
    }

    //Return the generated color
    return color;
  }

})
