import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors } = route.params;

  return (
    <FlatList
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} colorText={item.hexCode} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
  },
});

export default ColorPalette;
