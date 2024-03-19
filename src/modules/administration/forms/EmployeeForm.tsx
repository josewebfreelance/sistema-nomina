import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {Form, Formik, FormikValues} from "formik";
import {FormLayout} from "../layout/FormLayout.tsx";
import {CustomInputText} from "../../../components/form/CustomInputText.tsx";
import {employeeValidationSchema} from "./validations/employeeValidationSchema.ts";
import {CustomSelect} from "../../../components/form";

export const EmployeeForm = () => {

    const onSubmit = async (values: FormikValues) => {
        console.log(values);
    }

    return (
        <FormLayout>
            <Formik
                initialValues={{
                    name: '',
                    lastName: '',
                    department: null
                }}
                onSubmit={onSubmit}
                validationSchema={employeeValidationSchema}
            >
                {
                    _ => (
                        <Form>
                            <Box className={'form-content'}>
                                <Grid container spacing={2}>
                                    <CustomInputText label={'Nombre'} name={'name'} />
                                    <CustomInputText label={'Apellido'} name={'lastName'} />

                                    <CustomSelect label={'Departamento'} name={'department'}>
                                        <MenuItem value={1}>Ventas</MenuItem>
                                        <MenuItem value={2}>Operativo</MenuItem>
                                    </CustomSelect>
                                </Grid>
                            </Box>

                            <Button variant="contained" type="submit" > Guardar </Button>
                        </Form>
                    )
                }
            </Formik>
        </FormLayout>
    )
}
