import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Aaron Charles — Technical Founder & Software Engineer",
    description: "Founder & Software Engineer focused on education, media, and applied AI — turning ideas into scalable systems in Africa.",
    keywords: ["Aaron Charles", "AI", "Software Engineer", "Kenya", "MasomoGPT", "UTU", "EdTech"],
    authors: [{ name: "Aaron Charles" }],
    icons: {
        icon: "/logo.png",
        apple: "/logo.png",
    },
    openGraph: {
        title: "Aaron Charles — Technical Founder",
        description: "Architecting context-aware AI for the next generation of African infrastructure.",
        type: "website",
        images: ["/logo.png"],
    },
};

export const viewport: Viewport = {
    themeColor: "#ffffff",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable} suppressHydrationWarning>
            <body className="font-sans antialiased" suppressHydrationWarning>
                <div className="grain-overlay" aria-hidden="true" />
                {children}
            </body>
        </html>
    );
}
