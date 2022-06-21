import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";

const { height } = Dimensions.get("window");
function StaggeredAnimation(props) {
  const animatedValue1 = useRef(new Animated.Value(0)).current;
  const animatedValue2 = useRef(new Animated.Value(0)).current;
  const animatedValue3 = useRef(new Animated.Value(0)).current;

  const animatedStyle1 = { height: animatedValue1 };
  const animatedStyle2 = { height: animatedValue2, backgroundColor: "orange" };
  const animatedStyle3 = { height: animatedValue3, backgroundColor: "teal" };

  useEffect(() => {
    Animated.stagger(300, [
      Animated.timing(animatedValue1, {
        toValue: height,
        duration: 1000,
      }),
      Animated.timing(animatedValue2, {
        toValue: height,
        duration: 2000,
      }),
      Animated.timing(animatedValue3, {
        toValue: 600,
        duration: 300,
      }),
    ]).start();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle1]} />
      <Animated.View style={[styles.box, animatedStyle2]} />
      <Animated.View style={[styles.box, animatedStyle3]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  box: {
    width: 120,
    height: 90,
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StaggeredAnimation;
