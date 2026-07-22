import Section from "@/components/ui/Section/Section";
import Eyebrow from "@/components/ui/Eyebrow/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import JsonLd from "@/components/JsonLd/JsonLd";
import { getFaqPageSchema } from "@/lib/schema";
import FaqItem from "./FaqItem";
import { faqEntries } from "./faq-data";

export default function Faq() {
  return (
    <Section alt>
      <JsonLd data={getFaqPageSchema(faqEntries)} />
      <Eyebrow>Perguntas Frequentes</Eyebrow>
      <SectionTitle>Dúvidas sobre Aluguel de Caçamba em Salvador</SectionTitle>
      {faqEntries.map((entry, index) => (
        <FaqItem key={entry.question} {...entry} defaultOpen={index === 0} />
      ))}
    </Section>
  );
}
