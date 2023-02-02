import "@/styles/globals.css";
import { Ubuntu } from "@next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${ubuntu.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
