import { useTypedSelector } from '../../hooks/ReduxHooks/useTypedSelector';
import { Route, Redirect } from 'react-router-dom';
import { RoutesInterface } from '../routes';
import { routes } from '../routes';

const Routesmap = () => {
  const { jwt } = useTypedSelector((state) => state.login);
  const mapRoutes = (routes: RoutesInterface[]) => {
    return routes.map((route, index) => {
      if (route.path === '/login') {
        return (
          <Route key={index} path={route.path}>
            {jwt ? <Redirect to='/' /> : route.component}
          </Route>
        );
      } else {
        return (
          <Route key={index} exact path={route.path}>
            {route.component}
          </Route>
        );
      }
    });
  };
  return <div>{mapRoutes(routes)}</div>;
};

export default Routesmap;
