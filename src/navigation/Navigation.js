import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountView, FavoriteView, PokedexView } from '../views';

const Tab = createBottomTabNavigator();


export function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Account" component={AccountView} />
      <Tab.Screen name="Favorite" component={FavoriteView} />
      <Tab.Screen name="Pokedex" component={PokedexView} />
    </Tab.Navigator>
  )
}