const blurDiv = document.querySelectorAll(".blur-load");

blurDiv.forEach((e) => {
  const img = e.querySelector("img");

  const loaded = () => {
    e.classList.add("loaded");
  };

  if (img.complete) {
    loaded();
  } else {
    img.addEventListener("load", loaded);
  }
});
