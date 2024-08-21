import { Geo } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const geo = Geo({subsets:["latin"], weight:["400"]})

export const metadata = {
  title: "WizDum",
  description: "Quotes by Big Brains",
  OpenGraph:{
    title:"WIZDUM, grow in wisdom",
    description:"This is really wisdom! Don't miss it.",
    image:["image-url"],
    url:"the deployed url to your site",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geo.className}>
        <Header className={geo.className} />
        {children}
        <Footer />
        </body>
    </html>
  );
}
