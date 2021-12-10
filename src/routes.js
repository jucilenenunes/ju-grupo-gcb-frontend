import {Routes as RoutesDom, Route} from 'react-router-dom';
import {FullPages} from './pages';

const Routes = ()=> {
  return(
    <RoutesDom>
      <Route element={<FullPages />} path='/' exact/>
    </RoutesDom>
  );
};

export default Routes;


