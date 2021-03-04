import { useEffect, useState } from 'react';
import Alerta from '../../components/UI/Alerta';
import Footer from '../../components/UI/Footer';
import Header from '../../components/UI/Header';
import ScrollButton from '../../components/UI/ScrollButton';
import Sidebar from '../../components/UI/Sidebar';

const Uicomponents: React.FC = ({ children }) => {
  const [heigth, setHeight] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeight(window.pageYOffset);
    });
    return () => window.removeEventListener('scroll', () => {});
  });
  return (
    <>
      <Header />
      <Sidebar />
      <Alerta />
      <ScrollButton heigth={heigth} />
      {children}
      <Footer />
    </>
  );
};

export default Uicomponents;
