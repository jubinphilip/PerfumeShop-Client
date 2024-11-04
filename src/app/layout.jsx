'use client'
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname=usePathname()
  const showNavbar = pathname !== '/signin' && pathname !== '/signup' 
  return (
    <html lang="en">
      <body >
       {showNavbar && <Navbar/>}
        {children}
        {showNavbar && <Footer/>}
      </body>
    </html>
  );
}
