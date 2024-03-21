import {
	Button,
	FormControl, Grid, InputLabel, MenuItem,
	Paper, Select, SelectChangeEvent,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableFooter,
	TableHead,
	TablePagination,
	TableRow, TextField
} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import {Search} from "@mui/icons-material";
import {ChangeEvent, useState} from "react";

function createData(
	name: string,
	calories: number,
	fat: number,
	carbs: number,
	protein: number,
) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];
export const LogPage = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [age, setAge] = useState('');

	const handleChangePage = (
		event: MouseEvent | null,
		newPage: number,
	) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
	};

	return (
		<>
			<Grid container spacing={3} sx={{
				marginBottom: '1rem'
			}}>
				<Grid item xs={3}>
					<FormControl sx={{
						backgroundColor: 'white'
					}}>
						<InputLabel id="demo-simple-select-label">Puesto</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={age}
							label="Puesto"
							onChange={handleChange}
						>
							<MenuItem value={1}>Sistemas</MenuItem>
							<MenuItem value={2}>Finanzas</MenuItem>
							<MenuItem value={3}>Administración</MenuItem>
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={3}>
					<TextField id="outlined-basic" label="Empleado"
							   sx={{
								   backgroundColor: 'white'
							   }}
							   variant="outlined" />
				</Grid>

				<Grid item xs={2} sx={{
					display: 'flex'
				}}>
					<Button sx={{width: '100%'}} variant="contained" endIcon={<Search />}>
						Buscar
					</Button>
				</Grid>

				<Grid item xs={4}></Grid>
			</Grid>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Dessert (100g serving)</TableCell>
							<TableCell align="right">Calories</TableCell>
							<TableCell align="right">Fat&nbsp;(g)</TableCell>
							<TableCell align="right">Carbs&nbsp;(g)</TableCell>
							<TableCell align="right">Protein&nbsp;(g)</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right">{row.calories}</TableCell>
								<TableCell align="right">{row.fat}</TableCell>
								<TableCell align="right">{row.carbs}</TableCell>
								<TableCell align="right">{row.protein}</TableCell>
							</TableRow>
						))}
					</TableBody>

					<TableFooter>
						<TableRow>
							<TablePagination
								rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
								colSpan={3}
								count={rows.length}
								rowsPerPage={rowsPerPage}
								page={page}
								slotProps={{
									select: {
										inputProps: {
											'aria-label': 'rows per page',
										},
										native: true,
									},
								}}
								onPageChange={handleChangePage}
								onRowsPerPageChange={handleChangeRowsPerPage}
								ActionsComponent={TablePaginationActions}
							/>
						</TableRow>
					</TableFooter>
				</Table>
			</TableContainer>
		</>
	)
}
