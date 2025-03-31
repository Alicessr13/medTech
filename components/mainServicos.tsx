import { Image, StyleSheet, Platform, View, ScrollView, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import Footer from './footer';

export default function MainServicos() {
  const [fontsLoaded] = useFonts({
    'OpenSans': require('../assets/fonts/OpenSans-VariableFont.ttf'),
    'DMSerif': require('../assets/fonts/DMSerifDisplay-Regular.ttf'),
  });
  return (
    <>
      <ScrollView>
        
        
        
        <Footer/>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'DMSerif',
  },
  content: {
    fontFamily: 'OpenSans',
  },
});
