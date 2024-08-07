"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col bg-[#FFFFFF] justify-around pt-20 pb-10 items-center">
      <div className="text-7xl text-gray-700">404 - Not Found</div>
      <Image src="/images/notfound.webp" width={500} height={350} alt="404" />

      <Link
        className="text-5xl text-gray-600 flex items-end hover:text-dark-orange border-b-2 border-red-400"
        href="/"
      >
        back to Home
      </Link>
      <div className="text-2xl text-red-600">or:</div>
      <button
        type="button"
        onClick={() => {
          router.back();
        }}
        className="bg-blue-600 text-xl text-white rounded-md p-4"
      >
        go to previous page
      </button>
    </div>
  );
}
