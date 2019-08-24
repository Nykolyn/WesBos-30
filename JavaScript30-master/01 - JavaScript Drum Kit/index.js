const playSound = e => {
  const activeKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!activeKey) return;
  const activeKeyAudio = document.querySelector(
    `audio[data-key="${e.keyCode}"]`
  );
  activeKeyAudio.currentTime = 0; // from the start every key press
  activeKeyAudio.play();
  activeKey.classList.add("playing");

  const allKeys = document.querySelectorAll(".key");

  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  }

  allKeys.forEach(key =>
    key.addEventListener("transitionend", removeTransition)
  );

  // my version
  //   setTimeout(() => {
  //     activeKey.classList.remove("playing");
  //   }, 100);
};

window.addEventListener("keydown", playSound);
