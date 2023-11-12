import React from "react";
import DRHeader from "@/components/DancingRivers/Layout/DRHeader";
import DRFooter from "@/components/DancingRivers/Layout/DRFooter";
import { defaultLocale } from "../../middleware";
import "../globals.css";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <>
      <html lang={params.lang ?? defaultLocale}>
        <body className="overflow-x-clip">
          <DRHeader language={params.lang ?? defaultLocale}></DRHeader>
          {children}
          <DRFooter language={params.lang ?? defaultLocale}></DRFooter>
        </body>
      </html>
    </>
  );
}
