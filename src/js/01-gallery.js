// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = galleryItems.map(item => `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img 
      class="gallery__image" 
      src="${item.preview}" 
      data-source="${item.original}" 
      alt="${item.description}" />
    </a>
  </li>
`).join("");

galleryContainer.insertAdjacentHTML('afterbegin', liImage);

const lightbox = new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
