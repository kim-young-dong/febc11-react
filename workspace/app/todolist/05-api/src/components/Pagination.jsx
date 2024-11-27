import { Link, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

function Pagination({ totalPages, currentPage = 1 }) {
  let pageList = [];
  const [searchParams] = useSearchParams();
  for (let page = 1; page <= totalPages; page++) {
    searchParams.set("page", page);
    let search = searchParams.toString();

    pageList.push(
      <li key={page}>
        <Link to={`/list?${search}`}>
          <button className={page === currentPage ? "active" : ""}>
            {page}
          </button>
        </Link>
      </li>
    );
  }

  return (
    <>
      <ul className="pagination">{pageList}</ul>
    </>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,

  currentPage: PropTypes.number,
};

export default Pagination;
