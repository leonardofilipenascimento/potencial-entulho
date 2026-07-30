import type { Metadata } from "next";
import TopBar from "@/components/TopBar/TopBar";
import Footer from "@/components/Footer/Footer";
import WhatsappCta from "./WhatsappCta";
import styles from "./FaleConosco.module.css";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function FaleConosco() {
  return (
    <div className={styles.page}>
      <TopBar />
      <main className={styles.main}>
        <WhatsappCta />
      </main>
      <Footer />
    </div>
  );
}
