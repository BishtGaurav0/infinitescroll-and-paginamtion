import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const pages = [...Array(pageCount).keys()].map(n => n + 1);

  const handleClick = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >Previous</button>

      {pages.map(number => (
        <button
          key={number}
          onClick={() => handleClick(number)}
          style={{
            margin: '0 5px',
            backgroundColor: number === currentPage ? '#007bff' : '#fff',
            color: number === currentPage ? '#fff' : '#000',
            border: '1px solid #007bff',
            padding: '5px 10px'
          }}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === pageCount}
      >Next</button>
    </div>
  );
};

export default Pagination;
