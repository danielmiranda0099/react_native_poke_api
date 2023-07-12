import { createStackNavigator } from "@react-navigation/stack";
import { FavoriteView, PokemonView } from "../views";

const Stack = createStackNavigator();

export function FavoriteNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={FavoriteView}
        options={{
          headerTitle: "Favoritos",
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
