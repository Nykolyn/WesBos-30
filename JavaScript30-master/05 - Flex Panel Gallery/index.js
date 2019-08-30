const panels = document.querySelectorAll(".panel");

const handlePanelView = e => e.target.classList.toggle("open");

const toggleActive = e =>
  e.propertyName.includes("flex")
    ? e.target.classList.toggle("open-active")
    : null;

panels.forEach(panel => panel.addEventListener("click", handlePanelView));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
