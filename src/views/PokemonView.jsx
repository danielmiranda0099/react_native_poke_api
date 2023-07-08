import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import { getPokemonById } from "../api";
import { Header, Stats, Type } from "../components";

export function PokemonView({ route: { params }, navigation }) {
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async () => {
    try {
      const response = await getPokemonById(params.id);
      //console.log(JSON.stringify(response, null, 2));
      setPokemon(response);
    } catch (error) {
      navigation.goBack();
    }
  };

  useEffect(() => {
    getPokemon();
  }, [params]);

  if (!pokemon) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.id}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />

      <Type types={pokemon.types}/>

      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
