import React from "react";
import { Text, View } from "react-native";
import { style } from "./styles";
import WelcomeActionButton from "../../../components/WelcomeActionButton";

const WelcomeScreen = () => {
   return (
     <View style={style.mainContainer}>
        <View style={style.welocomeTextContainer}>
            <Text style={style.textStyle}>
                Welcome 
            </Text>
            <Text style={style.textStyle}>
                Find Your Interest
            </Text>
        </View>
        <View style={style.welcomeActionSection}>
            <View style={style.buttonSection}>
            <WelcomeActionButton text="Continue with Google" />
            </View>
            <View style={style.buttonSection}>
            <WelcomeActionButton text="Use Mobile No" />
            </View>
        </View>
     </View>
   )
}

export default WelcomeScreen;