// Lightbox
document.addEventListener("click", (e) => {
  const img = e.target.closest(".card img");
  if (img) openLightbox(img.src);
});

const lb = document.getElementById("lightbox");
const lbImg = document.createElement("img");
lb.appendChild(lbImg);

function openLightbox(src) {
  lbImg.src = src;
  lb.setAttribute("aria-hidden", "false");
}

lb.addEventListener("click", () => {
  lb.setAttribute("aria-hidden", "true");
});
