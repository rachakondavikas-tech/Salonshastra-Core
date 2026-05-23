'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  ['Dashboard', '/dashboard'],
  ['Contacts', '/contacts'],
  ['Businesses', '/businesses'],
  ['Opportunities', '/opportunities'],
  ['Activities', '/activities'],
  ['Services Attached', '/services'],
  ['Team Assignment', '/team'],
  ['Reports', '/reports']
];

export default function Sidebar() {
  const pathname = usePathname();
  return <aside className="sidebar"><h2>ShastraCore</h2>{links.map(([label, href]) => <Link key={href} className={`side-link ${pathname===href?'active':''}`} href={href}>{label}</Link>)}</aside>;
}
