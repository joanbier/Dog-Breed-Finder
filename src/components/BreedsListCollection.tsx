import React, { MouseEvent } from "react";

interface Props {
  dogList: string[];
  setCurrentBreed: (value: string) => void;
}

export default function BreedsListCollection({
  dogList,
  setCurrentBreed
}: Props) {
  const showPicture = (e: MouseEvent<HTMLButtonElement>): void => {
    const breed: string = e.currentTarget.value;
    setCurrentBreed(breed);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  const getDogs = () => {
    return (
      <section className="breeds-list">
        {dogList.map((breed, index) => {
          return (
            <button
              className="breeds-list-btn"
              value={breed}
              onClick={showPicture}
              key={index}
            >
              {breed}
            </button>
          );
        })}
      </section>
    );
  };

  return dogList.length ? getDogs() : null;
}
