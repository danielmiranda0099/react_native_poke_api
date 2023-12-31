import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { getColorByPokemonType } from "../../utils";

export function Header({name, order, image, type}) {
  const color = getColorByPokemonType(type);

  const bgStyle = {backgroundColor: color, ...styles.bg};

  return (
    <>
      <View style={bgStyle} />

      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.textName}>{name}</Text>
          <Text style={styles.textName}>#{`${order}`.padStart(3,0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{uri: image}}  style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: 400,
    position: 'absolute',
    borderBottomEndRadius: 400,
    borderBottomLeftRadius: 400,
    transform: [{scaleX: 1.6}],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
  },
  textName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 27,
    textTransform: 'capitalize',
  },
  contentImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'contain',
  }
})
