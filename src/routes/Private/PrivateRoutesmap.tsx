import PrivateRoute from './PrivateRoute';
import { RoutesInterface } from '../routes';
import { privateRoutes } from '../routes';

const PrivateRoutesmap = () => {
  const mapRoutes = (privateroutes: RoutesInterface[]) => {
    return privateroutes.map((route, index) => {
      return (
        <PrivateRoute key={index} path={route.path}>
          {route.component}
        </PrivateRoute>
      );
    });
  };
  return <div>{mapRoutes(privateRoutes)}</div>;
};
export default PrivateRoutesmap;
