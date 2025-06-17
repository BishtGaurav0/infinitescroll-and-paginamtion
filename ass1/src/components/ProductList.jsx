import React, { useEffect, useRef, useState } from 'react';
import ProductCard from './ProductCard';
import Loader from './Loader';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef();

  const LIMIT = 10;

  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`);
    const data = await res.json();
    setProducts((prev) => [...prev, ...data.products]);
    setSkip((prev) => prev + LIMIT);
    if (data.products.length < LIMIT) setHasMore(false);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log(products)

  useEffect(() => {
    if (!observerRef.current || !hasMore) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loading) {
          fetchProducts();
        }
      },
      { threshold: 1 }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [observerRef.current, loading, hasMore]);

  return (
    <div className="product-list">
      {products.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
      {loading && <Loader />}
      <div ref={observerRef} style={{ height: '1px' }}></div>
    </div>
  );
};

export default ProductList;
