import { Product } from '../../../state/interfaces/productInterface';
interface PaginationBtnCenter {
  paginatedProd: Product[][];
  page: number;
  setPage(number: number): void;
}

const PaginationBtn: React.FC<PaginationBtnCenter> = ({
  paginatedProd,
  setPage,
  page,
}) => {
  return (
    <div>
      {paginatedProd.map((item, index) => {
        return (
          <button
            onClick={() => setPage(index)}
            key={index}
            className={`page-btn ${page === index && `page-btn-current`}`}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default PaginationBtn;
