import Image from "next/image";
import Head from 'next/head';
import { Inter } from "next/font/google";
import { RoomClient } from "@/components/rooms/RoomClient";
import { Slide } from "./carousel/Slide";

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
    </>
  );
}
