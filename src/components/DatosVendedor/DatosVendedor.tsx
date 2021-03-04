import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MapBox from '../Mapbox/MapBox';
import { makeStylesDatosVendedor } from '../../utils/styles';
interface Datos {
  texto: string;
}
const DatosVendedor: React.FC<Datos> = ({ texto }) => {
  const classes = makeStylesDatosVendedor();

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <div className='datos-vendedor-texto'>
          <h3>{texto}</h3>{' '}
        </div>
      </div>
      <Card className={classes.root}>
        <CardActionArea className={classes.map}>
          <MapBox width={'200'} height={'300px'} className='' />
        </CardActionArea>

        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h3'>
              Nuestros datos :
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Dirreccion: calle false 123
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              E-mail: sarasa@gmail.com
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Telefono :4123-123
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default DatosVendedor;
