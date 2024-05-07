import Header from "@/components/layout/Header";
import ButtonExplore from "@/components/ui/button/ButtonExplore";
import ButtonViewIntro from "@/components/ui/button/ButtonViewIntro";
import Image from "next/image";
import "./SectionHero.scss";
export default function SectionHero() {
  return (
    <section id="section-hero">
      <Header />
      <div className="section-hero__content">
        <h1 className="section-hero__tagline">One More Friend</h1>
        <div className="section-hero__subline">Thousands More Fun!</div>
        <div className="section-hero__description">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </div>

        <div className="section-hero__button--action">
          <ButtonViewIntro />
          <ButtonExplore />
        </div>

        <div className="section-hero__image-mobile">
          <Image src="/images/hero-image.webp" width={414} height={386} alt="" />
          <RectangleCards />
        </div>
      </div>
    </section>
  );
}

function RectangleCards() {
  return (
    <div className="rectangle_cards">
      <svg
        width="399"
        height="371"
        viewBox="0 0 399 371"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="51.2065"
          y="74.2032"
          width="528.983"
          height="528.983"
          rx="48"
          transform="rotate(5.36702 51.2065 74.2032)"
          fill="#003459"
        />
        <rect
          x="210.48"
          y="-15"
          width="528.983"
          height="528.983"
          rx="48"
          transform="rotate(25.23 210.48 -15)"
          fill="#F7DBA7"
        />
      </svg>
    </div>
  );

}