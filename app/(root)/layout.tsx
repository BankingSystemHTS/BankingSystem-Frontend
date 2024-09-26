//layout for the main components
export const dynamic = 'force-dynamic'

import type { Metadata } from "next";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          Side Bar
        </header>
        <main>
          {children}
        </main>
        <footer>
          Footer
        </footer>
      </body>
    </html>
  );
}