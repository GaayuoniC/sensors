import Svg, { Path } from "react-native-svg";
import { Text, View, StyleSheet } from "react-native";
import { Circle, Rect } from "react-native-svg";
import { useState } from "react";

export function CircleLayout() {
  const [moveBall, setMoveBall] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  // console.log(moveBall);

  const CONFIG = {
    ballHeight: 150,
    ballWidth: 150,
  };

  // console.log("check out", allTouches);

  return (
    <View
      style={[
        styles.container,
        // { position: "fixed", bottom: "40%", left: 50 },
      ]}
      onLayout={({ nativeEvent }) => {
        setMoveBall({
          x: nativeEvent.layout.width / 2,
          y: nativeEvent.layout.height / 2,
        });
        // console.log(nativeEvent);
      }}
    >
      <Svg
        width={CONFIG.ballWidth}
        height={CONFIG.ballHeight}
        // viewBox="0 0 100 100"
        style={{
          position: "absolute",
          left: Math.round(moveBall.x - CONFIG.ballWidth / 2),
          top: Math.round(moveBall.y - CONFIG.ballHeight / 2),
          // top: location.height / 2,
          // left: location.width / 2,
          transform: [{ scale: scale }],
        }}
      >
        <Circle
          cx="50"
          cy="50"
          r="45"
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
    // backgroundColor: "#8AF5FF",
    width: "100%",
    height: "100%",
  },
});
