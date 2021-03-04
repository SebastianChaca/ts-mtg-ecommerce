import Login from '../../components/Login/Login';
import { CircularProgress } from '@material-ui/core';
import { useTypedSelector } from '../../hooks/ReduxHooks/useTypedSelector';
const LoginPage = () => {
  const { loading } = useTypedSelector((state) => state.login);
  if (loading) {
    return (
      <>
        <section className='loading'>
          <CircularProgress />
        </section>
      </>
    );
  }

  return <Login />;
};

export default LoginPage;
