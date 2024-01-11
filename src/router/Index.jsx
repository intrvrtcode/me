import { Routes, Route } from "react-router-dom";

import Default from "../layouts/Default";
import Home from "../pages/Home";
import Works from "../pages/Works";
import Aboutme from "../pages/Aboutme";
import Contacts from "../pages/Contacts";

const Router = () => {
  return (
    <Routes>
      <Route key={'layout'} path='/' element={<Default />}>
        <Route key={'home'} index path='/' element={<Home />} />
        <Route key={'works'} path='/projects' element={<Works />} />
        <Route key={'aboutme'} path='/about-me' element={<Aboutme />} />
        <Route key={'contacts'} path='/contacts' element={<Contacts />} />
      </Route>
    </Routes>
  )
}

export default Router;