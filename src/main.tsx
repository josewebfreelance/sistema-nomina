import React from 'react'
import ReactDOM from 'react-dom/client'
import {MainApp} from "./MainApp.tsx";
import {AppTheme} from "./theme/AppTheme.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppTheme>
            <MainApp/>
        </AppTheme>
    </React.StrictMode>,
)
