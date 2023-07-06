import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getPokemonByUrl, getPokemons } from '../api';
import { PokemonList } from '../components';

export function PokedexView() {
  const [pokemons, setPokemons] = useState([]);
  //console.log(JSON.stringify(pokemons, null, 2));

  const getAllPokemons = async () => {
    const response = await getPokemons();
    
    const pokemonsArray = [];
    for await (const pokemon of response.results){
      const pokemonDetail = await getPokemonByUrl(pokemon.url);
      pokemonsArray.push({
        id:pokemonDetail.id,
        name:pokemonDetail.name,
        type:pokemonDetail.types[0].type.name,
        order:pokemonDetail.order,
        image:pokemonDetail.sprites.other["official-artwork"].front_default,
      });
    }
    setPokemons([...pokemons, ...pokemonsArray]);
  }

  useEffect(() => {
    getAllPokemons();
  }, [])

  return (
    <View>
      <PokemonList pokemons={pokemons} />
    </View>
  )
}