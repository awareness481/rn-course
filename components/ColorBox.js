import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, colorText }) => {
  const color = {
    backgroundColor: colorText,
  };

  return (
    <View style={[styles.container, color]}>
      <Text style={styles.text}>
        {colorName}: {colorText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginVertical: 5,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ColorBox;
