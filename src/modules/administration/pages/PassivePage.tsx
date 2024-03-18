import {Container, Typography} from "@mui/material";
import { TextField, DialogTitle, Grid, List, ListItem, 
		IconButton, ListItemText, Box, Avatar, Pagination, Button, Select, InputLabel, FormControl, MenuItem } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { mainTheme } from '../../../theme/mainTheme';
import { Formik, Form } from "formik";


// TODO: Esta data solo es de ejemplo, está debería venir del controlador
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

export const PassivePage = () => {
	return (
		<Container maxWidth="lg"
		 sx={{
			background: 'white',
			borderRadius: 5,
			paddingY: '20px',
			paddingX: '40px !important',
			height: '100%'
		 }}
		>
			<Title/>
			<GridContainer/>
		</Container>
	)
}

const GridContainer = () => {
	return (
		<Grid container spacing={3} sx={{
			height: '92%'
		}}>
			<Grid item xs={4} sx={{
				padding: 0,
			}}>
				<Lista/>
			</Grid>
			<Grid item xs={8}>
				<Formulario/>
			</Grid>
		</Grid>
	)
}

const Title = () => {
	return (
		<DialogTitle sx={
			{
				color: mainTheme.palette.primary.dark,
				textAlign: "center",
				padding: 0,
				fontSize: '30px',
				mb: '20px',
				fontWeight: 'bold'
			}
		} > Empleado </DialogTitle>
	)
}

const Lista = () => {
	return (
		<Box sx={{
			width: '100%',
			backgroundColor: mainTheme.palette.primary.light,
			display: 'flex',
			justifyContent: 'flex-start',
			alignItems: 'center',
			flexDirection: 'column',
			height: '100%'
		}}>
			<DialogTitle sx={
				{
					color: mainTheme.palette.primary.dark,
					textAlign: "center",
					paddingY: '5px',
					fontSize: '20px',
					fontWeight: 'bold',
				}
			} > Lista de empleados </DialogTitle>
			<TextField 
				id="outlined-basic" 
				label="Código de empleado" 
				variant="outlined" 
				placeholder="Ingrese código de empleado"
				sx={{
					marginY: '20px',
					width: '90%'
				}}/>
			<List sx={{
				padding: 0,
				width: '100%'
			}}>
				{datos.map((value)=> (
					<ListItem key={value.codigo} 
					secondaryAction={
						<IconButton aria-label="Delete" >
						<Delete />
						</IconButton>
					}
					>
						<Avatar sx={{ background: mainTheme.palette.primary.main, mr:'15px'}}>N</Avatar>
						<ListItemText primary={`${value.nombre} ${value.apellido}`} secondary={value.codigo}/>
					</ListItem>
				))}
			</List>
			<Pagination count={10} color="primary" sx={{
				marginY: '10px' 
			}} size="small"/>
		</Box>
	)
}

const Formulario = () => {
	return (
		<Formik
			initialValues={{
				codigo: '500',
				nombre: 'Prueba',
				apellido: 'Desarrollo',
				edad: 15,
				selector: '10'
			}}
			onSubmit={async (values) => {
				console.log("Valores");
			  }}>
			{({values, handleChange}) => (
				<Form>
					<Grid container spacing={2} sx={{
						display: 'flex',
						justifyContent: 'center'
					}}>
						<Grid item xs={6}>
							<TextField 
								id="codigo"
								name="codigo" 
								label="Codigo" 
								variant="outlined" 
								placeholder="Ingrese el codigo" 
								type="number" 
								sx={{
									width: '100%'
								}} 
								value={values.codigo}
								onChange={handleChange}
								/>
						</Grid>
						<Grid item xs={6}>
							<TextField 
								name="nombre" 
								label="Nombre" 
								variant="outlined" 
								placeholder="Ingrese el nombre" 
								type="text"
								sx={{
									width: '100%'
								}}
								value={values.nombre}
								onChange={handleChange}
								/>
						</Grid>
					
						<Grid item xs={6}>
							<TextField 
								name="apellido" 
								label="Apellido" 
								variant="outlined" 
								placeholder="Ingrese el apellido" 
								type="text"
								sx={{
									width: '100%'
								}}
								value={values.apellido}
								onChange={handleChange}
								/>
						</Grid>
		
						<Grid item xs={6}>
							<TextField 
								name="edad" 
								label="Edad" 
								variant="outlined" 
								placeholder="Ingrese la edad" 
								type="number"
								sx={{
									width: '100%'
								}}
								value={values.edad}
								onChange={handleChange}
								/>
						</Grid>
		
						<Grid item xs={6}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Age</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={values.selector}
								label="Age"
								onChange={handleChange}
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							</FormControl>
						</Grid>
					</Grid>
					<Box sx={{
						display: 'flex',
						justifyContent: 'center'
					}}>
						<Button variant="contained" sx={{
							marginY: '20px',
						}} type="submit" >Guardar</Button>
					</Box>
				</Form>
			)}
		</Formik>
		
	)
}