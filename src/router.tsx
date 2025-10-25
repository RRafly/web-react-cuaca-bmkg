import { createHashRouter, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import LocationForm from "./form/LocationForm";
import App from "./App";
import { Dashboard } from "./dashboard/Dashboard";

// used hash router for github pages compatibility
const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>} >
            <Route path="form" element={<LocationForm/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
        </Route>
    )
)

export default router