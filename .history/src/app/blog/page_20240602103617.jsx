import "../page.css";
import "Header" from "../../components/Header";
import "Footer" from "../../components/Footer";

export default function BlogPage() {
    return (
        <main className="main">
            <Header />
            <section className="blog-category"></section>
            <Footer />
        </main>
    )
}