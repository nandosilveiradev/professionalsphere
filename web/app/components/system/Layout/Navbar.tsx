'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NavItem } from '@/app/components/system/Layout/Navbar.types';


interface NavbarProps {
  brand: string;
  items: NavItem[];
}

export default function Navbar({ brand, items }: NavbarProps) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <nav className="navbar">
      <div className="navbar__brand">{brand}</div>

      <ul className="navbar__menu">
        {items.map((item) => (
          <li
            key={item.label}
            className="navbar__item"
            onMouseEnter={() => setOpen(item.label)}
            onMouseLeave={() => setOpen(null)}
          >
            {item.href ? (
              <Link href={item.href} className="navbar__link">
              {item.label}
            </Link>
            ) : (
            <span className="navbar__link">{item.label}</span>
            )}

            {item.children && open === item.label && (
              <ul className="navbar__dropdown">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href} className="navbar__dropdown-link">
                    {child.label}
                  </Link>
                </li>
                ))}
              </ul>
              )}
          </li>
          ))}
      </ul>
    </nav>
    );
}

