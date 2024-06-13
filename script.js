// script.js

// Mengubah warna teks pada navigasi saat di-hover
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#ff6600'; // Mengubah warna menjadi oranye saat di-hover
  });

  link.addEventListener('mouseout', () => {
    link.style.color = '#fff'; // Mengembalikan warna ke putih saat tidak di-hover
  });
});

// Mengubah gambar di section "Tentang Kami" secara periodik
const aboutImages = ['undiksha.jpg', 'FTK.jpg', 'FIP.jpg'];
let currentImageIndex = 0;
const aboutImageElement = document.querySelector('.about img');

setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % aboutImages.length;
  aboutImageElement.src = aboutImages[currentImageIndex];
}, 3000); // Mengubah gambar setiap 3 detik

// 
// const videoElement = document.querySelector('.hero video');

// let videoX = 0;
// let videoY = 0;
// const videoSpeed = 2;

// setInterval(() => {
//   videoX += videoSpeed;
//   videoY += videoSpeed;

//   videoElement.style.transform = `translate(${videoX}px, ${videoY}px)`;

//   if (videoX > window.innerWidth - videoElement.offsetWidth || videoX < 0) {
//     videoSpeed *= -1; // Membalikkan arah gerakan jika mencapai batas layar
//   }

//   if (videoY > window.innerHeight - videoElement.offsetHeight || videoY < 0) {
//     videoSpeed *= -1; // Membalikkan arah gerakan jika mencapai batas layar
//   }
// }, 16); 

// Galeri
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalImage = document.createElement('img');
    modalImage.src = item.src;
    modalImage.alt = item.alt;

    const closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.innerHTML = '&times;';

    closeButton.addEventListener('click', () => {
      modal.remove();
    });

    modal.appendChild(modalImage);
    modal.appendChild(closeButton);
    document.body.appendChild(modal);
  });
});

const form = document.getElementById('upload-form');
const fileInput = document.getElementById('file-input');
const galleryContainer = document.getElementById('gallery-container');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        const img = document.createElement('img');
        img.src = reader.result;
        galleryContainer.appendChild(img);
    }

    if (file) {
        reader.readAsDataURL(file);
    }
});