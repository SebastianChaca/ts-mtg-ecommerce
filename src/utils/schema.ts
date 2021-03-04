import * as yup from 'yup';
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

export const schema = (isLoginMode: boolean) => {
  return yup.object().shape({
    firstName: isLoginMode
      ? yup.string()
      : yup
          .string()
          .required('Ingrese un nombre')
          .matches(/^([^0-9]*)$/, 'El nombre no debe contener numeros'),
    lastName: isLoginMode
      ? yup.string()
      : yup
          .string()
          .required('Ingrese un apellido')
          .matches(/^([^0-9]*)$/, 'El apellido no debe contener numeros'),
    username: isLoginMode
      ? yup.string()
      : yup.string().required('Ingrese su nombre de usuario'),
    email: isLoginMode
      ? yup.string()
      : yup
          .string()
          .email('Ingrese un email valido')
          .required('Ingrese un email'),
    password: yup
      .string()
      .matches(uppercaseRegex, 'one uppercase required!')
      .matches(numericRegex, 'one number required!')
      .required('Ingrese una contraseña')
      .min(6, 'El minimo son 6 caracteres'),
    confirmPassword: isLoginMode
      ? yup.string()
      : yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
  });
};
