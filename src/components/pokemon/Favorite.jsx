import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { addPokemonFavoriteAPI, isPokemonFavoriteAPI, removePokemonFavoriteAPI } from "../../api";

export function Favorite({ id }) {
  const [isFavorite, setIsFavorite] = useState(false);
  console.log(isFavorite);

  const addFavorite = async () => {
    await addPokemonFavoriteAPI(id);
    setIsFavorite(true);
    console.log("Añadiendo A Favoritos...", id);
  };

  const removeFavorite = async () => {
    await removePokemonFavoriteAPI(id);
    setIsFavorite(false);
    console.log("removiendo de favoritos");
  }

  const isPokemonFavorite = async () => {
    const response = await  isPokemonFavoriteAPI(id);
    setIsFavorite(response)
  }

  useEffect(() => {
    isPokemonFavorite();
  }, [id])
  

  return (
      <Icon
        name={isFavorite ? "heart" : "heart-o"}
        color="#6B6B6B"
        size={20}
        onPress={isFavorite ? removeFavorite : addFavorite}
        style={{ marginRight: 20 }}
      />
  );
}
