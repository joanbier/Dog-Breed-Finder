interface Props {
  dogList: string[];
  allDogBreeds: string[];
}

export default function Spinner({ dogList, allDogBreeds }: Props) {
  return dogList.length === 0 && allDogBreeds ? (
    <p className="spinner-info">Can't find breed :(</p>
  ) : (
    <p className="spinner-info">Loading...</p>
  );
}
