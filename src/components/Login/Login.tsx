import { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { makeStylesLogin } from '../../utils/styles';
import { schema } from '../../utils/schema';
import { useActions } from '../../hooks/ReduxHooks/useActions';
import { LoginData } from '../../state/interfaces/loginInterface';

const Login = () => {
  const classes = makeStylesLogin();
  const [isLoginMode, setLoginMode] = useState(true);
  const { login, registerUser } = useActions();
  const handleRegister = () => {
    setLoginMode((state) => !state);
  };
  const { register, handleSubmit, errors, formState } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema(isLoginMode)),
  });
  const { isDirty, isValid } = formState;

  const onSubmit = (data: LoginData) => {
    const { password, username, email } = data;
    if (isLoginMode) {
      let identifier = username || email;
      login(identifier, password);
    } else {
      registerUser(data);
    }
  };

  return (
    <Fade in={true} style={{ transitionDelay: '300ms' }}>
      <section className='form login-form'>
        <Container component='main' maxWidth='xs'>
          <div className={classes.paper}>
            <Typography component='h1' variant='h3'>
              {isLoginMode ? 'Login' : 'Sign up'}
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  {!isLoginMode && (
                    <TextField
                      autoComplete='fname'
                      name='firstName'
                      variant='outlined'
                      inputRef={register}
                      required
                      fullWidth
                      id='firstName'
                      label='Nombre'
                      autoFocus
                      error={!!errors.firstName}
                      helperText={errors?.firstName?.message}
                    />
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {!isLoginMode && (
                    <Fade in={true} style={{ transitionDelay: '300ms' }}>
                      <TextField
                        variant='outlined'
                        required
                        fullWidth
                        id='lastName'
                        label='Apellido'
                        name='lastName'
                        autoComplete='lname'
                        inputRef={register}
                        error={!!errors.lastName}
                        helperText={errors?.lastName?.message}
                      />
                    </Fade>
                  )}
                </Grid>
                <Grid item xs={12}>
                  {!isLoginMode && (
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      id='username'
                      label='Nombre de Usuario'
                      name='username'
                      autoComplete='username'
                      inputRef={register}
                      error={!!errors.username}
                      helperText={errors?.username?.message}
                    />
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='email'
                    label={
                      isLoginMode ? 'Ingrese Su email o Username' : 'Email'
                    }
                    name='email'
                    autoComplete='email'
                    inputRef={register}
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    name='password'
                    label='Contraseña'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    inputRef={register}
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  {!isLoginMode && (
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      name='confirmPassword'
                      label='Confirme la contraseña'
                      type='password'
                      id='password'
                      autoComplete='current-password'
                      inputRef={register}
                      error={!!errors.confirmPassword}
                      helperText={errors?.confirmPassword?.message}
                    />
                  )}
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                disabled={!isDirty || !isValid}
              >
                {!isLoginMode ? 'Sign Up' : 'Login'}
              </Button>
              <Grid container justify='center'>
                <Grid item>
                  <Button onClick={() => handleRegister()}>
                    {!isLoginMode
                      ? 'Already have an account? Sign in'
                      : 'Registrate !'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </section>
    </Fade>
  );
};

export default Login;
