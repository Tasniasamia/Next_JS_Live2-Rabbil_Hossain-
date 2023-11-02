import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Product">Product</Link>
            <Link href={{ pathname: "/blog", query: { email: "tasnia@gmail.com" } }}>
               BLog
            </Link>
        </div>
    );
};

export default Navbar;
