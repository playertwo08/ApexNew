import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
const geist=Geist({variable:"--font-geist",subsets:["latin"]});
export const metadata:Metadata={title:{default:"Apex Sports — Gear for every game",template:"%s | Apex Sports"},description:"Shop curated performance footwear, rackets, bags, and game essentials from Apex Sports Philippines.",metadataBase:new URL("https://apex-sports-shop.ivanpicso.chatgpt.site"),openGraph:{title:"Apex Sports — Gear for every game",description:"Curated performance gear for athletes across the Philippines.",images:["/og.png"]},twitter:{card:"summary_large_image",title:"Apex Sports — Gear for every game",description:"Curated performance gear for athletes across the Philippines.",images:["/og.png"]}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={`${geist.variable} antialiased`}><a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-xl bg-primary px-4 py-3 font-semibold text-white focus:translate-y-0">Skip to content</a><CartProvider><SiteHeader/>{children}<SiteFooter/></CartProvider></body></html>}
