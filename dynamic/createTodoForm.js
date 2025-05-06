import "./css/createTodoForm.css";
// Intelligent React Components
const globals = { isFormBuilt: false };

export default function main(event, args) {
  event.preventDefault();
  const form = event.currentTarget;
  const title = document.getElementById("createTodoForm-title").value;
  const due = document.getElementById("createTodoForm-due").value;

  if (!title || !due) {
    alert("Title and due date are required.");
    return;
  }

  const newItem = {
    title: title,
    due: due,
  };

  // Get existing items from local storage or initialize an empty array
  let items = JSON.parse(localStorage.getItem("myItems")) || [];

  // Add the new item
  items.push(newItem);

  // Save the updated items back to local storage
  localStorage.setItem("myItems", JSON.stringify(items));

  // Update the Todos using useState hook. Always make copy of Todos
  args.setTodos((preValue) => [...preValue, newItem]);

  // Close the dialog
  const addItemForm = document.getElementById("add-item-form");
  if (addItemForm instanceof HTMLDialogElement) {
    addItemForm.close();
  }

  form.reset();
}

export function formBuilder(formElement) {
  if (globals.isFormBuilt) return;

  if (!(formElement instanceof HTMLFormElement)) {
    console.warn("Invalid formElement provided. Expected an HTMLFormElement.");
    return;
  }

  formElement.className = "createTodoForm";

  // Title input
  const titleLabel = document.createElement("label");
  titleLabel.htmlFor = "createTodoForm-title";
  titleLabel.textContent = "Title:";

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "createTodoForm-title";
  titleInput.name = "title";

  // Due date input
  const dueLabel = document.createElement("label");
  dueLabel.htmlFor = "createTodoForm-due";
  dueLabel.textContent = "Due Date:";

  const dueInput = document.createElement("input");
  dueInput.type = "date";
  dueInput.id = "createTodoForm-due";
  dueInput.name = "due";

  // Disable past dates
  const today = new Date().toISOString().split("T")[0];
  dueInput.setAttribute("min", today);

  // Append elements to the form
  formElement.appendChild(titleLabel);
  formElement.appendChild(titleInput);
  formElement.appendChild(dueLabel);
  formElement.appendChild(dueInput);

  // Submit button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Add Task";

  formElement.appendChild(submitButton);
  globals.isFormBuilt = true;
}

export const meta = {
  thoughts:
    "The prompt describes a to-do form to add a task with title and due date and update localStorage. Form goes inside #add-item-form dialogBox so close it upson successful operation and reset the form. I will generate code according to the instruction.",
  expect: "",
};
