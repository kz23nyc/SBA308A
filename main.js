
import { fetchNekoImage } from './api.js';

const fetchBreedBtn = document.getElementById('fetchBreedBtn');
const breedSelect = document.getElementById('breedSelect');
const nekoImage = document.getElementById('nekoImage');
const favoriteBtn = document.getElementById('favoriteBtn');
const favoritesContainer = document.getElementById('favoritesContainer');

// An array to hold favorite images 
let favoriteNekos = [];

// Function to render favorite images
function displayFavorites() {
  favoritesContainer.innerHTML = ''; // Clear the container
  favoriteNekos.forEach((url) => {
    const img = document.createElement('img');
    img.src = url;
    favoritesContainer.appendChild(img);
  });
}

// Load favorites from localStorage 
window.onload = () => {
  const storedFavorites = localStorage.getItem('favoriteNekos');
  if (storedFavorites) {
    favoriteNekos = storedFavorites.split(','); // Split the string into an array
    displayFavorites();
  }
};

// Add event listener to fetch button for breed selection
fetchBreedBtn.addEventListener('click', async () => {
  try {
    const selectedBreed = breedSelect.value;
    const imageUrl = await fetchNekoImage(selectedBreed);
    
    nekoImage.src = imageUrl;
    nekoImage.style.display = 'block';  // Show the image after fetching
    favoriteBtn.style.display = 'block'; // Show the favorite button
  } catch (error) {
    alert('Failed to fetch the Neko image.');
  }
});

// Add the image to favorites when "Favorite" button is clicked
favoriteBtn.addEventListener('click', () => {
  const currentImageUrl = nekoImage.src;
  if (!favoriteNekos.includes(currentImageUrl)) {
    favoriteNekos.push(currentImageUrl);
    
    // Save the favorites to localStorage
    localStorage.setItem('favoriteNekos', favoriteNekos.join(',')); // Join the array into a string
    
    displayFavorites();
  }
});



