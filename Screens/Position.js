import { SafeAreaView, StatusBar, View } from "react-native";

export function Position() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Position</Text>
        <View style={style.parent}>
          <View style={style.box}></View>
          <View style={style.box}></View>
          <View style={style.box}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop:StatusBar.currentHeight, },
  parent: {},
  box: {
    width:70,
    height:70,
    backgroundColor: "#71c06b",
    margin:3,
  },
});
