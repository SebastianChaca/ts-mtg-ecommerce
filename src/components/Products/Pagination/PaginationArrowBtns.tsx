import { Product } from '../../../state/interfaces/productInterface';
import PaginationBtn from './PaginationBtn';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
interface PaginationBtns {
  paginatedProd: Product[][];
  page: number;
  setPage(number: number): void;
}

const PaginationArrowBtns: React.FC<PaginationBtns> = ({
  paginatedProd,
  page,
  setPage,
}) => {
  return (
    <>
      {paginatedProd.length > 1 && (
        <article className='pagination-buttons'>
          {page > 0 && (
            <button className='prev-page-btn' onClick={() => setPage(page - 1)}>
              <FaAngleDoubleLeft />
            </button>
          )}

          <PaginationBtn
            paginatedProd={paginatedProd}
            page={page}
            setPage={setPage}
          />
          {page < paginatedProd.length - 1 && (
            <button className='next-page-btn' onClick={() => setPage(page + 1)}>
              <FaAngleDoubleRight />
            </button>
          )}
        </article>
      )}
    </>
  );
};

export default PaginationArrowBtns;
