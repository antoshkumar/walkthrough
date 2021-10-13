import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 import onBoarding from './components/onBoarding';
 import MyApp from './components/MyApp';
 import AsyncStorage from '@react-native-async-storage/async-storage';

 const Stack = createStackNavigator();

const App=()=> {
  const [isFirstLaunch, setIsFirstLaunch]=React.useState(null);
  useEffect(()=>{
    AsyncStorage.getItem('alreadyLaunched').then(value =>{
      if(value==null){
        AsyncStorage.setItem('alreadyLaunched','true');
        setIsFirstLaunch(true);
      }
      else{
        setIsFirstLaunch(false);
      }
    })
  },[]);


   if(isFirstLaunch==null){
     console.log('if part=',isFirstLaunch);
      return null;

   }
    else if(isFirstLaunch==true){
      console.log('else if=',isFirstLaunch);
    return(
      <NavigationContainer>
       <Stack.Navigator 
          screenOptions={{
            headerShown: false
          }}
       >
         <Stack.Screen name="signUp" component={onBoarding} />
            <Stack.Screen name="MyApp" component={MyApp} />
       </Stack.Navigator>
      </NavigationContainer>
     );}
     else{
       console.log('else part=',isFirstLaunch);
       return(
         <MyApp />
       );
     }
  }

export default App;

