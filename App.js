import { StatusBar } from "expo-status-bar";
import { ImageViewer } from "./components/ImageViewer";
import {
  StyleSheet,
  Text,
  View,
  Image,
  PermissionsAndroid,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Circle } from "react-native-svg";
import {
  Accelerometer,
  Barometer,
  DeviceMotion,
  Gyroscope,
  LightSensor,
  Magnetometer,
  MagnetometerUncalibrated,
  Pedometer,
} from "expo-sensors";
import { Sensor } from "./components/Sensor";
import { useEffect } from "react";
import { getPermissionsAsync } from "expo-sensors/build/Pedometer";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />

      <View>
        <Sensor />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "yellow",
    // alignItems: "center",
    // justifyContent: "center",s
    // width: "100%",
  },
});
