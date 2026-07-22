import styles from "./Stats.module.css";

type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: "500+", label: "Obras Atendidas" },
  { value: "24h", label: "Entrega de Caçamba" },
  { value: "100%", label: "Destinação Legal" },
  { value: "4.6★", label: "Avaliação no Google" },
];

export default function Stats() {
  return (
    <div className={styles.stats}>
      {stats.map((stat) => (
        <div className={styles.stat} key={stat.label}>
          <h3>{stat.value}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
