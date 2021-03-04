import React from 'react';
interface ChildrenProps {
  children: JSX.Element;
}
const Hero: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className='hero'>
      <div className='banner'>
        <h1>Compra al mejor precio !</h1>
        <p className='hero-p'>Conocé nuestros productos</p>
        {children}
      </div>
    </div>
  );
};

export default Hero;
