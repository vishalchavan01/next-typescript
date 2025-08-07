import React from 'react';

const ProductsLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
        <h3>Product Header</h3>
        <div>{children}</div>
    
    </>
  )
}

export default ProductsLayout