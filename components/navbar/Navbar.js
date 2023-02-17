import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const { data: session } = useSession();

    return (
        <nav>
            <ul>
                <li>home</li>
                <li>about</li>
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
