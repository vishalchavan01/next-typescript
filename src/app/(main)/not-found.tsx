'use client'
import Link from "next/link";
import { usePathname } from "next/navigation"

const NotFound = () => {
    const path = usePathname();

  return (
    <div>
      <h2>NotFoundPage from Root directory. : {path}</h2>
       <div>
      <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
        </div>
    </div>
  )
}

export default NotFound