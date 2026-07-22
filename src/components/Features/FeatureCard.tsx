import Image from "next/image";
import styles from "./FeatureCard.module.css";

export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: Feature) {
  return (
    <div className={styles.card}>
      <Image className={styles.icon} src={icon} alt="" width={44} height={44} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
