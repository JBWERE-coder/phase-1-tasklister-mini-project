document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  form.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();

  const newTaskDescription = document.querySelector("#new-task-description");
  const newTask = createTaskElement(newTaskDescription.value);
  appendNewTask(newTask);

  event.target.reset();
};

const createTaskElement = taskDescription => {
  const taskElement = document.createElement("li");
  taskElement.textContent = taskDescription;
  return taskElement;
};

const appendNewTask = task => {
  const taskList = document.querySelector("#tasks");
  taskList.appendChild(task);
};
