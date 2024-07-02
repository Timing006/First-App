import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

export function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [index, setIndex] = useState(1);
  const [userinfo, setUserInfo] = useState([]);
  // console.log(StatusBar.currentHeight);
  const handleSubmit = () => {
    if (email.length === 0 || name.length === 0) {
      Alert.alert("Message", "Enter your details");
      return null;
    }
    setIndex((prev) => prev + 1);
    function userDetail() {
      const detailsObj = { id: index, userName: name, userEmail: email };
      setUserInfo((prev) => [...prev, detailsObj]);
    }
    userDetail();
    setName("");
    setEmail("");
  };
  const Item = (props) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "50%", borderWidth: 2, padding: 6 }}>
          <Text style={{ textAlign: "center", color: "black" }}>
            {props.name}
          </Text>
        </View>
        <View style={{ width: "50%", borderWidth: 2, padding: 1 }}>
          <Text style={{ textAlign: "center", color: "black" }}>
            {props.email}
          </Text>
        </View>
      </View>
    );
  };
  // function displayAlert() {
  //   Alert.alert("Alert", "Do you want to continue?", [{ text: "Yes" }]);
  // }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Login</Text>
          <Text style={styles.text}>Enter name and email to proceed</Text>

          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={(inp) => setName(inp)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(inp) => setEmail(inp)}
          />
          {/* <Text>{email}</Text> */}

          {/* <Button
            onPress={() => console.log("Button clicked")}
            title="Submit"
          /> */}
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              handleSubmit();
              // displayAlert();
              Keyboard.dismiss();
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Submit
            </Text>
          </TouchableOpacity>
          <FlatList
            horizontal={false}
            data={userinfo}
            renderItem={({ item }) => {
              return <Item name={item.userName} email={item.userEmail} />;
            }}
            style={{ height: "100%" }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight, // Android
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: "gray",
  },
  input: {
    borderWidth: 1,
    borderColor: "green",
    padding: 10,
    marginTop: 10,
    borderRadius: 30,
  },
  btn: {
    backgroundColor: "green",
    padding: 10,
    alignItems: "center",
    borderRadius: 40,
    marginTop: 10,
  },
});
