import styles from "./FaqItem.module.css";

export type FaqEntry = {
  question: string;
  answer: string;
};

type FaqItemProps = FaqEntry & {
  defaultOpen?: boolean;
};

export default function FaqItem({ question, answer, defaultOpen = false }: FaqItemProps) {
  return (
    <details className={styles.item} open={defaultOpen}>
      <summary>{question}</summary>
      <p>{answer}</p>
    </details>
  );
}
