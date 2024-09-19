
import { fetchNekoImage } from './api.js';

const fetchNekoBtn = document.getElementById('fetchNekoBtn');
const nekoImage = document.getElementById('nekoImage');

// Add event listener to the button
fetchNekoBtn.addEventListener('click', async () => {
  try {
    const imageUrl = await fetchNekoImage();
    nekoImage.src = imageUrl;
    nekoImage.style.display = 'block';  
    // Show the image after fetching it
  } catch (error) {
    alert('Failed to fetch the Neko image.');
  }
});




