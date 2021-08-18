import React, { ChangeEvent } from "react";

interface Props {
  setDogList: (value: string[]) => void;
  allDogBreeds: string[];
}

export default function SearchBox({ setDogList, allDogBreeds }: Props) {
  const searchBreed = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value.toLowerCase();
    const filteredDogList: string[] = allDogBreeds.filter((item) =>
      item.toLowerCase().includes(value)
    );
    setDogList(filteredDogList);
  };

  return (
    <form className="searchbox-form">
      <label className="searchbox-form-label">Search the breed</label>
      <input
        className="searchbox-form-input"
        placeholder="Terrier..."
        onChange={searchBreed}
        type="text"
      />
    </form>
  );
}
