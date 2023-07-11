import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_STORAGE } from "../utils";


export async function getPokemonFavoriteAPI() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return JSON.parse(response || "[]");
  } catch (error) {
    console.log("error en getPokemonFavoriteAPI()");
  }
}

export async function addPokemonFavoriteAPI(id) {
  try {
    const favorites = await getPokemonFavoriteAPI();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    console.log("error en addPokemonFavoriteAPI()");
  }
}

export async function isPokemonFavoriteAPI(id) {
  try {
    const favorites = await getPokemonFavoriteAPI();
    return favorites.includes(id);
  } catch (error) {
    console.log("error en isPokemonFavoriteAPI()");
  }
}

export async function removePokemonFavoriteAPI(id) {
  try {
    const favorites = await getPokemonFavoriteAPI();
    const newfavorites = favorites.filter( (favoriteId) => favoriteId != id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newfavorites));
  } catch (error) {
    console.log("error en addPokemonFavoriteAPI()");
  }
}