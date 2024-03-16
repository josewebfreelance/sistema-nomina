import {NavLink, Route, Routes} from "react-router-dom";
import {routes} from "./routes.ts";
import {Box} from "@mui/material";

export const AdministrationRoutes = () => {
	return (
		<Box>
			<Routes>
				{
					routes.map(({Component, path}) => (
						<Route
							key={path}
							path={path}
							element={<Component />}
						/>
					))
				}
			</Routes>
		</Box>
	)
}

export default AdministrationRoutes;
