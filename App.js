import React ,{useState } from 'react'; 
import SignIn from './screens/SignIn'; 
 
import SignUp from './screens/SignUp'; 
import {View } from 'react-native'; 
import Reset from "./screens/Reset"; 
import TodoList from "./screens/ToDo"; 
 
export default function AppProject (){ 
  const [currentScreen ,setCurrentScreen ]=useState ('SignIn'); 
 
  const renderScreen =()=>{ 
    switch (currentScreen ){ 
      case 'SignIn': 
        return <SignIn onNavigateSignUp ={()=>setCurrentScreen ('SignUp')}onNavigateResetPassword ={()=>setCurrentScreen ("Reset")}/>; 
      case 'SignUp': 
        return <SignUp onNavigateSignIn ={() => setCurrentScreen ('SignIn')} />; 
        case 'Reset': 
        return <Reset onNavigateReset ={()=>setCurrentScreen ('SignUp')}/>; 
        default: 
        return null ; 
    } 
  }; 
  return ( 
    <View style={{ flex: 1 }}> 
      {renderScreen ()} 
    </View > 
  ); 
} 