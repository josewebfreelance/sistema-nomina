import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes.ts";


export const MainApp = () => {
    return (
        <BrowserRouter>
            <div className={'main-layout'}>
                <nav>
                    <ul>
                        <NavLink
                            to={ '/admin/passive' }
                            className={({isActive}) => isActive ? 'nav-active': ''}>
                            { 'Passive' }
                        </NavLink>
                    </ul>
                </nav>

                <Routes>
                    {
                        routes.map(({path, Component}) => (
                            <Route
                                key={path}
                                path={path}
                                element={<Component />}
                            />
                        ))
                    }
                </Routes>
            </div>
        </BrowserRouter>
    )
}
