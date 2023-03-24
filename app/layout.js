import "./globals.css";
import { Montserrat } from "next/font/google";
const monteserrat = Montserrat({ subsets: ["latin"] });
export const metadata = {
  title: "KES - Joining Happiness",
  description: "JOINNING HAPPINESS",
};
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monteserrat.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
