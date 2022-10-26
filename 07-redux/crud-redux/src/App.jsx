import { Routes, Route, Navigate } from 'react-router-dom';
import { CREATE, EDIT, LOGIN, PEOPLE, ROOT } from '@/routes';
import { PrivateRoutes, PublicRoutes } from '@/components/guards';
import { LoginPage, PeopleRoutes } from './components';
import RouteWithNotFound from './helpers/RouteWithNotFound';

const App = () => {
  return (
    <RouteWithNotFound>
      <Route path={ROOT} element={<Navigate to={PEOPLE} />} />

      <Route element={<PrivateRoutes />}>
        <Route path={`${PEOPLE}/*`} element={<PeopleRoutes />} />
      </Route>

      <Route element={<PublicRoutes />}>
        <Route path={LOGIN} element={<LoginPage />} />
      </Route>
    </RouteWithNotFound>
  );
};
export default App;
