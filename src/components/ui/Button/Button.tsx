import { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  children: ReactNode;
  targetBlank?: boolean;
};

export default function Button({ href, children, targetBlank = true }: ButtonProps) {
  return (
    <a
      className={styles.btn}
      href={href}
      target={targetBlank ? "_blank" : undefined}
      rel={targetBlank ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
