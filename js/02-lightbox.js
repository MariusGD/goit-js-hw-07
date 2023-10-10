import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    (image) =>
      `<li class="gallery__item">
        <a class="gallery__item" href=${image.original}>
            <img class="gallery__image" src=${image.preview} alt="${image.description}" />
        </a>
    </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeEnd", galleryMarkup);

let imageModal = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});