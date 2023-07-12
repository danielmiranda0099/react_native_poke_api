import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { AccountView } from "../views";
import { FavoriteNavigator } from "./FavoriteNavigator";
import { PokedexNavigator } from "./PokedexNavigator";

const Tab = createBottomTabNavigator();

export function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite Container"
        
        component={FavoriteNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
          headerTitleAlign: "center",
        }}
      />

      <Tab.Screen
        name="Pokedex Container"
        component={PokedexNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: () => renderImage(),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountView}
        options={{
          headerTitle: "Cuenta",
          tabBarLabel: "Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
}

function renderImage() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -18 }}
    />
  );
}
