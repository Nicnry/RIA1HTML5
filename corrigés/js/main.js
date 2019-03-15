document.addEventListener("DOMContentLoaded", function() {
  let wordInput
  let form = document.getElementById("dom-form")
  let elem

  form.addEventListener("submit", function(evt) {
      evt.preventDefault()
      wordInput = document.getElementById("value").value
      AddText()
  })
  
  function AddText() {
    elem = document.querySelector('#dom-exercice');
    var div = document.createElement('div');

    div.innerHTML = wordInput;
    elem.parentNode.insertBefore( div, elem );
    elem.parentNode.insertBefore( div, elem.nextSibling )
    form.reset()
  }
})