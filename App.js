import React from "react";
import { StyleSheet, View } from "react-native";
import Rotation from "./animations/Rotation";
import SequenceAnimations from "./animations/SequenceAnimations";

function App(props) {
  return (
    <View style={styles.container}>
      {/* <Rotation /> */}
      <SequenceAnimations />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
