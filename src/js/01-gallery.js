import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

// Creare galerie HTML
galleryItems.forEach(item => {
  const li = document.createElement('li');
  li.classList.add('style-img');
  const a = document.createElement('a');
  a.classList.add('gallery__link');
  a.setAttribute('href', item.original);
  const img = document.createElement('img');
  img.src = item.preview;
  img.alt = item.description;
  img.setAttribute('data-source', item.original);
  li.appendChild(a);
  a.appendChild(img);
  gallery.appendChild(li);
});

// Inițializare SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems); 

console.log(galleryItems);
