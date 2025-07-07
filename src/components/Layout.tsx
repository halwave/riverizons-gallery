import { type ReactNode } from 'react';
import Navigation from './Navigation';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
