import { StyleSheet, Image } from "react-native";

export function ImageViewer({ placeholderImageSource }) {
  return <Image source={placeholderImageSource} style={StyleSheet.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: "70%",
    height: "70%",
    borderRadius: 18,
    // backgroundColor: "white",
  },
});
