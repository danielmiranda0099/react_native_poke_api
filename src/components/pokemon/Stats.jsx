import { StyleSheet, Text, View } from "react-native";

export function Stats({ stats }) {

  const barStyle = (num) => {
    let color;

    if (num <= 25) {
      color = "#ff3e3e";
    } else if (num > 25 && num < 50) {
      color = "#F08700";
    } else if (num >= 50 && num < 75) {
      color = "#EFCA08";
    } else if (num >= 75) {
      color = "#6EEB83";
    }
    return {
      backgroundColor: color,
      width: `${num}%`,
    }
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>

      {stats.map((item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{item.stat.name}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyle(item.base_stat)]} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 70,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 13,
    color: "#6b6b6b",
    textTransform: "capitalize",
  },
  blockInfo: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    width: '12%',
    fontSize: 13,
  },
  bgBar: {
    backgroundColor: '#dadada',
    width: '88%',
    height: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bar: {
    // <backgroundColor: '#F47C98',
    // width: '100%',>
    height: 5,
  },
});









