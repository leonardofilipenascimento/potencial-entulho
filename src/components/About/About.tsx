import Image from "next/image";
import Section from "@/components/ui/Section/Section";
import Eyebrow from "@/components/ui/Eyebrow/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import styles from "./About.module.css";

export default function About() {
  return (
    <Section>
      <div className={styles.aboutGrid}>
        <div>
          <Eyebrow>Empresa de caçamba em Salvador</Eyebrow>
          <SectionTitle className={styles.title}>Quem é a Potencial Entulho?</SectionTitle>
          <p>
            A <b>Potencial Entulho</b> é especializada em <b>aluguel de caçamba de entulho em
            Salvador</b> e Região Metropolitana. Atuamos na <b>locação de caçambas
            estacionárias</b> para obras, reformas, demolições para toda a Grande Salvador.
          </p>
          <p>
            Com frota própria e equipe treinada, garantimos a <b>entrega rápida de caçamba</b> no
            prazo combinado e a <b>destinação correta dos resíduos sólidos</b>, em conformidade
            com a legislação ambiental vigente e as normas da ABNT.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/caçamba-estacionaria.png"
            alt="Caçamba estacionária de entulho da Potencial Entulho entregue em obra em Salvador"
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
          />
        </div>
      </div>
    </Section>
  );
}
