import TitleSection from "@/components/ui/TitleSection";
import ButtonViewMore from "@/components/ui/button/ButtonViewMore";
import Card from "@/components/ui/card";
import Image from "next/image";
import "./SectionWhatsNew.scss";

type CardItem = {
  image: string;
  title: string;
  gene: string;
  age: string;
  price: string;
};

const cardItems: CardItem[] = [
  {
    image: "/images/section-whats-new/image-1.png",
    title: "MO231 - Pomeranian White",
    gene: "Male",
    age: "02 months",
    price: "6.900.000 VND",
  },
  {
    image: "/images/section-whats-new/image-2.png",
    title: "MO502 - Poodle Tiny Yellow",
    gene: "Female",
    age: "02 months",
    price: "3.900.000 VND",
  },
  {
    image: "/images/section-whats-new/image-3.png",
    title: "MO102 - Poodle Tiny Sepia",
    gene: "Male",
    age: "02 months",
    price: "4.000.000 VND",
  },
  {
    image: "/images/section-whats-new/image-4.png",
    title: "MO512 - Alaskan Malamute Grey",
    gene: "Male",
    age: "03 months",
    price: "8.900.000 VND",
  },
  {
    image: "/images/section-whats-new/image-5.png",
    title: "MO231 - Pembroke Corgi Cream",
    gene: "Male",
    age: "03 months",
    price: "7.900.000 VND",
  },
  {
    image: "/images/section-whats-new/image-6.png",
    title: "MO502 - Pembroke Corgi Tricolor",
    gene: "Female",
    age: "02 months",
    price: "6.900.000 VND",
  },
  {
    image: "/images/section-whats-new/image-7.png",
    title: "MO102 -  Pomeranian Grey",
    gene: "Female",
    age: "02 months",
    price: "6.500.000 VND",
  },
  {
    image: "/images/section-whats-new/image-8.png",
    title: "MO512 - Poodle Tiny Dairy Cow",
    gene: "Male",
    age: "03 months",
    price: "5.000.000 VND",
  },
];
export default function SectionWhatsNew() {
  return (
    <section id="section-whats-new">
      <TitleSection
        title="Whats new?"
        subTitle="Take A Look At Some Of Our Pets"
      />

      <div className="section-whats-new__items">
        {cardItems.map((item, key) => (
          <CardItem key={key} data={item} />
        ))}
      </div>

      <ButtonViewMore />
    </section>
  );
}

function CardItem({ data }: { data: CardItem }) {
  return (
    <Card>
      <Image
        className="rounded-img w-full"
        src={data.image}
        width={169}
        height={169}
        alt=""
      />
      <div className="section-whats-new__content">
        <div className="title">{data.title}</div>
        <div className="gene">
          <span>Gene:</span>{" "}
          <span className="bold">{data.gene}</span>
        </div>
        <div className="age">
          <span>Age:</span>{" "}
          <span className="bold">{data.age}</span>
        </div>
        <div className="price">{data.price}</div>
      </div>
    </Card>
  );
}
