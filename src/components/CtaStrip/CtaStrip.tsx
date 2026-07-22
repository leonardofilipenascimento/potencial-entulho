import Container from "@/components/ui/Container/Container";
import Button from "@/components/ui/Button/Button";
import { whatsappLink } from "@/lib/site-data";
import styles from "./CtaStrip.module.css";

export default function CtaStrip() {
  return (
    <section className={styles.ctaStrip}>
      <Container>
        <h2 className={styles.title}>Precisa de Caçamba de Entulho em Salvador Agora?</h2>
        <p className={styles.description}>
          Solicite seu orçamento agora pelo WhatsApp. Entregamos em toda Salvador, Lauro de
          Freitas e Região Metropolitana!
        </p>
        <Button href={whatsappLink}>Fale com nosso time</Button>
      </Container>
    </section>
  );
}
