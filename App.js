import { Component } from "react";
import {
  Animated,
  PanResponder,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 1500,
    }).start();
  }

  render() {
    const interpolatedColor = this.animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: ["rgb(0,0,0)", "rgb(51, 250, 170)"],
    });
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.box,
            {
              backgroundColor: interpolatedColor,
              transform: [
                {
                  translateY: this.animatedValue,
                },
              ],
            },
          ]}
        >
          <Pressable
            onPress={() =>
              Animated.timing(this.animatedValue, {
                toValue: 0,
                duration: 1000,
              }).start()
            }
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
