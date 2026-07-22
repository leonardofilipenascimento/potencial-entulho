import { ReactNode } from "react";
import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionTitle({ children, className }: SectionTitleProps) {
  const combinedClassName = className ? `${styles.title} ${className}` : styles.title;

  return <h2 className={combinedClassName}>{children}</h2>;
}
