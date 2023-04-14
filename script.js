"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = e.target.task_created.value;
    createTask(input);
    form.reset();
  });
});

function createTask(input) {
  const task = document.createElement("li");
  task.textContent = `${input} `;
  const btn = document.createElement("button");
  btn.textContent = "x";
  task.appendChild(btn);
  btn.addEventListener("click", deleteBtn);
  task.addEventListener("dblclick", lettersPink);
  document.querySelector(".tasks").appendChild(task);
}

function deleteBtn(btn) {
  btn.target.parentNode.remove();
}

function lettersPink(task) {
  task.target.classList.add("pink_letters");
}
