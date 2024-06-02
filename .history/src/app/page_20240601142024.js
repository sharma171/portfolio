import "./page.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeBlog from "../components/HomeBlog";

export default function Home() {
  return (
    <main className="main">
      <Header />
      <Hero />
      <HomeBlog />
    </main>
  );
}
