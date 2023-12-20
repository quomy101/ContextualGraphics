import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} px-8`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
