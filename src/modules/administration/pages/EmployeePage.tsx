import {Grid} from "@mui/material";
import {ListComponent, TitleComponent} from "../components";
import {useEffect, useState} from "react";
import {EmployeeForm} from "../forms/EmployeeForm.tsx";


const datos = [
    {
        codigo: '1',
        nombre: 'Javier',
        apellido: 'Barahona',
        fechaNacimiento: '564654',
        CUI: '4546546465',
        puesto: 'Desarrollador'
    },
    {
        codigo: '2',
        nombre: 'Karla',
        apellido: 'Lopez',
        fechaNacimiento: '564654',
        CUI: '4546546465',
        puesto: 'QA'
    },
    {
        codigo: '3',
        nombre: 'Karla',
        apellido: 'Lopez',
        fechaNacimiento: '564654',
        CUI: '4546546465',
        puesto: 'QA'
    },
    {
        codigo: '4',
        nombre: 'Karla',
        apellido: 'Lopez',
        fechaNacimiento: '564654',
        CUI: '4546546465',
        puesto: 'QA'
    },

];


export const EmployeePage = () => {
    // Esta implementación no debería de ir, el reducer de cada componente debería regresar los items parseados
    const [items, setItems] = useState([]);
    useEffect(() => {
        const parseItems = datos.map(({nombre, apellido, codigo}) => (
            {
                itemCode: codigo,
                itemPrimaryText: codigo,
                itemSecondaryText: `${nombre} ${apellido}`
            }
        ));
        setItems(parseItems);
    }, []);


    return (
        <>
            <TitleComponent title={'Empleados'}/>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <ListComponent items={items} />
                </Grid>
                <Grid item xs={9}>
                    <EmployeeForm/>
                </Grid>
            </Grid>
        </>
    )
}
