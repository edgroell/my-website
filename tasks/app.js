const STORAGE_KEY = "neon-tasks-v1";

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const counter = document.getElementById("counter");
const emptyState = document.getElementById("empty-state");
const clearDoneBtn = document.getElementById("clear-done");
const clock = document.getElementById("clock");
const filterBtns = document.querySelectorAll(".filter");

let tasks = load();
let filter = "all";

function uid() {
  return crypto.randomUUID
    ? crypto.randomUUID()
    : Date.now().toString(16) + Math.random().toString(16).slice(2);
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function addTask(text) {
  tasks.unshift({ id: uid(), text, done: false });
  save();
  render();
}

function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) task.done = !task.done;
  save();
  render();
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  save();
  render();
}

function clearDone() {
  tasks = tasks.filter((t) => !t.done);
  save();
  render();
}

function visibleTasks() {
  if (filter === "active") return tasks.filter((t) => !t.done);
  if (filter === "done") return tasks.filter((t) => t.done);
  return tasks;
}

function render() {
  list.innerHTML = "";

  const visible = visibleTasks();
  emptyState.style.display = visible.length === 0 ? "block" : "none";
  clearDoneBtn.style.display = tasks.some((t) => t.done) ? "inline-block" : "none";

  for (const task of visible) {
    const li = document.createElement("li");
    li.className = "task" + (task.done ? " done" : "");

    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "task-check";
    check.checked = task.done;
    check.setAttribute("aria-label", "Toggle task");
    check.addEventListener("change", () => toggleTask(task.id));

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = task.text;

    const del = document.createElement("button");
    del.className = "task-del";
    del.textContent = "\u2715";
    del.setAttribute("aria-label", "Delete task");
    del.addEventListener("click", () => deleteTask(task.id));

    li.append(check, text, del);
    list.appendChild(li);
  }

  const remaining = tasks.filter((t) => !t.done).length;
  counter.textContent = `${remaining}/${tasks.length} REMAINING`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addTask(text);
  input.value = "";
  input.focus();
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    filter = btn.dataset.filter;
    render();
  });
});

clearDoneBtn.addEventListener("click", clearDone);

function tickClock() {
  clock.textContent = new Date().toLocaleTimeString("en-GB");
}

tickClock();
setInterval(tickClock, 1000);

render();
