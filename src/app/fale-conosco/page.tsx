import type { Metadata } from "next";
import TopBar from "@/components/TopBar/TopBar";
import Footer from "@/components/Footer/Footer";
import WhatsappCta from "./WhatsappCta";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function FaleConosco() {
  return (
    <>
      <TopBar />
      <main>
        <WhatsappCta />
      </main>
      <Footer />
    </>
  );
}
