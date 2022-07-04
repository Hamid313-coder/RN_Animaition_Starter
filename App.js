import React from "react";
import { StyleSheet, View } from "react-native";
import FlipAnimation from "./animations/FlipAnimation";
import ParallelAnimation from "./animations/ParallelAnimation";
import Rotation from "./animations/Rotation";
import SequenceAnimations from "./animations/SequenceAnimations";
import StaggeredAnimation from "./animations/StaggeredAnimation";

function App(props) {
  return (
    <View style={styles.container}>
      {/* <Rotation /> */}
      {/* <SequenceAnimations /> */}
      {/* <StaggeredAnimation /> */}
      {/* <ParallelAnimation /> */}
      <FlipAnimation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
