import Container from "@/components/ui/Container/Container";
import Button from "@/components/ui/Button/Button";
import { whatsappLink } from "@/lib/site-data";
import Stats from "./Stats";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <span className={styles.badgeRegion}>
          Salvador · Lauro de Freitas · Região Metropolitana
        </span>
        <h1 className={styles.title}>
          Aluguel de Caçamba de Entulho em Salvador — Entrega Rápida e Preço Justo
        </h1>
        <p className={styles.description}>
          Locação de caçambas estacionárias para obras, reformas e demolições em Salvador e Região
          Metropolitana. Remoção de entulho com destinação ambientalmente correta, agilidade na
          entrega e o melhor custo-benefício da Bahia.
        </p>
        <Button href={whatsappLink}>Solicitar Orçamento</Button>
        <Stats />
      </Container>
    </section>
  );
}
