import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {style} from './styles';
import {StyledText} from '../../../shared/styled-components';
import MobileInputField from '../../../components/mobile-input-field';
import WelcomeActionButton from '../../../components/WelcomeActionButton';
import Icon from 'react-native-vector-icons/AntDesign';
const MobileValidation = () => {
  return (
    <View style={style.mainContainer}>
      <View style={style.headerSection}>
        <Icon name="arrowleft" size={35} color="#ffff" />
      </View>
      <View style={style.textHeaderSection}>
        <View>
          <StyledText fontSize="20px">Enter your mobile number</StyledText>
        </View>
        <View>
          <StyledText fontSize="16px">
            We will send confirmation code to your mobile number
          </StyledText>
        </View>
      </View>
      <SafeAreaView style={style.mobileTextInput}>
        <MobileInputField />
      </SafeAreaView>
      <View style={style.actionSection}>
        <WelcomeActionButton text="Validate" />
      </View>
    </View>
  );
};

export default MobileValidation;
