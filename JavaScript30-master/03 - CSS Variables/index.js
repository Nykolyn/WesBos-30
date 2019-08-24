const inputs = document.querySelectorAll(".controls input");
const handleUpdate = function() {
  const img = document.querySelector("img");
  console.log(this.name);
  if (this.name === "blur") {
    img.style.filter = `blur(${this.value}px)`;
  }

  if (this.name === "spacing") {
    img.style.padding = `${this.value}px`;
  }

  if (this.type === "color") {
    img.style.backgroundColor = `${this.value}`;
  }
};

inputs.forEach(input => input.addEventListener("input", handleUpdate));
