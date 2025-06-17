import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
       <div
       key={product.id}
       style={{
         display: 'flex',
         justifyContent: 'center', 
         marginBottom: '20px',
       }}
     >
       <div
         style={{
           border: '1px solid #ccc',
           padding: '10px',
           display: 'flex',
           gap: '15px',
           width: '400px', 
           alignItems: 'center',
         }}
       >
         <img
           src={product.thumbnail}
           alt={product.title}
           style={{ width: '100px', height: '100px', objectFit: 'cover' }}
         />
         <div>
           <h3>{product.title}</h3>
           <p>Category: {product.category}</p>
           <p>Price: ${product.price}</p>
         </div>
       </div>
     </div>
     
      ))}
    </div>
  );
};

export default ProductList;
