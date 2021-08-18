const fetchAllBreedsList = async (
  setDogList: (value: string[]) => void,
  setError: (value: boolean) => void
): Promise<void> => {
  try {
    const resp = await fetch("https://dog.ceo/api/breeds/list/all");
    if (resp.ok) {
      const data = await resp.json();
      const breedsList = data.message;
      const allBreedsList: string[] = [];

      for (const breed in breedsList) {
        if (breedsList[breed].length === 0) {
          allBreedsList.push(breed);
        } else {
          for (const subBreed of breedsList[breed]) {
            const fullBreed: string = `${breed}/${subBreed}`;
            allBreedsList.push(fullBreed);
          }
        }
      }
      setDogList(allBreedsList);
    } else {
      setError(true);
      throw Error("Can't fetch breed list");
    }
  } catch (err) {
    setError(true);
    console.log(err.message);
  }
};

const fetchImageByBreed = async (
  setImages: (value: string[]) => void,
  currentBreed: string,
  setError: (value: boolean) => void,
  setLoading: (value: boolean) => void
): Promise<void> => {
  try {
    setLoading(true);
    const resp = await fetch(
      `https://dog.ceo/api/breed/${currentBreed}/images/random/3`
    );
    if (resp.ok) {
      const data = await resp.json();
      setImages(data.message);
      setLoading(false);
    } else {
      setError(true);
      throw Error("Can't fetch dog images");
    }
  } catch (err) {
    setError(true);
    console.log(err.message);
  }
};

export { fetchAllBreedsList, fetchImageByBreed };
