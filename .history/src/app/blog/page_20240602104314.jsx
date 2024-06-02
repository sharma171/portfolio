import "../page.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogCategory from "../../components/BlogCategory"

export default function BlogPage() {
    return (
        <main className="main">
            <Header />
            <section className="blog-category">
                <div className="container">
                    <BlogCategory />
                </div>
            </section>
            <Footer />
        </main>
    )
}