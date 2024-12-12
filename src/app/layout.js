import Header from "../app/components/Header/header";
import "./Normalize.scss";
import localFont from "next/font/local";

const tacticSansReg = localFont({
  src: "../../public/fonts/TacticSansReg.woff",
  variable: "--font-tactic-sans-reg",
});

const tacticSansMed = localFont({
    src: "../../public/fonts/TacticSansMed.woff",
    variable: "--font-tactic-sans-med",
});

const tacticSansBold = localFont({
    src: "../../public/fonts/TacticSansBold.woff",
    variable: "--font-tactic-sans-bold",
});

const tacticSansBlack = localFont({
    src: "../../public/fonts/TacticSansBlack.woff",
    variable: "--font-tactic-sans-black",
});

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <link rel='icon' href='/favicon.ico'/>
            <title>Максимум</title>
        </head>
        <body className={`${tacticSansReg.variable} ${tacticSansBlack.variable} ${tacticSansMed.variable} ${tacticSansBold.variable}`}>
            <Header/>
            {children}
        </body>
        </html>
    );
}
