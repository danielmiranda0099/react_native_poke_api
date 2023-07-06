import { FlatList, StyleSheet, Text } from 'react-native'

export function PokemonList({pokemons}) {
  return (
   <FlatList  
    data={pokemons}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    keyExtractor={(pokemon) => String(pokemon.id)}
    renderItem={({item}) => <Text style={styles.text}>{item.name}</Text>}
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