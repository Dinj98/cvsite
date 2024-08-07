"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <div>
      <Skeleton count={4} circle="true" height={50} width={100} />
    </div>
  );
}
