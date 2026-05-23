import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'ShastraCore CRM', description: 'Salon Shastra ecosystem CRM' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
