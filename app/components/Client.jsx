"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Client() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {session ? (
        <>
          <p>Welcome, {session.user.name}!</p>
          {console.log(session)}
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <p>You are not signed in.</p>
          <button onClick={() => signIn("github")}>Sign in with GitHub</button>
        </>
      )}
    </div>
  );
}
