import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';

import { TextInputField } from '../shared/FormFields';
import { signUpValidationRules } from '../../validation/auth';
import $t from 'i18n';
import ErrorText from '../shared/Text/ErrorText';
import { Input } from 'react-native-magnus';

export const SignUpForm = ({ onSubmit, signUpErrors }) => (
  <Formik
    initialValues={{
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: ''
    }}
    onSubmit={onSubmit}
    validationSchema={signUpValidationRules}
  >
    {({ handleSubmit }) => (
      <View>
        <TouchableOpacity onPress={handleSubmit}>
          <Text fontSize="4xl" textAlign="center" mb="xl" >{$t('auth.signUp')}</Text>
        </TouchableOpacity>

        <Field
          name="first_name"
          component={TextInputField}
          placeholder={$t('auth.enterFirstName')}
        />

        <Field name="last_name" placeholder={$t('auth.enterLastName')}>
          {({ field, form }) => <Input {...form} placeholder="Фамилия" {...inputStyle} />}
        </Field>
        
        <Field name="email" component={TextInputField} placeholder={$t('auth.enterEmail')} />
        <ErrorText error={!!signUpErrors.email} message={signUpErrors.email} />
        <Field
          name="password"
          component={TextInputField}
          secureTextEntry
          placeholder={$t('auth.enterPassword')}
        />
        <Field
          name="confirm_password"
          component={TextInputField}
          secureTextEntry
          placeholder={$t('auth.confirmPassword')}
        />
      </View>
    )}
  </Formik>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
  signUpErrors: PropTypes.object
};

export const inputStyle = {
  rounded: 22,
  mb: 20,
  fontSize: 14,
  h: 43,
};

export const buttonSubmitStyle = {
  rounded: 22,
  mt: 10,
  fontSize: 14,
  h: 43,
  color: "#fff",
  bg: "#000",
  w:169,
  alignSelf: 'center'
}