import { Routes, Route} from 'react-router-dom';
import { Academy, EnterPage, AgencyHeader, Services, News } from "../pages";



export const AllRoutes = () => {

  return (
    <main>
        <Routes>
            <Route path="/" element={ <EnterPage /> } />
            <Route path="/academy" element={ <Academy />} />
            <Route path="/agency" element={ <AgencyHeader />} />
            <Route path="/services" element={ <Services /> } />
            <Route path='/news' element={ <News /> }/>
        </Routes>
    </main>

  )
};
