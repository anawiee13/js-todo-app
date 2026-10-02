const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");

addButton.addEventListener("click", function () {
  const taskText = taskInput.value;

  const task = document.createElement("li");
  task.textContent = taskText;

  task.addEventListener("click", function () {
    task.classList.toggle("completed");
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {
    task.remove();
  });

  task.appendChild(deleteButton);
  taskList.appendChild(task);

  taskInput.value = "";
});
