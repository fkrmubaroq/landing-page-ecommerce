import SectionArticle from "./(section)/SectionArticle";
import SectionHero from "./(section)/SectionHero";
import SectionTagline from "./(section)/SectionTagline";
import SectionWhatsNew from "./(section)/SectionWhatsNew";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionWhatsNew />
      <SectionTagline />
      <SectionArticle />
    </>
  );
}
