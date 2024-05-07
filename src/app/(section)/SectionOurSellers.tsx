"use client";
import TitleSection from "@/components/ui/TitleSection";
import ButtonViewMore from "@/components/ui/button/ButtonViewMore";
import { useMobileScreen } from "@/lib/hooks";
import Image from "next/image";
import "./SectionOurSellers.scss";

const dataSellers = [
  {
    image: "/images/section-our-sellers/image-1.png",
    title: "Logo Sheba",
    width: 88,
    height: 64,
  },
  {
    image: "/images/section-our-sellers/image-2.png",
    title: "Logo Whiskas",
    width: 114,
    height: 114,
  },
  {
    image: "/images/section-our-sellers/image-3.png",
    title: "Logo Bakers",
    width: 104,
    height: 46,
  },
  {
    image: "/images/section-our-sellers/image-4.png",
    title: "Logo Felix",
    width: 92,
    height: 64,
  },
  {
    image: "/images/section-our-sellers/image-5.png",
    title: "Logo Good Boy",
    width: 92,
    height: 92,
  },
  {
    image: "/images/section-our-sellers/image-6.png",
    title: "Logo Butcher's",
    width: 130,
    height: 56,
  },
  {
    image: "/images/section-our-sellers/image-7.png",
    title: "Logo Pedigree",
    width: 116,
    height: 72,
  },
];
export default function SectionOurSellers() {
  const isMobileScreen = useMobileScreen();
  if (isMobileScreen) return <></>;
  return (
    <section id="section-our-sellers">
      <div className="flex justify-between " style={{ marginBottom: "15px" }}>
        <TitleSection
          title="Proud to be part of"
          subTitle="Pet Sellers"
          column
        />
        <div style={{ width: "210px" }}>
          <ButtonViewMore text="View all our sellers" />
        </div>
      </div>
      <div className="flex" style={{ columnGap: "20px" }}>
        {dataSellers.map((item, key) => (
          <div
            key={key}
            className="flex-centered relative"
            style={{ width: "151px", height: "112px" }}
          >
            <Image
              key={key}
              src={item.image}
              alt={item.title}
              width={item.width}
              height={item.height}
              className="object-cover"
              style={{ verticalAlign: "middle" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
