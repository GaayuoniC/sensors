import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { useState } from "react";
import { DeviceMotion, Accelerometer } from "expo-sensors";
import { useEffect } from "react";
import { getPermissionsAsync } from "expo-sensors/build/Pedometer";

export function Sensor() {
  const [moveBall, setMoveBall] = useState({ x: 0, y: 0 });
  const CONFIG = {
    ballHeight: 150,
    ballWidth: 150,
  };
  const [isAvailable, setIsAvailable] = useState(false);

  const [viewSize, setViewSize] = useState(null);
  useEffect(() => {
    console.log("USed calls");

    async function checkIfMostionCanBeUSed() {
      const permissionResult = await DeviceMotion.getPermissionsAsync();
      console.log(permissionResult);
      if (permissionResult.status === "granted") {
        // setIsAvailable(true)
        const isAvailableResult = await DeviceMotion.isAvailableAsync();
        console.log(isAvailableResult);
        setIsAvailable(isAvailableResult);
      }
    }
    checkIfMostionCanBeUSed();
  }, []);
  const handleDeviceMotion = () => {
    // const newX =
  };

  useEffect(() => {
    if (isAvailable) {
      DeviceMotion.addListener((data) => {
        console.log("data ......", data);
      });
    }
  }, [isAvailable]);
  useEffect(() => {
    let subscription = null;
    if (viewSize) {
      subscription = DeviceMotion.addListener(
        // Destructuring the event parameter:
        // { x: {...}, y: { ... }, rotation: { beta: 12, gamma: 13, somethingElse:34} }
        ({ rotation: { beta, gamma } }) => {
          setMoveBall({ x: viewSize.width / 2, y: viewSize.height / 2 });
        }
      );
    }

    console.log("Listener added");

    return () => {
      if (subscription) subscription.remove();
    };
  }, [viewSize]);

  return (
    <View
      style={[
        styles.container,
        // { position: "fixed", bottom: "40%", left: 50 },
      ]}
      onLayout={({ nativeEvent }) => {
        setViewSize({
          width: nativeEvent.layout.width,
          height: nativeEvent.layout.height,
        });
        console.log(nativeEvent);
      }}
    >
      <Svg
        width={CONFIG.ballWidth}
        height={CONFIG.ballHeight}
        viewBox="0 0 100 100"
        style={{
          position: "absolute",
          left: Math.round(moveBall.x - CONFIG.ballWidth / 2),
          top: Math.round(moveBall.y - CONFIG.ballHeight / 2),
          //   top: location.height / 2,
          //   left: location.width / 2,
          //   transform: [{ scale: scale }],
        }}
      >
        <Circle
          cx="50"
          cy="50"
          r="15"
          stroke="blue"
          strokeWidth="1.5"
          fill="green"
        />
      </Svg>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8AF5FF",
    width: "100%",
    height: "100%",
  },
});
