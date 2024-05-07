import ButtonExplore from "@/components/ui/button/ButtonExplore";
import ButtonViewIntro from "@/components/ui/button/ButtonViewIntro";
import Image from "next/image";
import "./SectionTagLine.scss";

export default function SectionTagline() {
  return (
    <section id="section-tag-line">
      <div className="section-tag-line__card">
        <RectangleIcon />
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
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function RectangleIcon() {
  return (
    <div className="section-tag-line__card__rectangle">
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
  );
}
