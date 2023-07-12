import { useEffect, useState } from "react";
import { View } from "react-native";
import { getPokemonByUrl, getPokemons } from "../api";
import { PokemonList } from "../components";
import { formattingPokemon } from "../utils";

export function PokedexView() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  //console.log(JSON.stringify(pokemons, null, 2));

  const loadPokemons = async () => {
    const response = await getPokemons(nextUrl);

    setNextUrl(response.next);

    const pokemonsArray = [];
    for await (const pokemon of response.results) {
      const pokemonDetail = await getPokemonByUrl(pokemon.url);
      const pokemonFormated = formattingPokemon(pokemonDetail);
      pokemonsArray.push(pokemonFormated);
    }
    setPokemons([...pokemons, ...pokemonsArray]);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <View>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </View>
  );
}
