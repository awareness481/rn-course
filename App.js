import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={[styles.container, styles.cyan]}>
        <Text>Cyan: #2aa198</Text>
      </View>
      <View style={[styles.container, styles.blue]}>
        <Text>Blue: #268bd2</Text>
      </View>
      <View style={[styles.container, styles.magenta]}>
        <Text>Magenta: #d33682</Text>
      </View>
      <View style={[styles.container, styles.orange]}>
        <Text>Orange: #cb4b16</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    color: '#fff',
    marginVertical: 5,
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
});

export default App;
