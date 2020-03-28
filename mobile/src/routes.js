import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const AppStack = createStackNavigator();

import Incidents from "./pages/Incidents";
import Detail from "./pages/Detail";

export default function Routes() {
  return(
    <NavigationContainer>
      
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Incidents" component={Incidents} />
        <AppStack.Screen name="Detail" component={Detail} />
      </AppStack.Navigator>
    
    </NavigationContainer> 

  );
}




// NativationContainer e AppStack.Navigator têm 
//obrigatoriamente que vir por volta das Rotas

// Toda vez que for utilizar sintaxe JSX, é preciso
// importar o React from "react".