import "./page.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
    </main>
  );
}
