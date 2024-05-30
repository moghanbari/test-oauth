import { Route, Routes } from 'react-router-dom';
import NotFound from '@pages/NotFound';
import Home from '@pages/Home';
import About from '@pages/About';

const AllRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
);

export default AllRoutes;
