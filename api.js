// api.js
export async function fetchNekoImage() {
    try {
      const response = await fetch('https://nekos.best/api/v2/neko');
      const data = await response.json();
      return data.results[0].url;  // Return the image URL
    } catch (error) {
      console.error('Error fetching Neko image:', error);
      throw error;
    }
  }
  