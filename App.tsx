import React from "react"
import { View } from "react-native"
import { MobileValidation, WelcomeScreen } from "./src/pages";
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
     <View>
      <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="MobileValidation" component={MobileValidation} />
       </Stack.Navigator>
      </NavigationContainer>
     </View>
  )
}

export default App;