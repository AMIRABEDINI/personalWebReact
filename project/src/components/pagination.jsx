import React from 'react';
import _ from 'lodash';
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
>>>>>>> 36f07fa86c7f9192bc971f4d2c296b7f1df988ee
const Pagination = ({ itemCount, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
            <nav>
                <ul className="pagination justify-content-center">
                    {pages.map(page => (
                        <li className={page === currentPage ? 'page-item active' : 'page-item'}>
                            <a href="#" className="page-link" onClick={() => onPageChange(page)}>
                                {page}
                         </a>
                        </li>

                    ))}

                </ul>
            </nav>
    );
};

Pagination.propTypes = {
    itemCount : PropTypes.number.isRequired,
    pageSize : PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage : PropTypes.number.isRequired
}
export default Pagination;