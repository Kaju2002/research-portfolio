import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroSplash from "@/components/IntroSplash";
import { project, site } from "@/data/research";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${site.shortName}`,
    default: `${project.title} | ${site.shortName}`,
  },
  description: project.tagline,
};

// Runs before the intro is parsed, so a repeat visit in the same session never flashes it.
const introScript = `try{if(sessionStorage.getItem("intro-seen")){document.documentElement.setAttribute("data-intro-seen","")}else{sessionStorage.setItem("intro-seen","1")}}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col font-sans">
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <IntroSplash />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
