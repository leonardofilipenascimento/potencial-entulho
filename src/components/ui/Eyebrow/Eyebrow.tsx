import { ReactNode } from "react";
import styles from "./Eyebrow.module.css";

export default function Eyebrow({ children }: { children: ReactNode }) {
  return <div className={styles.eyebrow}>{children}</div>;
}
