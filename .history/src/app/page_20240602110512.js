import "./page.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeBlog from "../components/HomeBlog";
import Featured from "../components/Featuredworks";
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="main">
      <Header />
      <Hero />
      <HomeBlog />
      <section className="featured-home">
        <div className="container">
          <div className="top-heading">
            <h3 className="head">
              Featured Works
            </h3>
          </div>
            <Featured/>
        </div>
      </section>
      <Footer />
    </main>
  );
}
