import Image from "next/image";
import styles from "./page.module.css";
import Header from "../src/components"

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}
