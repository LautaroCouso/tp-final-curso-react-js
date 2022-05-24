import * as Yup from 'yup';

export const newProductsValidation = Yup.object({
  name: Yup.string().min(1, 'Debe contener menos de 2 caracteres').required('Requerido').min(1),
  description: Yup.string()
    .max(150, 'Debe contener máximo de 15 caracteres')
    .required('Requerido')
    .max(150),
  price: Yup.number().min(2, 'Debe contener menos de 1 caracteres').required('Requerido').min(2)
});
