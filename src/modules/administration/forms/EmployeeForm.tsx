import {MenuItem} from "@mui/material";
import {FormikValues} from "formik";
import {FormLayout} from "../../../layout/FormLayout.tsx";
import {CustomInputText, CustomSelect} from "../../../components/form";
import {employeeValidationSchema} from "./validations/employeeValidationSchema.ts";

export const EmployeeForm = () => {

    const onSubmit = async (values: FormikValues) => {
        console.log(values);
    }

    return (
        <FormLayout
            onSubmit={onSubmit}
            initialValues={{
                name: '',
                lastName: '',
                department: null
            }}
            validationSchema={employeeValidationSchema}
        >
            <CustomInputText label={'Nombre'} name={'name'}/>
            <CustomInputText label={'Apellido'} name={'lastName'}/>
            <CustomSelect label={'Departamento'} name={'department'}>
                <MenuItem value={1}>Ventas</MenuItem>
                <MenuItem value={2}>Operativo</MenuItem>
            </CustomSelect>
        </FormLayout>
    )
}
