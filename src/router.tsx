import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import BaseForm from "./form/BaseForm";
import App from "./App";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>} >
            <Route path="form" element={<BaseForm/>}/>
        </Route>
    )
)

export default router