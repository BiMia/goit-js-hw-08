// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
// creare galerie HTML
galleryItems.forEach(item => {
  const li = document.createElement('li');
  li.classList.add("style-img");
  const a = document.createElement('a');
  a.classList.add("gallery__link");
  a.setAttribute("href", item.original);
  const img = document.createElement('img');
  img.src = item.preview;
  img.alt = item.description;
   img.setAttribute('data-source', item.original);
  li.appendChild(a);
  a.appendChild(img);
  gallery.appendChild(li);
});
// stop download
const img = document.querySelectorAll('img');
img.forEach((image) => {
    image.addEventListener('click', function(event) {
        event.preventDefault();
    });
});
    // library basicLightbox
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', function () {
    const imageIndex = galleryItems.findIndex(item => item.preview === img.src);
    const instance = basicLightbox.create(`<img src=${galleryItems[imageIndex].original} width="800" height="600">`);
    instance.show();
  });
});

console.log(galleryItems);
