import { Routes, Route} from 'react-router-dom';
import { Academy, EnterPage, Agency, Services, AboutUs, Branding, MarketingPage, CopyPage } from "../pages";



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
            <Route path='/marketing' element={ <MarketingPage />} />
            <Route path='/copy' element={ <CopyPage />} />
        </Routes>
    </main>

  )
};
