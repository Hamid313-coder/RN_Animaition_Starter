import React, { useRef } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

function FlipAnimation(props) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  let currentValue;
  animatedValue.addListener(({ value }) => (currentValue = value));
  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const flip = () => {
    console.log(currentValue);
    if (currentValue >= 90) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: 180,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Animated.View
          style={[
            styles.flipCard,
            { transform: [{ rotateX: frontInterpolate }] },
          ]}
        >
          <Text style={styles.text}>This is the front</Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.flipCard,
            styles.flipBackCard,
            {
              transform: [{ rotateX: backInterpolate }],
            },
          ]}
        >
          <Text style={styles.text}>This is the back</Text>
        </Animated.View>
      </View>
      <Pressable onPress={() => flip()}>
        <Text>FLIP</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  flipCard: {
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    width: 220,
    height: 220,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
  },
  flipBackCard: {
    backgroundColor: "red",
    position: "absolute",
    top: 0,
  },
});

export default FlipAnimation;
