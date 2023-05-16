const fetchImages = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await response.json();
      const imageContainer = document.getElementById("image-container");
      data.forEach((item) => {
        const img = document.createElement("img");
        img.src = item.url;
        imageContainer.appendChild(img);
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  fetchImages();
  