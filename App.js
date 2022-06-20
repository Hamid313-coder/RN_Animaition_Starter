import { Component } from "react";
import { Animated, PanResponder, StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.animatedValue = new Animated.ValueXY();
    this._value = { x: 0, y: 0 };
    this.animatedValue.addListener((value) => (this._value = value));
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.animatedValue.setOffset({
          x: this._value.x,
          y: this._value.y,
        });
        this.animatedValue.setValue({
          x: 0,
          y: 0,
        });
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: this.animatedValue.x, dy: this.animatedValue.y },
      ]),
      onPanResponderRelease: (e, gestureState) => {
        this.animatedValue.flattenOffset();
        Animated.decay(this.animatedValue, {
          useNativeDriver: true,
          deceleration: 0.997,
          velocity: { x: gestureState.vx, y: gestureState.vy },
        }).start();
      },
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.box,
            { transform: this.animatedValue.getTranslateTransform() },
          ]}
          {...this.PanResponder.panHandlers}
        >
          <Text style={{ color: "white" }}>Drag Me</Text>
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
