import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from 'components/Input/Input'
import Button from 'components/Button/Button'
import { LoginFormWrapper, TitleForm, InputForm } from './styles'
import { LOGIN_FORM_NAMES, LoginFormValues } from './types';

function LoginForm() {
  const scheme = Yup.object().shape({
    [LOGIN_FORM_NAMES.EMAIL]: Yup.string().required('Field email required').email('Field type email'),
    [LOGIN_FORM_NAMES.PASSWORD]: Yup.number().required('Field password required').typeError("Password must be number")
  })

  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_NAMES.EMAIL]: '',
      [LOGIN_FORM_NAMES.PASSWORD]: ''
    } as LoginFormValues,
    validationSchema: scheme,
    onSubmit: (values: LoginFormValues) => {
      console.log(values);
      
    }
  })
  console.log(formik);
  
  return (
    <LoginFormWrapper>
      <TitleForm>Login form</TitleForm>
      <InputForm>
      <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          value={formik.values[LOGIN_FORM_NAMES.EMAIL]}
          onChange={formik.handleChange} error={formik.errors[LOGIN_FORM_NAMES.EMAIL]}
            
        />
      <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={formik.values[LOGIN_FORM_NAMES.PASSWORD]}
          onChange={formik.handleChange} error={formik.errors[LOGIN_FORM_NAMES.PASSWORD]}      />
      </InputForm>
      <Button name="Login" type='submit'/>
    </LoginFormWrapper>
  )
}

export default LoginForm;
