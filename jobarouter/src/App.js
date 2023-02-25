import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HelpLayout from './layouts/HelpLayout'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import NotFound from './pages/NotFound'
import CareersLayout from './layouts/CareersLayout'
import Careers from './pages/careers/Careers'
import { careerLoader } from './pages/careers/Careers'
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails'
import CareersError from './pages/careers/CareersError'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='/help' element={<HelpLayout/>}>
        <Route path='faq' element={<Faq/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}></Route>
      {/* When the error occurs it shows the error component instead of layout componenet */}
      <Route path='careers' element={<CareersLayout/>} errorElement={<CareersError/>}>
        {/* Anytime careers route is visited, Careers function in the loader prop will be invoked. */}
        <Route 
        index
        element= {<Careers/>}
        loader={careerLoader}
        />
        <Route 
        path=':id' 
        element={<CareerDetails/>}
        loader={careerDetailsLoader}
        />
      </Route>
    </Route>
  )
);
function App() {
  return (
      <RouterProvider router={router}/>
);
}

export default App
