import {NavLink, Route, Routes} from "react-router-dom";
import {routes} from "./routes.ts";

export const AdministrationRoutes = () => {
	return (
		<div>
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
		</div>
	)
}

export default AdministrationRoutes;
