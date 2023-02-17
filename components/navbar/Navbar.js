import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav>
      <ul>
        <li>home</li>
        <Link href="/host/event">Host</Link>
      </ul>

      <button onClick={() => signIn()}>Login</button>
      <button onClick={() => signOut()}>Logout</button>

      {session && (
        <div>
          <img src={session.user.image} alt={session.user.name} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
