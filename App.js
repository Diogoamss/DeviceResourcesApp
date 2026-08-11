import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ImagePickerComponent from './src/components/ImagePickerComponet';
import ContactsComponent from './src/components/ContactsComponent';
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={style.container }>
      <ImagePickerComponent />

        <ContactsComponent />

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