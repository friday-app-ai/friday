import FeaturesSection from "@/components/feature/feature";
import Footer from "@/components/footer/footer";
import Header from "@/components/head/header";
import HeroSection from "@/components/hero/herosection";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default page;
