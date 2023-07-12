import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Text, View } from "react-native";
import { getPokemonById, getPokemonFavoriteAPI } from "../api";
import { PokemonList } from "../components";
import { useAuth } from "../hooks";
import { formattingPokemon } from "../utils";

export function FavoriteView() {
  const [pokemons, setPokemons] = useState([]);
  console.log(JSON.stringify(pokemons, null, 2));

  const { auth } = useAuth();

  const getFavorites = async () => {
    const response = await getPokemonFavoriteAPI();

    const pokemonsArray = [];
    for await (const pokemon of response) {
      const pokemonDetail = await getPokemonById(pokemon);
      const pokemonFormated = formattingPokemon(pokemonDetail);
      pokemonsArray.push(pokemonFormated);
    }
    
    setPokemons(pokemonsArray);
  };

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        getFavorites();
      }
    }, [auth])
  );

  if (!auth) return <UnregisteredUser />;

  return (
    <View>
      <PokemonList pokemons={pokemons} />
    </View>
  );
}

function UnregisteredUser() {
  return (
    <View>
      <Text>Logeate Para Ver Esto ok</Text>
    </View>
  );
}
