"use client";
import { useState } from "react";
import Header from "./components/Header";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import { useSession } from "next-auth/react";

export default function Home() {
  console.log(process.env.GITHUB_ID);
  console.log(process.env.GOOGLE_CLIENT_ID);
  console.log(process.env.GOOGLE_CLIENT_SECRET);
  const [dark, setDark] = useState(false);
  const { status, data: session } = useSession();

  return (
    <main
      className={`flex flex-col items-center md:text-black justify-between ${
        dark
          ? "bg-zinc-800 [&>*]:text-white text-white"
          : "bg-my-lightBeige text-black"
      }`}
    >
      {/* header of site */}
      <Header dark={dark} setDark={setDark} session={session} />
      <div></div>
      {/* hero section of home page */}
      <div className="flex items-center justify-around w-screen my-4">
        <div
          className={`flex flex-col items-center border-r-2 ${
            dark ? "border-white px-16" : "border-black px-16"
          }`}
        >
          <Image
            src="/deanj.png"
            width={200}
            height={200}
            className={`rounded-full  border-4 ${
              dark ? "border-white" : "border-black"
            }`}
            alt="deanj picture"
          />
          <div className="text-3xl mt-2">Deanj</div>
        </div>
        <div className="">
          <HeroSection dark={dark} />
        </div>
      </div>
      <div className="px-4 mx-4 text-xl mt-4 border-t-2 border-t-my-gray py-4 rounded-b-lg drop-shadow-2xl bg-my-darkBeige">
        This is my CV application. Here, I have compiled a summary of my skills
        in development and programming. For example, I can create Android and
        iOS applications using React Native and Flutter, as well as web
        applications with Vanilla JS, React.js, Next.js, and more. Additionally,
        I can develop a robust Django server to manage the backend efficiently.
        I would be glad to collaborate or discuss any project ideas you may
        have. However, please contact me only when you believe your project is
        well-defined, as I prefer to avoid wasting time. Please note that I do
        not work as a freelancer; I focus solely on my personal projects.
      </div>
      {/* main body of home page  */}
      <div
        className={`   w-screen ${
          dark ? "bg-slate-900" : "bg-gray-400"
        } bg-my-lightBeige  mt-8 pt-8`}
      >
        <Skills />
      </div>
    </main>
  );
}
