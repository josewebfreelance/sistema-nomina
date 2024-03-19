import {useField} from "formik";
import {Grid, TextField} from "@mui/material";

interface Props {
	label: string;
	name: string;
	type?: 'text' | 'email' | 'password';
	placeholder?: string;
	xs?: number;
	[x: string]: any;
}

export const CustomInputText = ({ xs = 6, ...props }: Props) => {

	const [field, meta] = useField(props);


	return (
		<Grid item xs={xs}>
			<TextField
				{...field}
				{...props}
				error={meta.touched && meta.error}
				id="outlined-error-helper-text"
				helperText={meta.touched && meta.error ? meta.error : ''}
				fullWidth
			>

			</TextField>
		</Grid>
	)
}
