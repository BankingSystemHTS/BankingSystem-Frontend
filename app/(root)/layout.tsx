//layout for the main components
export const dynamic = 'force-dynamic'

import type { Metadata } from "next";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        side bar
        {children}
    </main>
  );
}