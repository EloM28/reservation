import React from 'react'
import { Inter } from "next/font/google";
import  RoomClient  from "@/components/rooms/RoomClient";
import  Slide  from "./carousel/Slide";
import  Footer  from "./footer/Footer";
import  About  from "./about/About";
import  Contact  from "./contact/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <>
      <Slide/>
      <RoomClient/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}
