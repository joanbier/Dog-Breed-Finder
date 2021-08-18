import React, { useState, useEffect } from "react";
import Header from "./Header";
import PictureWrapper from "./PictureWrapper";
import SearchBox from "./SearchBox";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import BreedsListCollection from "./BreedsListCollection";
import Footer from "./Footer";
import smoothscroll from "smoothscroll-polyfill";

interface Props {
  allDogBreeds: string[];
  error: boolean;
}

export default function MainPage({ allDogBreeds, error }: Props) {
  const [dogList, setDogList] = useState<string[]>([]);
  const [currentBreed, setCurrentBreed] = useState<string>("shiba");

  useEffect(() => {
    smoothscroll.polyfill();
    setDogList(allDogBreeds);
  }, [allDogBreeds]);

  return (
    <div className="pattern">
      <Header />
      <PictureWrapper currentBreed={currentBreed} />
      <SearchBox setDogList={setDogList} allDogBreeds={allDogBreeds} />
      {dogList.length ? (
        <BreedsListCollection
          setCurrentBreed={setCurrentBreed}
          dogList={dogList}
        />
      ) : (
        <Spinner dogList={dogList} allDogBreeds={allDogBreeds} />
      )}
      {error && <ErrorMessage />}
      <Footer />
    </div>
  );
}
