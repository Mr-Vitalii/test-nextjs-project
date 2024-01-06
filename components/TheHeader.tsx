import Link from "@/node_modules/next/link";
import React from "react";

export const TheHeader = () => {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </header>
  );
};
