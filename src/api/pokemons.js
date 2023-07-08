import { API_URL } from '@env';

export async function getPokemons(endPointUrl) {
  try {
    console.log(endPointUrl);
    const url = `${API_URL}/pokemon?limit=20&offset=0`;
    const response = await fetch( endPointUrl || url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('error en getPokemon', error);
  }
}

export async function getPokemonByUrl(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error en getPokemonById", error);
  }
}

export async function getPokemonById(id) {
  try {
    const url = `${API_URL}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Error en getPokemonById()", error);
  }
}