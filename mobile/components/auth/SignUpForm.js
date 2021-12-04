import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';

import { TextInputField } from '../shared/FormFields';
import { signUpValidationRules } from '../../validation/auth';
import $t from 'i18n';
import ErrorText from '../shared/Text/ErrorText';
import { Input,Text , Checkbox,Div} from 'react-native-magnus';

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
          <Text fontSize="4xl" textAlign="center" mb="xl">{$t('auth.signUp')}</Text>
        </TouchableOpacity>
   
        <Field name="first_name" 
        >
          {({ field, form }) => <Input {...form} placeholder={$t('auth.enterFirstName')} {...inputStyle} />}
        </Field>
        <Field name="last_name">
          {({ field, form }) => <Input {...form}  placeholder={$t('auth.enterLastName')} {...inputStyle} />}
        </Field>
        <Field name="email" >
          {({ field, form }) => <Input {...form}  placeholder={$t('auth.enterEmail')} {...inputStyle} />}
        </Field>
        <Field name="password" >
          {({ field, form }) => <Input {...form} secureTextEntry placeholder={$t('auth.enterPassword')} {...inputStyle} />}
        </Field>
      
        <Checkbox flexDir="row-reverse" value={1} prefix={<Text textAlign="right">Согласен с правилами сервиса</Text>} />

    
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

export const textStyle = {
  fontSize: 14,
}