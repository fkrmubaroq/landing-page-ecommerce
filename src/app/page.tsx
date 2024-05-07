import Footer from "./(section)/Footer";
import SectionArticle from "./(section)/SectionArticle";
import SectionHero from "./(section)/SectionHero";
import SectionOurProducts from "./(section)/SectionOurProducts";
import SectionOurSellers from "./(section)/SectionOurSellers";
import SectionTagline from "./(section)/SectionTagline";
import SectionWhatsNew from "./(section)/SectionWhatsNew";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionWhatsNew />
      <SectionTagline />
      <SectionOurProducts />
      <SectionOurSellers />
      <SectionArticle />
      <Footer />
    </>
  );
}
