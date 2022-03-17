const todoTitle = document.getElementById("todo-title");

const btChangeTitle = document.querySelector(".bt-change-title");
btChangeTitle.addEventListener("click", function () {
  // changer le titre par le contenu du champ

  // récupérer le champ
  const inputTitle = document.querySelector("#change-title");

  // récupérer le texte du champ
  const content = inputTitle.value;

  todoTitle.textContent = content;

  inputTitle.value = "";
});

document.getElementById("bt-add-todo").addEventListener("click", function () {
  const addTodo = document.getElementById("add-todo");
  const addTodoContent = addTodo.value;

  const todoContainer = document.querySelector("#todo-list-container");

  const todoItem = document.createElement("li");
  todoItem.textContent = addTodoContent;
  todoContainer.appendChild(todoItem);

  addTodo.value = "";
});
