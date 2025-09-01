import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <div>
        <img href="/avatar.png"></img>
        <div>
          <h1>Ronald Zavaleta</h1>
          <p>Estudiante de alto rendimiento academico con un gran interes por nuevos conocimientos.</p>
        </div>
        
      </div>
    
    </div>
  );
}
