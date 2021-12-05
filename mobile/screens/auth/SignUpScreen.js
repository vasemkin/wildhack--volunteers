import React, { useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import $t from 'i18n';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Text } from 'react-native-magnus';

import { SignUpForm } from '../../components/auth/SignUpForm';
import { signUp } from '../../store/auth';
import { setSignUpErrors, signUpErrorsSelector } from '../../store/error';
import { buttonSubmitStyle } from '../../components/auth/SignUpForm';
import SwitchTab from '../../components/auth/SwitchTab';


const SignUpScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const handleSignUp = useCallback(data => dispatch(signUp(data)));
  const handleSetSignUpErrors = data => dispatch(setSignUpErrors(data));

  const signUpErrors = useSelector(signUpErrorsSelector());

  const goToSignIn = () => {
    navigation.navigate('SignIn');
  };
  useEffect(() => {
    return () => handleSetSignUpErrors({});
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid>
        <SignUpForm onSubmit={handleSignUp} signUpErrors={signUpErrors} />
        <Button {...buttonSubmitStyle}>
          Отправить
        </Button>
        <SwitchTab
          prompt={'Уже зарегистрированы?'}
          call={'Вход'}
          action={goToSignIn}
          mt="20%"
        />
      </KeyboardAwareScrollView>
    </View>
  );
};
SignUpScreen.navigationOptions = {
  title: $t('auth.signUp')
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding:36,
  }
});
