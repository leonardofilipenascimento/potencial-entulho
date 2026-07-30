import Container from "@/components/ui/Container/Container";
import Button from "@/components/ui/Button/Button";
import { whatsappLink } from "@/lib/site-data";
import styles from "./FaleConosco.module.css";

export default function WhatsappCta() {
  return (
    <section className={styles.section}>
      <Container>
        <h1 className={styles.title}>Fale com a Potencial Entulho</h1>
        <p className={styles.description}>
          Toque no botão abaixo para solicitar seu orçamento de aluguel de caçamba estacionária
          direto no WhatsApp.
        </p>
        <Button href={whatsappLink}>Falar no WhatsApp</Button>
      </Container>
    </section>
  );
}
