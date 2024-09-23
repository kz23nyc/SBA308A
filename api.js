

export async function fetchNekoImage(breed = 'random') {
    try {
      // Modify the URL to fetch based on breed if it's not 'random'
      const apiUrl = breed === 'random' 
        ? 'https://nekos.best/api/v2/neko' 
        : `https://nekos.best/api/v2/neko/${breed}`;
        
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data.results[0].url;  // Return the image URL
    } catch (error) {
      console.error('Error fetching Neko image:', error);
      throw error;
    }
  }
  