import { RiFacebookCircleLine } from 'react-icons/ri';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { SiGmail, SiWhatsapp } from 'react-icons/si';
import MapBox from '../Mapbox/MapBox';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-grid'>
        <div className='footer-container redes-sociales'>
          <h4>Redes sociales</h4>
          <div className='divider div-transparent'></div>
          <ul>
            <li>
              <RiFacebookCircleLine className='facebook-icon footer-icons' />
            </li>
            <li>
              <FaInstagramSquare className='instagram-icon footer-icons' />
            </li>
            <li>
              <AiFillTwitterCircle className='twitter-icon footer-icons' />
            </li>
          </ul>
        </div>
        <div className='footer-container local'>
          <h4>Nuestro Local</h4>
          <div className='divider div-transparent'></div>
          <div className='footer-map'>
            <MapBox width={'100'} height={'200px'} className='footer-mapbox' />
            <div className='footer-text'>
              <p>Calle Falsa 123</p>
              <p>Barrio de Belgrano</p>
            </div>
          </div>
        </div>
        <div className='footer-container contacto'>
          <h4>Contacto</h4>
          <div className='divider div-transparent'></div>
          <ul>
            <li>
              <div className='footer-contacto'>
                <SiGmail />
                <p>Sebastian.dalinger@gmail.com</p>
              </div>
            </li>
            <li>
              <div className='footer-contacto'>
                <SiWhatsapp />
                <p>1565027205</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
