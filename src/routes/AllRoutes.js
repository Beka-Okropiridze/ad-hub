import { Route, Routes } from "react-router-dom";
import { Academy, Agency, EnterPage } from "../pages";



export const AllRoutes = () => {

  return (
    <main>
        <Routes>
            <Route path="/" element={ <EnterPage /> } />
            <Route path="/academy" element={ <Academy />} />
            <Route path="/agency" element={ <Agency /> } />
        </Routes>
    </main>
  )
};
