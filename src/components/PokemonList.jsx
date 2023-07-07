import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { PokemonCard } from "./PokemonCard";

export function PokemonList({ pokemons, loadPokemons, isNext }) {
  const loadMore = () => {
    if (isNext && pokemons.length > 0) {
      console.log("Cargando Mas Pokemons");
      loadPokemons();
    }
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={loadMore}
      onEndReachedThreshold={0.2}
      ListFooterComponent={
        isNext && <ActivityIndicator size={"large"} style={styles.spinner} />
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  text: {
    display: "flex",
    flex: 1,
    gap: 3,
    backgroundColor: "orangered",
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
