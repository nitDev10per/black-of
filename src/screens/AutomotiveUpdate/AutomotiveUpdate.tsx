import React, { JSX } from "react";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";
import { SolutionsOverviewSection } from "./sections/SolutionsOverviewSection";

export const AutomotiveUpdate = (): JSX.Element => {
  return (
    <div className="bg-white w-100vw">
      <div className="bg-white w-100vw  mx-auto overflow-hidden">
        <div className="flex flex-col w-100vw">
          <section className="w-full">
            <SolutionsOverviewSection />
          </section>

          <section className="w-full">
            <ServicesSection />
          </section>

          <section className="w-full">
            <HeroSection />
          </section>

          <section className="w-full">
            <ContactSection />
          </section>
        </div>
      </div>
    </div>
  );
};
