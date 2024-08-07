import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import DarkMode from "./DarkMode";
import { signIn, signOut } from "next-auth/react";

const Header = ({ dark, setDark, session }) => {
  return (
    <div className="backdrop-opacity-25  bg-my-orange text-white text-xl flex justify-around items-center w-screen top-0 ">
      <div>
        <DarkMode dark={dark} setDark={setDark} />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="py-2 flex justify-center items-center ">
        <div className="mx-4">
          <Link href="/">My Ceve Application</Link>
        </div>
        <Image src="/cv.png" width={100} height={100} alt="site" />
      </div>
      <div className="flex flex-col justify-center items-center">
        {session ? (
          <>
            <Image
              className="rounded-full"
              src={session.user.image}
              width={50}
              height={100}
<<<<<<< HEAD
              alt={`${session.user.name} image`}
            />
            <p className="mt-2">Welcome, {session.user.name}!</p>
=======
              alt={`${session.user.username} image`}
            />
            <p className="mt-2">Welcome, {session.user.username}!</p>
>>>>>>> 00a88ba ('version@1.0.1')
            <div className="flex flex-col mr-4 ">
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          </>
        ) : (
          <div className="flex flex-col">
            <p>You are not signed in.</p>
            <button onClick={() => signIn("github")}>
              Sign in with GitHub
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
