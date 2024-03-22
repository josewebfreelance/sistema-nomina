import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {PayrollApp} from "./PayrollApp.tsx";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import './styles/styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <Suspense fallback={<></>}>
            <BrowserRouter>
                <PayrollApp/>
            </BrowserRouter>
        </Suspense>
    </Provider>
)
