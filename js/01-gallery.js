import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    (image) =>
      `<li class="gallery__item">
     <a class="gallery__link" href=${image.original}>
       <img class="gallery__image" src=${image.preview} data-source=${image.original} alt="${image.description}" />
    </a>
   </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeEnd", galleryMarkup);

function selectedImageModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== `IMG`) {
    return;
  }
  const fullSizeImg = event.target.dataset.source;

  const imageModal = basicLightbox.create(`<img src="${fullSizeImg}"/>`);
  imageModal.show();

  imageModal.show(() =>
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        imageModal.close();
      }
    })
  );
}

gallery.addEventListener("click", selectedImageModal);
