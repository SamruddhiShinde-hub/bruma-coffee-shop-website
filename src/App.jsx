import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import ProductsSection from "./components/ProductsSection";
import VisitUs from "./components/VisitUs";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className='font-sans antialiased text-gray-900 bg-[#fcf7e6] min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-grow'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Hero />
                <MenuSection />
                <ProductsSection />
                <VisitUs />
              </>
            }
          />
          <Route path='/about' element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
