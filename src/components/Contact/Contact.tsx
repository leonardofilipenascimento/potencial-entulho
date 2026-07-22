import Section from "@/components/ui/Section/Section";
import Eyebrow from "@/components/ui/Eyebrow/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import { siteInfo } from "@/lib/site-data";
import ContactItem from "./ContactItem";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <Section className={styles.contact}>
      <Eyebrow>Fale conosco</Eyebrow>
      <SectionTitle className={styles.title}>
        Contato para Aluguel de Caçamba em Salvador
      </SectionTitle>
      <div className={styles.contactGrid}>
        <div>
          <ContactItem label="Endereço" value={siteInfo.address} />
          <ContactItem label="WhatsApp — Peça sua Caçamba" value={siteInfo.phone} />
          <ContactItem label="E-mail" value={siteInfo.email} />
          <ContactItem label="Horário de Atendimento" value={siteInfo.hours} />
        </div>
        <div className={styles.mapWrapper}>
          <iframe
            src="https://maps.google.com/maps?q=Cabula%2C%20Salvador%2C%20Bahia%2C%20Brasil&t=m&z=15&output=embed&iwloc=near"
            loading="lazy"
            title="Localização Potencial Entulho"
          />
        </div>
      </div>
    </Section>
  );
}
