import React from 'react';
import { DogProfile } from './src/view/DogProfile.js';
import { Header } from './src/section/Header.js';
import { View } from 'react-native';

export default function App() {
  return (
    <View>
      <Header />
      <DogProfile />
    </View>
  );
}
