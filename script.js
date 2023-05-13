"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = e.target.task_created.value;
    buildLi(input);
    form.reset();
  });
});

function buildLi(input) {
  const li = document.createElement("li");
  li.textContent = `${input} `;
  const btn = document.createElement("button");
  btn.textContent = "x";
  li.appendChild(btn);
  document.querySelector(".tasks").appendChild(li);
  li.addEventListener("dblclick", turnPink);
  btn.addEventListener("click", deleteBtn);
}

function deleteBtn(btn) {
  btn.target.parentNode.remove();
}

function turnPink(letters) {
  letters.target.classList.toggle("pink_letters");
}
