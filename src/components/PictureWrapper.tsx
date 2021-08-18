import { fetchImageByBreed } from "../api";
import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

interface Props {
  currentBreed: string;
}

export default function PictureWrapper({ currentBreed }: Props) {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchImageByBreed(setImages, currentBreed, setError, setLoading);
  }, [currentBreed]);

  const imagesSlider = [
    {
      original: images[0],
      thumbnail: images[0]
    },
    {
      original: images[1],
      thumbnail: images[1]
    },
    {
      original: images[2],
      thumbnail: images[2]
    }
  ];

  const loaderImage = [
    {
      original: "assets/loading.gif"
    }
  ];

  return (
    <section className="images-cointainer">
      <h2 className="breed-title">{currentBreed}</h2>
      {error && <p>nie udało się załadować zdjęcia :(</p>}
      {isLoading ? (
        <ImageGallery
          showThumbnails={false}
          showPlayButton={false}
          items={loaderImage}
        />
      ) : (
        <ImageGallery items={imagesSlider} showBullets={true} />
      )}
    </section>
  );
}
