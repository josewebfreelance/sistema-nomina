import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {PayrollApp} from "./PayrollApp.tsx";
import {AppTheme} from "./theme/AppTheme.tsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Suspense fallback={<></>}>
            <BrowserRouter>
                <PayrollApp/>
            </BrowserRouter>
        </Suspense>
    </React.StrictMode>,
)
