import "./page.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeBlog from "../components/HomeBlog";
import Featured from "../components/Featuredworks";

export default function Home() {
  return (
    <main className="main">
      <Header />
      <Hero />
      <HomeBlog />
      <section className="featured-home">
        <div className="container">
          <Featured/>
        </div>
      </section>
    </main>
  );
}
