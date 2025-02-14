"use client";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between p-4 bg-gray-200 items-center">
      <div className="flex items-center justify-between p-4 gap-4 bg-gray-200">
        <Link href="/">Home</Link>
        <Link href="/store">Store</Link>
        <Link href="/about">About</Link>
      </div>
      <Link href="/login">Login</Link>
    </div>
  );
};

export default Header;
