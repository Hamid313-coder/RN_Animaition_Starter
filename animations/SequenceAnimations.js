import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

function SequenceAnimations(props) {
  const animatedValue1 = useRef(new Animated.Value(0)).current;
  const animatedValue2 = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animatedValue1, {
        toValue: 150,
        duration: 1000,
      }),
      Animated.spring(animatedValue2, {
        toValue: 2,
        duration: 1000,
      }),
      Animated.timing(animatedValue1, {
        toValue: 0,
        duration: 1000,
      }),
      Animated.spring(animatedValue2, {
        toValue: 0.5,
        duration: 1000,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              { translateY: animatedValue1 },
              { scale: animatedValue2 },
            ],
          },
        ]}
      >
        <Text style={{ color: "white" }}>hello</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 150,
    height: 90,
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SequenceAnimations;
