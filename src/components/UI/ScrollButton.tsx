import { FaAngleDoubleUp } from 'react-icons/fa';
interface BtnProps {
  heigth: number;
}
const ScrollButton: React.FC<BtnProps> = ({ heigth }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button
      className={heigth > 100 ? 'scroll-btn show-scroll-btn' : ' scroll-btn'}
      onClick={scrollToTop}
    >
      <FaAngleDoubleUp className='scroll-btn-icon' />
    </button>
  );
};
export default ScrollButton;
