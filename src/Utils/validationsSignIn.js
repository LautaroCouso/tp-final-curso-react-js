import * as Yup from 'yup';

export const singInValidation = Yup.object({
  email: Yup.string().email().required('Requerido'),
  password: Yup.string().required('Requerido').min(7, 'Debe contener mas de 6 caracteres')
});
