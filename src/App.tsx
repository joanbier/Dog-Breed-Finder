import React, { useState, useEffect } from "react";
import "./styles/styles.scss";
import IntroPage from "./components/IntroPage";
import MainPage from "./components/MainPage";
import { fetchAllBreedsList } from "./api";

export default function App() {
  const [allDogBreeds, setAllDogBreeds] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchAllBreedsList(setAllDogBreeds, setError);
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <IntroPage />
      ) : (
        <MainPage allDogBreeds={allDogBreeds} error={error} />
      )}
    </div>
  );
}
