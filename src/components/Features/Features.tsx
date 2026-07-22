import Section from "@/components/ui/Section/Section";
import Eyebrow from "@/components/ui/Eyebrow/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import FeatureCard from "./FeatureCard";
import { features } from "./features-data";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <Section alt>
      <Eyebrow>Por que escolher a Potencial Entulho</Eyebrow>
      <SectionTitle>Referência em Locação de Caçamba em Salvador e Região</SectionTitle>
      <div className={styles.features}>
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </Section>
  );
}
