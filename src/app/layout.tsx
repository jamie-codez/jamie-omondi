import type {Metadata} from "next";
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
    title: "Jamie Omondi",
    description: "Jamie Omondi's portfolio website",
};

interface Props {
    children: React.ReactNode;
}

const RootLayout:React.FC<Props>=({children}) =>{
    return (
        <html lang="en">
            <body className={`${jetBrainsMono.variable} bg-primary min-h-screen text-white`}>
                <Header />
                <StairTransition/>
                <PageTransition>{children}</PageTransition>
            </body>
        </html>
    );
}

export default RootLayout;
