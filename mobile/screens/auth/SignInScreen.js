import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Text } from 'react-native-magnus';
import $t from 'i18n';

import { SignInForm } from '../../components/auth/SignInForm';
import { login, facebookLogin, googleLogin } from '../../store/auth';
import { signInErrorSelector } from '../../store/error';

const SignInScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogin = useCallback(data => dispatch(login(data)));
  const handleFacebookLogin = data => dispatch(facebookLogin(data));
  const handleGoogleLogin = data => dispatch(googleLogin(data));

  const signInError = useSelector(signInErrorSelector());

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const goToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid>
        <SignInForm onSubmit={handleLogin} signInError={signInError} />

        <Button onPress={handleFacebookLogin}>
          <Text>Forgot password</Text>
        </Button>
        <Button onPress={handleGoogleLogin}>
          <Text>Sign in with Google!</Text>
        </Button>
        <Button onPress={goToSignUp}>
          <Text>Sign up!</Text>
        </Button>
        <Button onPress={goToForgotPassword}>
          <Text>Forgot password</Text>
        </Button>
      </KeyboardAwareScrollView>
    </View>
  );
};

SignInScreen.propTypes = {
  navigation: PropTypes.object
};

SignInScreen.navigationOptions = {
  title: $t('auth.signIn')
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
