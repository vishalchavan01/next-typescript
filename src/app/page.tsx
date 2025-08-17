// import { Metadata } from "next/types";
// import { propsType } from "./products/[productId]/page";

// export const generateMetadata = async ({ params }: propsType): Promise<Metadata> => {
//   console.log("params:", (await params))
//   return {
//     title: {
//       default: "Practice App",
//       template: "%s",
//     },
//     description: "Practice related pages",
//   };
// }


const Home = () => {
  // const navLink = [
  //   { name: "Home", href: "/" },
  //   { name: "Login", href: "/login" },
  //   { name: "Register", href: "/register" },
  // ]
  return (
    <div>
      Home Page
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      {/* <ul>
        {navLink.map(({ name, href }) => {
          return (<li key={name}><Link href={href}>{name}</Link></li>)
        })}
      </ul> */}
    </div>
  )
}

export default Home