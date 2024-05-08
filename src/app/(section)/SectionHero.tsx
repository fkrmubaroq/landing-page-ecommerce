"use client";
import Header from "@/components/layout/Header";
import ButtonExplore from "@/components/ui/button/ButtonExplore";
import ButtonViewIntro from "@/components/ui/button/ButtonViewIntro";
import Image from "next/image";
import "./SectionHero.scss";
export default function SectionHero() {
  return (
    <section id="section-hero">
      <Header />
      <div className="section-hero__wrapper">
        <div className="section-hero__content">
          <div className="column-1">
            <h1 className="section-hero__tagline">One More Friend</h1>
            <div className="section-hero__subline">Thousands More Fun!</div>
            <div className="section-hero__description">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </div>

            <div className="section-hero__button--action">
              <ButtonViewIntro />
              <ButtonExplore />
            </div>
          </div>

          <div className="column-2">
            <div className="section-hero__image">
              <Image
                src="/images/section-hero/image-1-desktop.webp"
                width={944}
                height={693}
                alt=""
                id="desktop"
              />
              <Image
                src="/images/section-hero/image-1-mobile.webp"
                width={414}
                height={386}
                alt=""
                id="mobile"
              />
              <RectangleCards />
            </div>
          </div>
        </div>
        <RectangleSingleCard />
      </div>
    </section>
  );
}

function RectangleCards() {
  return (
    <>
      <div className="rectangle_cards mobile" >
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
      <div className="rectangle_cards desktop">
        <svg
          width="798"
          height="546"
          viewBox="0 0 798 546"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="89.2182"
            y="119"
            width="635"
            height="635"
            rx="99"
            transform="rotate(9.35484 89.2182 119)"
            fill="#003459"
          />
          <rect
            x="255.67"
            y="31"
            width="635"
            height="635"
            rx="99"
            transform="rotate(25.23 255.67 31)"
            fill="#F7DBA7"
          />
          <rect
            x="152.192"
            y="-1"
            width="14.6264"
            height="14.6264"
            rx="4"
            transform="rotate(20.792 152.192 -1)"
            fill="#F7DBA7"
          />
          <rect
            x="118"
            y="61.678"
            width="27.4976"
            height="27.4976"
            rx="9"
            transform="rotate(-22.8503 118 61.678)"
            fill="#F7DBA7"
          />
          <rect
            x="117"
            y="74.6443"
            width="21.4707"
            height="21.4707"
            rx="6"
            transform="rotate(-43.0046 117 74.6443)"
            fill="#002A48"
          />
        </svg>
      </div>
    </>
  );
}

function RectangleSingleCard() {
  return (
    <div className="rectangle_single_card">
      <svg
        width="751"
        height="93"
        viewBox="0 0 751 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="0.4"
          x="438.334"
          y="-38"
          width="635"
          height="635"
          rx="99"
          transform="rotate(56.47 438.334 -38)"
          fill="#F7DBA7"
        />
      </svg>
    </div>
  );
}
