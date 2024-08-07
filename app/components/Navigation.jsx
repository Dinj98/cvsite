// components/Navigation.js
"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navigation() {
  const { data: session } = useSession();

  return (
    <nav>
      <Link href="/">Home</Link>
      {session ? (
        <>
          <span>Signed in as {session.user.email}</span>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
}
