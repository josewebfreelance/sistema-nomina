import * as Yup from 'yup';

export const employeeValidationSchema = Yup.object({
    name: Yup
        .string()
        .max(10, 'El nombre puede ser de 10 cáracteres máximo')
        .required('Nombre es requerido'),
    lastName: Yup
        .string()
        .max(10, 'El apellido puede ser de 10 cáracteres máximo')
        .required('Apellido es requerido'),
    department: Yup
        .number()
        .required('El departamento es requerido')
});
