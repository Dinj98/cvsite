"use client";
import { Suspense, useState } from "react";
import React from "react";
import Header from "../components/Header";
import Loading from "../components/loading";

const layout = ({ children }) => {
  const [dark, setDark] = useState(false);
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <div
        className={`${
          dark ? "bg-[#949392] text-white" : "bg-white text-black "
        }`}
      >
        <Header dark={dark} setDark={setDark} />
        {children}
      </div>
    </Suspense>
  );
};

export default layout;
