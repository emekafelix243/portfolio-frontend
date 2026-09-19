import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Okeke Felix Emeka | Software Developer & Data Scientist',
  description: 'Portfolio of Okeke Felix Emeka - Full-stack Software Developer, Data Scientist, Educator, and Founder of DeltaQuant Solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-cyber-bg text-slate-200 antialiased selection:bg-cyber-cyan selection:text-black">
        {children}
      </body>
    </html>
  );
}
