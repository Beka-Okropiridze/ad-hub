import { Routes, Route} from 'react-router-dom';
import { Academy, EnterPage, Agency, Services, } from "../pages";



export const AllRoutes = () => {

  return (
    <main>
        <Routes>
            <Route path="/" element={ <EnterPage /> } />
            <Route path="/academy" element={ <Academy />} />
            <Route path="/agency" element={ <Agency />} />
            <Route path="/services" element={ <Services /> } />
        </Routes>
    </main>

  )
};
