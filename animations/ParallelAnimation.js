import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";

function ParallelAnimation(props) {
  const animatedValue1 = useRef(new Animated.Value(600)).current;
  const animatedValue2 = useRef(new Animated.Value(0)).current;

  const animatedStyle1 = {
    transform: [{ translateY: animatedValue1 }, { translateX: animatedValue2 }],
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedValue1, {
        toValue: 0,
        duration: 500,
      }),
      Animated.timing(animatedValue2, {
        toValue: 200,
        duration: 500,
      }),
    ]).start();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle1]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // alignItems: "flex-end",
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

export default ParallelAnimation;
