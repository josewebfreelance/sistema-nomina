import {FormikValues} from "formik";
import {FormLayout} from "../../../layout/FormLayout.tsx";
import {CustomInputText} from "../../../components/form";
import {employeeValidationSchema} from "./validations/employeeValidationSchema.ts";
import {useDepartmentStore} from "../../../hooks";

export const EmployeeForm = () => {


    const {
        depCodigo,
        depNombre = '',
        depDescripcion = '',
        saveOrUpdate,
        cleanForm
    } = useDepartmentStore();

    const onClean = () => {
        cleanForm();
    }

    const onSubmit = async (values: FormikValues) => {
        saveOrUpdate({...values, depCodigo});
    }


    return (
        <FormLayout
            update={depCodigo}
            onSubmit={onSubmit}
            initialValues={{depNombre, depDescripcion}}
            validationSchema={employeeValidationSchema}
            onClean={onClean}
        >
            <CustomInputText label={'Nombre'} name={'depNombre'}/>
            <CustomInputText label={'Descripcion'} name={'depDescripcion'}/>
        </FormLayout>
    )
}
