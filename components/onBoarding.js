import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,ScrollView,TextInput,TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';



export default function Registration({navigation}) {
  return (
    <Onboarding
    onSkip={()=> navigation.navigate("MyApp")}
    onDone={()=> navigation.navigate("MyApp")}
    pages={[
      {
        backgroundColor: '#fff',
         image: <Image source={require('../assets/img1.jpg')} />,
        title: 'Onboarding 1',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fff',
         image: <Image source={require('../assets/img2.jpg')} />,
        title: 'Onboarding 2',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fff',
         image: <Image source={require('../assets/img3.jpg')} />,
        title: 'Onboarding 3',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
    ]}
  />
  );
}
