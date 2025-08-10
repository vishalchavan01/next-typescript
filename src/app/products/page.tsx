import Link from "next/link"

const Products = () => {
  return (
    <>

      <h2>Products</h2>
      {/* <Link href="/sometjo">Something</Link> */}

      <div>
        <ul>
          <li>
            <Link href="/products/1">Product 1</Link>
          </li>
          <li>
            <Link href="/products/2">Product 2</Link>
          </li>
          <li>
            <Link href="/products/3">Product 3</Link>
          </li>
          <li>
            <Link href="/products/4">Product 4</Link>
          </li>
          <li>
            <Link href="/products/51">View Loading</Link>
          </li>
          <li>
            <Link href="/products/101">View Error Page</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Products