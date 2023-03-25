import React from "react";
import {View,Text} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./src/Components/BottomTabs";
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';




const App=()=>
{
  return(
    <Provider store={Store}>
   <SafeAreaProvider style={{flex:1, backgroundColor:"#fff"}}>
    <NavigationContainer>
<BottomTabs/>
    </NavigationContainer>
   </SafeAreaProvider>
    </Provider>
   
    )
}

export default App;
