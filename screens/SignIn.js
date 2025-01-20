import {Platform ,StyleSheet, View}from 'react-native'; 
import { HelloWave } from '@/components/HelloWave'; 




import ParallaxScrollView from '@/components/ParallaxScrollView'; 
import { ThemedText } from '@/components/ThemedText'; 
import { ThemedView } from '@/components/ThemedView'; 
import {ImageBackground ,Text ,Button ,KeyboardAvoidingView }from "react-native"; 
import AppStyles from "../styles/AppStyles"; 
import {TextInput } from 'react-native-gesture-handler'; 
import React from "react"; 
import InlineTextButton from "../components/InlineTextButton"; 
export default function SignIn ({onNavigateSignUp ,onNavigateResetPassword }){ 
  const background =require ("../assets/background.jpg"); 
  let [username ,setUsername ]=React.useState (""); 
  let [password ,setPassword ]=React.useState (""); 
  return ( 
    <ImageBackground style ={AppStyles.container }source ={background }> 
    <KeyboardAvoidingView style ={AppStyles.backgroundCover }behavior ={Platform .OS ==="ios"?"padding":null   }keyboardVerticalOffset ={80}> 
    <Text style ={[AppStyles.lightText ,AppStyles .header ]}>Sign In </Text > 
    <TextInput placeholder ="Username " 
    placeholderTextColor ={"#BEBEBE"} 
    style ={[AppStyles .lightText ,AppStyles .header ]} 
    value ={username } 
    onChange ={setUsername }/> 
    <TextInput style ={[AppStyles .lightText ,AppStyles .header ]} 
    placeholder ="Password " 
    placeholderTextColor ={"#BEBEBE"} 
    onChangeText ={setPassword } 
    value ={password } 
    secureTextEntry ={true   }/> 
    <Text style ={AppStyles.lightText }>Don't have any account ?</Text ><InlineTextButton text ="Sign Up"onPress ={onNavigateSignUp }/> 
    <Text style ={AppStyles.lightText } >Forgot Password ?</Text ><InlineTextButton text ="Reset "onPress ={onNavigateResetPassword }/> 
     <Button title ="login" color ="#f7b2ad"/></KeyboardAvoidingView > 
    </ImageBackground > 
  ); 
} 