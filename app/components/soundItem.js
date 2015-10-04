import React from "react-native";
import {soundActions} from "../actions";
const {TouchableOpacity, SliderIOS, Image, StyleSheet, Text, View} = React;

export default React.createClass({
  togglePlay() {
    soundActions.togglePlayPause(this.props);
  },
  changeVolume(vol) {
    soundActions.changeVolume(this.props, vol);
  },
  renderSlider() {
    if (!this.props.playing) return;
    return <SliderIOS
      style={styles.slider}
      minimumTrackTintColor="#fff"
      maximumTrackTintColor="#fff"
      onSlidingComplete={vol => this.changeVolume(vol)}
      value={this.props.volume}
    />;
  },
  render() {
    return (
      <View style={[styles.container, this.props.playing && styles.containerPlaying]}>
        <TouchableOpacity onPress={this.togglePlay}>
          <Image style={styles.img} source={{uri: this.props.img}}/>
        </TouchableOpacity>
        <View style={styles.rightContainer}>
          <TouchableOpacity onPress={this.togglePlay}>
          <Text style={[styles.title, this.props.playing && styles.titlePlaying]}>
            {this.props.name}
          </Text>
          </TouchableOpacity>
          {this.renderSlider()}
        </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 1
  },
  containerPlaying: {
    backgroundColor: "#6538B2"
  },
  img: {
    width: 48,
    height: 48,
    margin: 15
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 18,
    marginLeft: 8,
    textAlign: "left"
  },
  titlePlaying: {
    color: "#fff",
    marginBottom: 14
  },
  slider: {
    flex: 1,
    height: 10,
    marginLeft: 8,
    marginRight: 30,
    marginBottom: 8
  }
});
