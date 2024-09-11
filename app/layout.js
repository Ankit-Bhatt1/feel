import localFont from "next/font/local";
import "./globals.css";
import { Fugaz_One, Inter } from '@next/font/google';
import Button from "@/components/Button";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] });
const fugaz = Fugaz_One({ subsets: ['latin'] , weight: ['400']});

export const metadata = {
  title: "Brodle",
  description: "Mood Tracker !!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between">
      <Link href={'/'}>
        <h1 className={'text-base sm:text-lg textGradient ' + fugaz.className}>
          Feel
        </h1>
      </Link>
      
      <div>
        PLACEHOLDER
      </div>
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 " >
      <p className=" text-indigo-600 text-center ">Created with ❤️ </p>
    </footer>
  )

  return (
    <html lang="en">
      <body className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col ' + inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
