import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export const metadata: Metadata = {
  title: "Next.js starter kit",
  description: "Next.js starter kit with Turborepo",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-svh antialiased">
        <div className="flex min-h-svh flex-col">{children}</div>
      </body>
    </html>
  );
}
