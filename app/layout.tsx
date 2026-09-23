import type { Metadata } from "next";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Naser Dib | General Surgery & Surgical Oncology",
  description:
    "Learn about Dr. Naser Dib, a General Surgeon and Surgical Oncologist with over 30 years of experience in surgical care, oncology and modern treatment methods",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
