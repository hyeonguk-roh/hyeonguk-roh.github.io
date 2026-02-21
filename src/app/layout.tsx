import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Danny Roh | OS Portfolio",
    description: "A minimalist web-based Desktop OS portfolio.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased min-h-screen text-white bg-black font-mono overflow-hidden">
                {children}
            </body>
        </html>
    );
}
