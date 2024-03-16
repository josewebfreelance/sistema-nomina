import {routes} from "./routes.ts";
import {Route, Routes} from "react-router-dom";

export const AppRouter = () => {
    return (
        <Routes>
            {
                routes.map(({path, Component}) => (
                    <Route
                        key={path}
                        path={path}
                        element={<Component/>}
                    />
                ))
            }
        </Routes>
    );
}
