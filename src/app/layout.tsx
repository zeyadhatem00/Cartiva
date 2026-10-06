import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import Navbar from "./_Components/Navbar/page";
import Footer from "./_Components/Footer/page";
import { Toaster } from "sonner";
import Sessionprovider from "./_Components/SessionProvide/SessionProvider";
import { ProductsProvide } from "./context/productsContext";
import { CartProvider } from "./context/CartContext";

import { AuthOptions } from "./NextAuth/authOptions";
import { getServerSession } from "next-auth";
import { WishlistProvider } from "./context/wishlistContext";

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cartiva | More than just a store",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const session = await getServerSession(AuthOptions);

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${exo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Sessionprovider Session={session}>
          <CartProvider>
            {" "}
            <WishlistProvider>
              <ProductsProvide>
                {" "}
                <Toaster richColors position="top-center" duration={1500} />
                <Navbar />
                {children}
                <Footer />
              </ProductsProvide>{" "}
            </WishlistProvider>
          </CartProvider>
        </Sessionprovider>
      </body>
    </html>
  );
}
