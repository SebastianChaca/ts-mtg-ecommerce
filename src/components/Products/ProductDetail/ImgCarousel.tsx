import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slide from '@material-ui/core/Slide';
interface Carousel {
  image: string[];
}

const ImgCarousel: React.FC<Carousel> = ({ image }) => {
  const [currentImage, setCurrent] = useState(0);
  const handleImg = (): void => {
    if (image.length - 1 <= currentImage) {
      setCurrent(0);
    } else {
      setCurrent(currentImage + 1);
    }
  };
  return (
    <>
      <Slide direction='right' in={true} timeout={300}>
        <div className='carousel-caontainer'>
          <div className='carousel'>
            <button onClick={handleImg}>
              <FaArrowLeft className='carousel-icon' />
            </button>
            <img src={image[currentImage]} alt='producto' />
            <button onClick={handleImg}>
              <FaArrowRight className='carousel-icon' />
            </button>
          </div>
          <div className='carrousel-pags'>
            {image.map((item, index) => {
              return (
                <button
                  onClick={() => setCurrent(index)}
                  key={index}
                  className={`page-btn ${
                    currentImage === index && `page-btn-current`
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </Slide>
    </>
  );
};
export default ImgCarousel;
