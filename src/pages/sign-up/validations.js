import * as Yup from 'yup';

export const singUpValidation = Yup.object({
  name: Yup.string().max(15, 'Debe contener menos de 15 caracteres').required('Requerido').min(5),
  lastName: Yup.string()
    .max(15, 'Debe contener menos de 15 caracteres')
    .required('Requerido')
    .min(5),
  email: Yup.string().email().required('Requerido'),
  password: Yup.string().required('Requerido').min(7, 'Debe contener mas de 6 caracteres')
});
