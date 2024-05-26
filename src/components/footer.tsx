"use client";

import { useEffect, useState } from "react";
import { poppins400, poppins } from "@/app/fonts";
import Container from "@/components/container";

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  const getCopyrightYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <footer className={`${poppins400.className} bg-[#fafafa] w-full mt-12 p-4`}>
      <Container>
        <div className="flex flex-row justify-between h-[100px] p-8 px-20 max-lg:px-6 max-md:px-4 max-md:flex-col max-md:items-center">
          <div className="flex flex-row justify-around max-xs:justify-between w-[400px] max-md:w-full text-sm mt-[10px]">
            {/* Your footer content goes here */}
          </div>
        </div>
        <div className="py-2 flex flex-col justify-center items-center">
          <p className={`${poppins.className} text-[10px] pt-2`}>
            &copy; {getCopyrightYear()} WSWF
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
