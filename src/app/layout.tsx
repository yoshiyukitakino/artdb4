"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Link from "next/link";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = React.useState(0);
  return (
    <html lang="ja">
      <body className={inter.className}>
        <h2>header</h2>

        <button onClick={() => setCount(count + 1)}>+</button>
        <div>{count}</div>
        <Header />
        {children}
      </body>
    </html>
  );
}
