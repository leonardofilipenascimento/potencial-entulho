import styles from "./ContactItem.module.css";

type ContactItemProps = {
  label: string;
  value: string;
};

export default function ContactItem({ label, value }: ContactItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}
