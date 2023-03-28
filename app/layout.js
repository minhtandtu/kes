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
      <body className={`${monteserrat.className} flex min-h-screen flex-col`}>
        <div className="">
          <Header></Header>
        </div>
        <div className="">{children}</div>
        <div className="mt-auto">
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
