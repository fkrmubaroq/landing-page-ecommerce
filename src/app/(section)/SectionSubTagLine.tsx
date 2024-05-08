import ButtonExplore from "@/components/ui/button/ButtonExplore";
import ButtonViewIntro from "@/components/ui/button/ButtonViewIntro";
import Image from "next/image";
import "./SectionSubTagLine.scss";

export default function SectionSubTagLine() {
  return (
    <section id="section-sub-tag-line">
      <RectangleIconLeft />
      <RectangleIconRight />
      <div className="section-sub-tag-line__wrapper">
        <div className="section-sub-tag-line__content">
          <div className="section-sub-tag-line__content-title">Adoption</div>
          <div className="section-sub-tag-line__content-sub-title">
            We Need Help. So Do They.
          </div>
          <div className="section-sub-tag-line__content-description">
            Adopt a pet and give it a home, it will be love you back
            unconditionally.
          </div>

          <div className="section-sub-tag-line__content-button--action">
            <ButtonExplore style={{ width:"163px"}}/>
            <ButtonViewIntro style={{ width: "161px"}} />
          </div>
        </div>

        <div className="section-sub-tag-line__image">
          <Image
            src="/images/section-sub-tag-line/image-1.webp"
            width={538}
            height={378}
            alt=""
            style={{ position: "relative" }}
          />
        </div>
      </div>
    </section>
  );
}

function RectangleIconLeft() {
  return (
    <div className="section-sub-tag-line__rectangle-left">
      <svg
        width="642"
        height="378"
        viewBox="0 0 642 378"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="782.292"
          height="635"
          rx="99"
          transform="matrix(-0.904604 0.426252 0.426252 0.904604 403.665 -360)"
          fill="#FCEED5"
        />
      </svg>
    </div>
  );

}

function RectangleIconRight() {
  return (
    <div className="section-sub-tag-line__rectangle-right">
      <svg
        width="701"
        height="315"
        viewBox="0 0 701 315"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="0.3"
          width="787.54"
          height="787.54"
          rx="99"
          transform="matrix(-0.880881 0.473338 0.473338 0.880881 659.507 -34.2795)"
          fill="url(#paint0_linear_78_489)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_78_489"
            x1="0"
            y1="0"
            x2="958.452"
            y2="218.934"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0616933" stopColor="#FCEED5" />
            <stop offset="0.751415" stopColor="#FCEED5" />
            <stop offset="1" stopColor="#FFE7BA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

}