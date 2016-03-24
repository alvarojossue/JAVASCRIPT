
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    var input = document.getElementById("todo-input").value;
    var list = document.createElement("li");
    var text = document.createTextNode(input);
    list.appendChild(text);
    document.getElementById("lista").appendChild(list);
    document.getElementById("todo-input").value = "";

    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
  }

  function markAsDone() {
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";

    var list = document.getElementById("lista")
    var element = list.firstElementChild
  
    var listaTerminada = document.querySelector(".done-list-items")
    listaTerminada.appendChild(element);

    element.classList.add("done");
  }
  
}
