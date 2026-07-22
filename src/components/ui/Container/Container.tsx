import { ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  const combinedClassName = className ? `${styles.wrap} ${className}` : styles.wrap;

  return <div className={combinedClassName}>{children}</div>;
}
