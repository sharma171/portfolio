import "../page.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FeaturedWorks from "@/components/Featuredworks";

export default function WorkCategory() {
    return (
        <>
        <Header/>
        <section className="blog-category">
                <div className="container">
                    <div className="cat-head">
                        <h3>Blog</h3>
                    </div>
                    <FeaturedWorks />
                </div>
        </section>
        <Footer/>
        </>
    )
}