'use client'
import { usePathname } from "next/navigation"

const NotFound = () => {
    const path = usePathname();

  return (
    <h2>NotFoundPage from App directory. : {path}</h2>
  )
}

export default NotFound