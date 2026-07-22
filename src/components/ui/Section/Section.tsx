import { ReactNode } from "react";
import Container from "@/components/ui/Container/Container";
import styles from "./Section.module.css";

type SectionProps = {
  children: ReactNode;
  alt?: boolean;
  className?: string;
  id?: string;
};

export default function Section({ children, alt = false, className, id }: SectionProps) {
  const sectionClassName = [styles.section, alt ? styles.alt : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={sectionClassName}>
      <Container>{children}</Container>
    </section>
  );
}
