import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { style } from "./styles";

interface WelcomeActionButtonProps {
   text:String
}
const WelcomeActionButton = ({text}: WelcomeActionButtonProps) => {
    return(
      <View style={style.mainContainer}>
      <TouchableHighlight style={style.touchAbleSection}>
        <Text style={style.textStyle}>{text}</Text>
      </TouchableHighlight>
      </View>
    )
}

export default WelcomeActionButton;