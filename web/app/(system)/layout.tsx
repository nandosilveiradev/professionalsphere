'use client';

import Navbar from "../components/system/Navbar/Navbar";

import "../styles/globals.css";

export default function SystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Navbar />
    <main className="pt-24">{children}</main>
    </>
    );
}
