import { StyleSheet, Text, View } from "react-native";
import { getColorByPokemonType } from "../../utils";

export function Type({ types }) {
  return (
    <View style={styles.content}>
      {types.map((item, index) => (
        <View key={index} style={{...styles.pill, backgroundColor: getColorByPokemonType(item.type.name)}}>
          <Text style={styles.textPill}>{item.type.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pill:{
    paddingHorizontal: 3,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  textPill: {
    textTransform: 'capitalize',
  },
});
