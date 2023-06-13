import { Routes, Route} from 'react-router-dom';
import { Academy, EnterPage, Agency, Services, AboutUs, Branding } from "../pages";



export const AllRoutes = () => {

  return (
    <main>
        <Routes>
            <Route path="/" element={ <EnterPage /> } />
            <Route path="/academy" element={ <Academy />} />
            <Route path="/agency" element={ <Agency />} />
            <Route path="/services" element={ <Services /> } />
            <Route path='/aboutus' element={ <AboutUs />}/>
            <Route path='/branding' element={ <Branding />} />
        </Routes>
    </main>

  )
};
