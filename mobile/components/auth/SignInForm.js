import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Formik,Field } from 'formik';
import PropTypes from 'prop-types';

import { TextInputField } from '../shared/FormFields';
import { signInValidationRules } from '../../validation/auth';
import $t from 'i18n';
import ErrorText from '../shared/Text/ErrorText';
import { Input, Text } from 'react-native-magnus';
import { inputStyle } from './SignUpForm';

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

        <Field name="email" component={TextInputField}>
          {({ form }) => <Input {...form} placeholder={$t('auth.enterEmail')} {...inputStyle} />}
        </Field>

        <Field name="password" component={TextInputField}>
          {({ form }) => <Input {...form}  placeholder={$t('auth.enterPassword')} {...inputStyle} secureTextEntry/>}
        </Field>
   
    
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
