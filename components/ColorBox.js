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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ColorBox;
