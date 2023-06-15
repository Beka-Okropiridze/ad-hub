import { Routes, Route} from 'react-router-dom';
import { Academy, EnterPage, Agency, Services, AboutUs, Contact, Branding, MarketingPage, CopyPage, MediaPage, DesignPage } from "../pages";



export const AllRoutes = () => {

  return (
    <main>
        <Routes>
            <Route path="/" element={ <EnterPage /> } />
            <Route path="/academy" element={ <Academy />} />
            <Route path="/agency" element={ <Agency />} />
            <Route path="/services" element={ <Services /> } />
            <Route path='/aboutus' element={ <AboutUs />}/>
            <Route path='/contact' element={ <Contact />}/>
            <Route path='/branding' element={ <Branding />} />
            <Route path='/marketing' element={ <MarketingPage />} />
            <Route path='/copy' element={ <CopyPage />} />
            <Route path='/media' element={ <MediaPage />} />
            <Route path='/design' element={ <DesignPage />} />
        </Routes>
    </main>

  )
};
