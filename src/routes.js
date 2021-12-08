import { Routes as RoutesDom, Route } from 'react-router-dom';
import { Home, Register } from './pages';

const Routes = ()=> {
  return(
    <RoutesDom>
      <Route element={<Home />} path='/' exact/>
      <Route element={<Register />} path='/register' exact/>
    </RoutesDom>
  )
}

export default Routes;