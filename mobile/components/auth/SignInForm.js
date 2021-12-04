import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import { TextInputField } from '../shared/FormFields';
import { signInValidationRules } from '../../validation/auth';
import $t from 'i18n';
import ErrorText from '../shared/Text/ErrorText';
import { Input, Text } from 'react-native-magnus';

export const SignInForm = ({ onSubmit, signInError }) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={onSubmit}
    validationSchema={signInValidationRules}
  >
    {({ handleSubmit }) => (
      <View>
        <TouchableOpacity onPress={handleSubmit}>
          <Text fontSize="4xl" textAlign="center" mb="xl">{$t('auth.signIn')}</Text>
        </TouchableOpacity>
        <Input
          mb="xl"
          rounded="2xl" 
          name="email"
          component={TextInputField}
          placeholder={$t('auth.enterEmail')}
        />
        <Input
          rounded="2xl"
          name="password"
          component={TextInputField}
          secureTextEntry
          placeholder={$t('auth.enterPassword')}
        />
        <ErrorText
          error={!!signInError}
          message={$t('auth.invalidCredentials')}
        />
      </View>
    )}
  </Formik>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func,
  signInError: PropTypes.bool
};
