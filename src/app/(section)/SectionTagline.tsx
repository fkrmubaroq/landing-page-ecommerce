import ButtonExplore from "@/components/ui/button/ButtonExplore";
import ButtonViewIntro from "@/components/ui/button/ButtonViewIntro";
import Image from "next/image";
import "./SectionTagLine.scss";

export default function SectionTagline() {
  return (
    <>
      <SectionTagLineMobile />
      <SectionTagLineDesktop />
    </>
  );
}

function SectionTagLineDesktop() {
  return (
    <section id="section-tag-line-desktop">
      <RectangleIconBottom />
      <RectangleIconTop />
      <div className="section-tag-line-desktop__wrapper">
        <div className="shrink-0 section-tag-line-desktop__image">
        <Image
          src="/images/section-tag-line/image-1.webp"
          width={524}
          height={349}
          alt=""
          style={{ position: "relative" }}
          />
          </div>

        <div className="section-tag-line-desktop__content">
          <div className="section-tag-line-desktop__content-title">
            One More Friend
          </div>
          <div className="section-tag-line-desktop__content-sub-title">
            Thousands More Fun!
          </div>
          <div className="section-tag-line-desktop__content-description">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </div>

          <div className="section-tag-line-desktop__content-button--action">
            <ButtonViewIntro />
            <ButtonExplore />
          </div>
        </div>
      </div>
    </section>
  );
}
function SectionTagLineMobile() {
  return (
    <section id="section-tag-line-mobile">
      <div className="section-tag-line__card">
        <RectangleIconTop />
        <div className="section-tag-line__card__content">
          <div className="section-tag-line__card__content__title">
            One More Friend
          </div>
          <div className="section-tag-line__card__content__sub-title">
            Thousands More Fun!
          </div>
          <div className="section-tag-line__card__content__description">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </div>

          <div className="section-tag-line__button--action">
            <ButtonViewIntro />
            <ButtonExplore />
          </div>

          <div className="section-tag-line__image-mobile">
            <Image
              src="/images/section-tag-line/image-1.webp"
              width={524}
              height={349}
              alt=""
              style={{ position: "relative" }}
            />

            <RectangleIconBottom />
          </div>
        </div>
      </div>
    </section>
  );
}

function RectangleIconTop() {
  return (
    <>
      <div className="section-tag-line__card__rectangle-top mobile">
        <svg
          width="382"
          height="375"
          viewBox="0 0 382 375"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-79.3746"
            y="-354"
            width="605.027"
            height="635"
            rx="75"
            transform="rotate(11.4104 -79.3746 -354)"
            fill="#FCEED5"
          />
        </svg>
      </div>
      <div className="section-tag-line__card__rectangle-top desktop">
        <svg
          width="642"
          height="378"
          viewBox="0 0 642 378"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="238.67"
            y="-360"
            width="782.292"
            height="635"
            rx="99"
            transform="rotate(25.23 238.67 -360)"
            fill="#FCEED5"
          />
        </svg>
      </div>
    </>
  );
}
function RectangleIconBottom() {
  return (
    <>
      <div className="section-tag-line__card__rectangle-bottom mobile">
        <svg
          width="382"
          height="205"
          viewBox="0 0 382 205"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="41.4932"
            y="-34.2795"
            width="787.54"
            height="787.54"
            rx="99"
            transform="rotate(28.2512 41.4932 -34.2795)"
            fill="#002A48"
          />
        </svg>
      </div>
      <div className="section-tag-line__card__rectangle-bottom desktop">
        <svg
          width="701"
          height="315"
          viewBox="0 0 701 315"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="41.4933"
            y="-34.2795"
            width="787.54"
            height="787.54"
            rx="99"
            transform="rotate(28.2512 41.4933 -34.2795)"
            fill="#002A48"
          />
        </svg>
      </div>
    </>
  );
}
