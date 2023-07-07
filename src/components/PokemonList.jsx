import { FlatList, StyleSheet } from 'react-native'
import { PokemonCard } from './PokemonCard'

export function PokemonList({pokemons}) {
  return (
   <FlatList  
    data={pokemons}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    keyExtractor={(pokemon) => String(pokemon.id)}
    renderItem={({item}) => <PokemonCard pokemon={item} />}
    contentContainerStyle={styles.flatListContentContainer}
   />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  text:{
    display: 'flex',
    flex: 1,
    gap: 3,
    backgroundColor: 'orangered',
  }
})