'use client';

import Navbar from '@/app/components/system/Layout/Navbar';

export default function SystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Navbar
      brand="Professional Sphere"
      items={[
        { label: 'Dashboard', href: '/dashboard' },
        ]}
      />
      <main className="pt-24">{children}</main>
      </>
      );
}
