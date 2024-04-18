import Image from "next/image";
import Head from 'next/head';
import { Inter } from "next/font/google";
import { RoomClient } from "@/components/rooms/RoomClient";
import { Slide } from "./carousel/Slide";
import { Footer } from "./footer/Footer";
import { About } from "./about/About";
import { Contact } from "./contact/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   const customStyle = {
      border:'0',
      width: '100%'
      // Ajoutez d'autres propriétés de style si nécessaire
    };
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
