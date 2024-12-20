import Categories from "@/components/home/Categories";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import HeaderHeroSection from "@/components/home/HeaderHeroSection";
import Inspiration from "@/components/home/Inspiration";
import ProductGrid from "@/components/home/Products";


export default function Home() {
  return (
   <>
    <Header/>
     <HeaderHeroSection />
     <Categories/>
     <ProductGrid/>
     <Inspiration/>
   
      <Footer/>
   </>
  );
}
