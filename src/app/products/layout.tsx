import React, { Suspense } from 'react';

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h3>Product Header (Layout)</h3>
      <Suspense fallback={<div>Loading Product Details...</div>}>
      
        <div>{children}</div>
      </Suspense>

    </>
  )
}

export default ProductsLayout