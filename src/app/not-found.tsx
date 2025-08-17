'use client'
import { usePathname } from "next/navigation";

const NotFound = () => {
  const path = usePathname();

  return (
    <div>
      <h2>NotFoundPage from Root directory. : {path}</h2>
      <div>
        <p>Could not find requested resource</p>
      </div>
    </div>
  )
}

export default NotFound