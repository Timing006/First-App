// import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Login } from "./Screens/Login";
import { Position } from "./Screens/Position";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Position />
    </View>
    
  );
}