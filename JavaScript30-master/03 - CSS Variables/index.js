const inputs = document.querySelectorAll(".controls input");
const handleUpdate = function() {
  console.log(this.name);
  const suffix = this.dataset.sizing || "";

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );

  //   my version
  // const img = document.querySelector("img");
  //   if (this.name === "blur") {
  //     img.style.filter = `blur(${this.value}px)`;
  //   }

  //   if (this.name === "spacing") {
  //     img.style.padding = `${this.value}px`;
  //   }

  //   if (this.type === "color") {
  //     img.style.backgroundColor = `${this.value}`;
  //   }
};

inputs.forEach(input => input.addEventListener("input", handleUpdate));
