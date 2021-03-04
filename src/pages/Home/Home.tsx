import Hero from '../../components/UI/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Hero>
        <Link to='/products' className='btn btn-primary btn-hero'>
          Comprar ahora
        </Link>
      </Hero>
    </>
  );
};

export default Home;
