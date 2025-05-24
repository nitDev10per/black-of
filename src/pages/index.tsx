import React from 'react';
import { AutomotiveUpdate } from "@/screens/AutomotiveUpdate/AutomotiveUpdate";
export default function Home() {
  return (
    <div className="bg-white w-100vw">
      <div className="bg-white w-100vw mx-auto overflow-hidden">
        <div className="flex flex-col w-100vw" >
          <section className="w-full">
            <AutomotiveUpdate />
          </section>
        </div>
      </div>
    
    </div>
  );
}
