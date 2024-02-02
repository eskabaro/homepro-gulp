const openModalButtons = document.querySelectorAll(".header__burger");
const modal = document.querySelector(".modal");
const closeModalButtons = document.querySelectorAll(".close-modal");

openModalButtons.forEach((openBtn) => {
  openBtn.addEventListener("click", openModal);
});

closeModalButtons.forEach((closeBtn) => {
  closeBtn.addEventListener("click", closeModal);
});

function openModal() {
  modal.classList.add("visible");
}

function closeModal() {
  modal.classList.remove("visible");
}
