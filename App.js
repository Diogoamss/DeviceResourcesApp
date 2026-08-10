import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaViewBase, Text, View } from 'react-native';
import React from 'react';
import ImagePickerComponent from './src/components/ImagePickerComponet';

const App = () => {
  return (
    <SafeAreaView style={style.container }>
      <ImagePickerComponent />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',

  },
});

export default App;