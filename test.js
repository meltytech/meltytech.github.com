function updateTheme() {
  const mode = ui("mode") == "dark" ? "light" : "dark";
  ui("mode", mode);
}

function goTo(selector, title) {
  ui(selector);
  updateTitle(title);
}

function updateTitle(title) {
  const titleElement = document.getElementById("titulo");
  titleElement.style.display = "none";
  titleElement.innerHTML = title || "";
  setTimeout(() => titleElement.style.display = "", 100);
}