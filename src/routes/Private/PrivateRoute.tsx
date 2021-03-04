import { Route, Redirect } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/ReduxHooks/useTypedSelector';
interface Private {
  path: string;
}
const PrivateRoute: React.FC<Private> = ({ children, path }) => {
  const { jwt } = useTypedSelector((state) => state.login);

  return (
    <Route
      path={path}
      render={() => {
        return jwt ? children : <Redirect to='/login'></Redirect>;
      }}
    ></Route>
  );
};

export default PrivateRoute;
