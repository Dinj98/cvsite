<<<<<<< HEAD
"use client";
import LoginForm from "../components/Login";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
const page = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return (
      <div>
        <Skeleton count={5} />
      </div>
    );
  }
  return (
    <div>
      <LoginForm />
      <div>
        {session ? (
          <>
            <p>Welcome, {session.user.name}!</p>
            <Image
              src={session.user.image}
              alt={session.user.name}
              width={100}
              height={100}
            />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
            <p>You are not signed in.</p>
            <button onClick={() => signIn("github")}>
              Sign in with GitHub
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default page;
=======
// app/login/page.js
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      console.error("Login error:", result.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
>>>>>>> 00a88ba ('version@1.0.1')
