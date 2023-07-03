import { createStackNavigator } from "@react-navigation/stack";
import { PokedexView, PokemonView } from "../views";

const Stack = createStackNavigator();

export function PokedexNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexView}
        options={{
          headerTitle: "Pokedex",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonView}
        options={{
          headerTitle: "Pokemon",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
