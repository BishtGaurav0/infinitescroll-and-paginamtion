import React, { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import ProductList from './components/ProductList';
import Pagination from './components/Pagination';
import FilterSortBar from './components/FilterSortBar';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterText, setFilterText] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const itemsPerPage = 5;

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=100')
      .then(res => {
        setProducts(res.data.products);
        setFiltered(res.data.products);
      });
  }, []);

  useEffect(() => {
    let filteredList = [...products];

    if (filterText) {
      filteredList = filteredList.filter(
        item =>
          item.title.toLowerCase().includes(filterText.toLowerCase()) ||
          item.category.toLowerCase().includes(filterText.toLowerCase())
      );
    }

    if (sortOrder === 'asc') {
      filteredList.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      filteredList.sort((a, b) => b.price - a.price);
    }

    setFiltered(filteredList);
    setCurrentPage(1);
  }, [filterText, sortOrder, products]);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirst, indexOfLast);

  return (
    <div className="container">
      <h1>Product Listing</h1>
      <FilterSortBar
        filterText={filterText}
        setFilterText={setFilterText}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <ProductList products={currentItems} />
      <Pagination
        totalItems={filtered.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <p>Total Items: {filtered.length}</p>
      <p>Page {currentPage} of {Math.ceil(filtered.length / itemsPerPage)}</p>
    </div>
  );
};

export default App;
