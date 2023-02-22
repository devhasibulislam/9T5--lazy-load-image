import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getUnsplashPhotos = async () => {
      const request = await fetch(process.env.REACT_APP_UNSPLASH_URL);
      const response = await request.json();
      setPhotos(response);
    };
    getUnsplashPhotos();
  }, []);

  return (
    <div className="App">
      <div className="container py-5">
        <div class="jumbotron rounded p-5">
          <h1 class="display-4">9T5's Image Gallery</h1>
          <p class="lead">
            This Is My Bootstrap Image Gallery, and a Great Example of the Grid
            System!
          </p>
        </div>

        <hr />

        <div class="row gy-5">
          {photos?.map((photo) => (
            <div key={photo?.id} class="col-lg-4 col-md-6 col-12">
              <LazyLoadImage
                alt={photo?.alt_description}
                src={photo?.urls?.regular}
                height="500px"
                width="300px"
                placeholderSrc="/placeholder.webp"
                className="mw-100"
                style={{objectFit: "cover", objectPosition: "center"}}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
