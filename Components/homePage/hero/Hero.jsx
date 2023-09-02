
import React from "react";
import TextSection from "./TextSection";
import ImgSection from "./ImgSection";


const Hero = () => {
  return (
    <main className="   flex justify-center items-center
     gap-x-36 gab-y-16  flex-wrap-reverse p-2">
      <section>
        <TextSection/>
      </section>
      <section><ImgSection/></section>


    </main>
    
   
  );
};

export default Hero;
