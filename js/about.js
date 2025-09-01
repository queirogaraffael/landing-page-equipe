// MODAL DE IMAGEM
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".team-photo").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});