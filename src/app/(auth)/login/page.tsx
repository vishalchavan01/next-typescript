'use client';

import Link from "next/link"
import { notFound, useRouter } from "next/navigation"

const metadata = {
  title: 'Login',
  description: 'Login page for the application',
}

const Login = () => {
  const route = useRouter();
  // notFound()
  return (
    <div>
      <title>Vishal</title>
      <h2>Login Page </h2>
      <button onClick={() => route.push("/products")}> Sign in </button>
      <br />
      <Link href="/sometjo">Something</Link>
    </div>

  )
}

export default Login