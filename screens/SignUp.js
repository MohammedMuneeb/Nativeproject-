import {Platform ,StyleSheet ,View }from 'react-native'; 
import {HelloWave } from '@/components/HelloWave'; 




import ParallaxScrollView from '@/components/ParallaxScrollView'; 
import { ThemedText } from '@/components/ThemedText'; 
import { ThemedView } from '@/components/ThemedView'; 
import {ImageBackground ,Text ,Button ,KeyboardAvoidingView }from "react-native"; 
import AppStyles from "../styles/AppStyles"; 
import {TextInput } from 'react-native-gesture-handler'; 
import React from "react"; 
import InlineTextButton from "../components/InlineTextButton"; 
import {getAuth ,createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"; 
import {initializeApp } from "firebase/app"; 
import {auth } from "../firebase"; 
export default function SignUp ({onNavigateSignIn ,onNavigateModalList }){ 
  const background =require ("../assets/background.jpg"); 
  let [username ,setUsername ]=React.useState (""); 
  let [password ,setPassword ]=React.useState (""); 
  let [validationMessage ,setValidationMessage ]=React.useState (""); 
  let [confirmPassword ,setConfirmPassword ]=React.useState (""); 
  let [mobile ,setMobile ]=React.useState (""); 
  let [fingerPrint ,setFingerPrint ]=React.useState (""); 
  let [email ,setEmail ]=React.useState (""); 
  let [code ,setCode ]=React.useState (""); 
  let validateAndSet =(value, valueToCompare, setValue )=>{ 
    if (value !==valueToCompare ){ 
      setValidationMessage ("Passwords do not match."); 
    }else { 
      setValidationMessage (""); 
    } 
    setValue (value ); 
  }; 
  let signUp =()=>{ 
 if (password ===confirmPassword ){createUserWithEmailAndPassword (auth ,email ,password ).then ((userCredential )=>{ 
   
sendEmailVerification (auth.currentUser ); 
 const user = userCredential.user ; 
 sendEmailVerification(auth.currentUser );  
 navigation.navigate ("ToDo", {user :userCredential.user }); 
}).catch ((error )=>{ 
 setValidationMessage (error.message );});} 
 
  } 
  return ( 
    <ImageBackground style ={AppStyles.container }source ={background }> 
    <KeyboardAvoidingView style ={AppStyles.backgroundCover }behavior ={Platform .OS ==="ios"?"padding":null   }keyboardVerticalOffset ={80}> 
    <Text style ={[AppStyles.lightText ,AppStyles .header ]}>Sign Up   </Text > 
    <Text style ={[AppStyles.errorText ]}>{validationMessage }</Text > 
    <TextInput placeholder ="email id " 
    placeholderTextColor ={"#BEBEBE"} 
    style ={[AppStyles .lightText ,AppStyles .header ]} 
    value ={email } 
    onChange ={setEmail }/> 
    <TextInput style ={[AppStyles .lightText ,AppStyles .header ]} 
    placeholder ="Password " 
    placeholderTextColor ={"#BEBEBE"} 
    onChangeText ={(value )=>validateAndSet (value ,confirmPassword ,setPassword )} 
    value ={password } 
    secureTextEntry ={true   }/> 
    <TextInput style ={[AppStyles .lightText ,AppStyles .header ]} 
    placeholder ="Confirm Password " 
    placeholderTextColor ={"#BEBEBE"} 
    onChangeText ={(value )=>validateAndSet (value ,confirmPassword ,setConfirmPassword )} 
    value ={confirmPassword } 
    secureTextEntry ={true   }/> 
    <Text style ={AppStyles.lightText }>Already have any account ?</Text ><InlineTextButton text ="Sign In" 
    onPress ={onNavigateSignIn }/> 
    <Text style ={AppStyles.lightText } >Forgot Password ?</Text ><InlineTextButton text =""/> 
     <Button title ="Sign Up " color ="#f7b2ad"onPress ={signUp }/></KeyboardAvoidingView > 
    </ImageBackground > 
  ); 
} 