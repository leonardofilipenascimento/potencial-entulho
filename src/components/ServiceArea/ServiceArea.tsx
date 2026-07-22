import Section from "@/components/ui/Section/Section";
import Eyebrow from "@/components/ui/Eyebrow/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import Button from "@/components/ui/Button/Button";
import { whatsappLink } from "@/lib/site-data";
import styles from "./ServiceArea.module.css";

export default function ServiceArea() {
  return (
    <Section className={styles.area}>
      <Eyebrow>Área de Atendimento</Eyebrow>
      <SectionTitle>Aluguel de Caçamba em Salvador e Região</SectionTitle>
      <p>Entregamos caçambas de entulho em toda Salvador e Região Metropolitana</p>
      <Button href={whatsappLink}>Verificar Atendimento na Minha Região</Button>
    </Section>
  );
}
