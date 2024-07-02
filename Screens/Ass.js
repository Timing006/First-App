// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function UI() {
  return (
    <View style={styles.box}>
      <Text style={{ marginTop: 100, fontSize: 30, color: "black" }}>
        Marcel A.U
      </Text>
      <Text>Tel: 01234567890</Text>
      <Text>123 The Street </Text>
      <Text>Abuja, NG </Text>

      <View>
        <Text style={{ fontSize: 26, marginTop: 20 }}>SUMMARY</Text>
        <HorizontalLine></HorizontalLine>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          tempore blanditiis earum nobis quod aliquam magni cum obcaecati,
          aliquid debitis libero consequatur. Excepturi accusantium, in labore
          quae suscipit sed tempora.
        </Text>
      </View>

      <View>
        <Text style={{ fontSize: 26, marginTop: 20 }}>EDUCATION</Text>
        <HorizontalLine></HorizontalLine>
        <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam
      nesciunt cupiditate reiciendis voluptates numquam perferendis, ab ea eos
      veritatis perspiciatis nostrum sunt vitae reprehenderit nisi. Tenetur
      dicta vel dolor.
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 26, marginTop: 20 }}>CAREER</Text>
        <HorizontalLine></HorizontalLine>
        <Text>
        Asperiores,
          tempore blanditiis earum nobis quod aliquam magni cum obcaecati,
          aliquid debitis libero consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Excepturi accusantium, in labore
          quae suscipit sed tempora.
        </Text>
      </View>

      <View>
        <Text style={{ fontSize: 26, marginTop: 20 }}>SKILLS</Text>
        <HorizontalLine></HorizontalLine>
        <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate iste
      officia dignissimos commodi voluptas nesciunt, dolor debitis ullam eum
      minus inventore possimus reprehenderit error magnam veniam perferendis,
      optio tempore quas.</Text>
      </View>
    </View>
  );
}
const HorizontalLine = () => {
  return <View style={styles.line} />;
};
const styles = StyleSheet.create({
  box: {
    backgroundColor: "grey",
    padding: 20,
    margin: 10,
    alignItems: "center",
    // justifyContent: "center",
  },
  line: {
    borderBottomColor: "#000", // Color of the line
    borderBottomWidth: 1, // Thickness of the line
    marginVertical: 10,
  },
});
