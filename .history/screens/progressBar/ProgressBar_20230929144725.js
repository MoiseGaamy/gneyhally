import React from "react";
import { View, StyleSheet } from "react-native";

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%", // Full width
    height: 8,
    backgroundColor: "#E0E0E0", // Background color for the progress bar container
    borderRadius: 70, // Rounded corners
    overflow: "hidden", // Clip the progress within the container
  },
  progressBar: {
    height: "100%", // Full height of the container
    backgroundColor: "#6bcfa9", // Color of the progress
  },
});

export default ProgressBar;
