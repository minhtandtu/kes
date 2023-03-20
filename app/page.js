import Image from "next/image";
import styles from "./page.module.css";
import Categories from "./components/categories/Categories";
import Partners from "./components/partners/Partners";
import Phoicanh from "./components/phoicanh/Phoicanh";
import Products from "./components/products/Products";
import Phoicanhlon from "./components/phoicanhlon/Phoicanhlon";
import Baogia from "./components/baogia/Baogia";
import Sliders from "./components/sliders/Sliders";

export default function Home() {
  return (
    <main>
      <Categories></Categories>
      {/* <Partners></Partners>
      <Phoicanh></Phoicanh>
      <Products></Products>
      <Phoicanhlon></Phoicanhlon>
      <Baogia></Baogia>
      <Sliders></Sliders> */}
    </main>
  );
}
