import { Component } from "react";
import {
  Animated,
  PanResponder,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default class Rotation extends Component {
  constructor(props) {
    super(props);

    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1200,
    }).start();
  }

  render() {
    const interpolatedRotate = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.box,
            {
              transform: [
                {
                  rotate: interpolatedRotate,
                },
              ],
            },
          ]}
        >
          <Pressable
            onPress={() => {
              Animated.timing(this.animatedValue, {
                toValue: 0,
                duration: 1200,
              }).start();
              setTimeout(() => this.animatedValue.setValue(1), 1200);
            }}
          >
            <Text style={{ color: "white" }}>Drag Me</Text>
          </Pressable>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "dodgerblue",
    width: 150,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
