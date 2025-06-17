import React from 'react';

const FilterSortBar = ({ filterText, setFilterText, sortOrder, setSortOrder }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Filter by title or category"
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
      />
      <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} style={{ marginLeft: '10px' }}>
        <option value="">Sort by Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};

export default FilterSortBar;
