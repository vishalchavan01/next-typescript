import Link from "next/link"

const Home = () => {
  const navLink = [
    { name: "Home", href: "/" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ]
  return (
    <div>
      <ul>
        {navLink.map(({ name, href }) => {
          return (<li key={name}><Link href={href}>{name}</Link></li>)
        })}
      </ul>
    </div>
  )
}

export default Home