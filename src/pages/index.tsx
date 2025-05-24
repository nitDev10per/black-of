import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { AutomotiveUpdate } from "@/screens/AutomotiveUpdate/AutomotiveUpdate";
import { div } from "framer-motion/client";
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
