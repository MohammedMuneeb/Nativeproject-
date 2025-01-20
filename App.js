import React ,{useState } from 'react';
import SignIn from './screens/SignIn'; 
 
import SignUp from './screens/SignUp'; 
import {View } from 'react-native'; 
import Reset from "./screens/Reset"; 
import {initializeApp } from "firebase/app"; 
// const firebaseConfig ={ 
//      apiKey :"AIzaSyCRv3Gul_ywEtbJnNfnwYAyu_r_1nsjZvo", 
//      authDomain: "todolistapplication-fd962.firebaseapp.com",
     
//      projectId: "todolistapplication-fd962", 
//      storageBucket: "todolistapplication-fd962.firebasestorage.app", 
//      messagingSenderId: "291919863741", 
//      appId: "1:291919863741:web:cf8746d60926149b517cd4", 
//      measurementId: "G-BSBSPGR6QR" 
//      }; 
//      const app =initializeApp (firebaseConfig ); 
export default function AppProject (){ 
  const [currentScreen ,setCurrentScreen ]=useState ('SignIn'); 
 
  const renderScreen =()=>{ 
    switch (currentScreen ){ 
      case 'SignIn': 
        return <SignIn onNavigateSignUp ={()=>setCurrentScreen ('SignUp')}onNavigateResetPassword ={()=>setCurrentScreen ("Reset")}/>; 
      case 'SignUp': 
        return <SignUp onNavigateSignIn={() => setCurrentScreen('SignIn')} />; 
        case 'Reset': 
        return <Reset onNavigateReset ={()=>setCurrentScreen ('SignUp')}/>; 
        default: 
        return null ; 
    } 
  }; 
  return ( 
    <View style={{ flex: 1 }}> 
      {renderScreen()} 
    </View> 
  ); 
} 