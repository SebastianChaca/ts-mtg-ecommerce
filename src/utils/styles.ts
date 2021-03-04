import { makeStyles } from '@material-ui/core/styles';
export const makeStylesLogin = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const makeStylesDatosVendedor = makeStyles({
  root: {
    maxWidth: 350,
    margin: 'auto',
    marginTop: 30,
    marginBottom: 30,
  },
  media: {
    height: 300,
  },
  map: {
    padding: 10,
  },
  marker: {
    color: '#d35d6e',
  },
});
export const makeStylesProductDetail = makeStyles({
  root: {
    maxWidth: 100,
    marginBottom: 50,
  },
  select: {
    fontSize: 20,
    maxWidth: 80,
    background: 'white',
    borderStyle: 'none',
    borderWidth: 2,
    borderRadius: 12,
    paddingLeft: 24,
    paddingTop: 14,
    paddingBottom: 15,
    boxShadow: '0px 5px 8px -3px rgba(0,0,0,0.14)',
    '&:focus': {
      borderRadius: 12,
      background: 'white',
    },
  },
});
export const makeStylesMetodoDePago = makeStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    margin: 5,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,

    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
}));
export const makeStylesFilterCategoria = makeStyles({
  select: {
    fontSize: 20,
    width: 160,
    height: 60,
    background: 'white',
    borderStyle: 'none',
    borderWidth: 2,
    borderRadius: 12,
    paddingLeft: 24,
    paddingTop: 14,
    paddingBottom: 15,
    boxShadow: '0px 5px 8px -3px rgba(0,0,0,0.14)',
    '&:focus': {
      borderRadius: 12,
      background: 'white',
    },
    formControl: {
      margin: 10,
    },
  },
});
