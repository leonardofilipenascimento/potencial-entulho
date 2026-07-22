import Container from "@/components/ui/Container/Container";
import { siteInfo } from "@/lib/site-data";
import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <Container className={styles.list}>
        <span className={styles.item}>📍 {siteInfo.address}</span>
        <span className={styles.item}>📞 {siteInfo.phone}</span>
        <span className={styles.item}>✉ {siteInfo.email}</span>
        <span className={styles.item}>🕐 {siteInfo.hours}</span>
      </Container>
    </div>
  );
}
