"use client";
import GiftIcon from "@/components/icons/Gift";
import TitleSection from "@/components/ui/TitleSection";
import Button from "@/components/ui/button";
import ButtonViewMore from "@/components/ui/button/ButtonViewMore";
import Card from "@/components/ui/card";
import { useMobileScreen } from "@/lib/hooks";
import Image from "next/image";
import "./SectionOurProducts.scss";

type CardItem = {
  image: string;
  title: string;
  category: string;
  size: string;
  price: string;
  free: string;
};
const cardItems: CardItem[] = [
  {
    image: "/images/section-our-products/image-1.png",
    title: "Reflex Plus Adult Cat Food Salmon",
    category: "Dog Food",
    size: "385gm",
    price: "140.000 VND",
    free: "Free Toy & Free Shaker",
  },
  {
    image: "/images/section-our-products/image-2.png",
    title: "Reflex Plus Adult Cat Food Salmon",
    category: "Cat Food",
    size: "1.5kg",
    price: "165.000 VND",
    free: "Free Toy & Free Shaker",
  },
  {
    image: "/images/section-our-products/image-3.png",
    title: "Cat scratching ball toy kitten sisal rope ball",
    category: "Toy",
    size: "",
    price: "1.100.000 VND",
    free: "Free Cat Food",
  },
  {
    image: "/images/section-our-products/image-4.png",
    title: "Cute Pet Cat Warm Nest",
    category: "Toy",
    size: "",
    price: "410.000 VND",
    free: "Free Cat Food",
  },
  {
    image: "/images/section-our-products/image-5.png",
    title: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
    category: "Dog Food",
    size: "385gm",
    price: "350.000 VND",
    free: "Free Toy & Free Shaker",
  },
  {
    image: "/images/section-our-products/image-6.png",
    title: "Costumes Fashion Pet Clother Cowboy Rider",
    category: "Costume",
    size: "1.5kg",
    price: "500.000 VND",
    free: "Free Toy & Free Shaker",
  },
  {
    image: "/images/section-our-products/image-7.png",
    title: "Costumes Chicken Drumsti ck Headband",
    category: "Costume",
    size: "",
    price: "400.000 VND",
    free: "Free Cat Food",
  },
  {
    image: "/images/section-our-products/image-8.png",
    title: "Plush Pet Toy",
    category: "Toy",
    size: "",
    price: "250.000 VND",
    free: "Free Food & Shaker",
  },
];
export default function SectionOurProducts() {
  const isMobileScreen = useMobileScreen();
  if(isMobileScreen) return <></>;
  return (
    <section id="section-our-products">
      <div className="flex justify-between ">
        <TitleSection
          title="Hard to choose right products for your pets?"
          subTitle="Our Products"
        />
        <div style={{ width: "160px" }}>
          <ButtonViewMore />
        </div>
      </div>

      <div className="section-our-products__items">
        {cardItems.map((item, key) => (
          <CardItem key={key} data={item} />
        ))}
      </div>
    </section>
  );
}

function CardItem({ data }: { data: CardItem }) {
  return (
    <Card>
      <Image
        className="rounded-img w-full"
        src={data.image}
        width={264}
        height={264}
        alt=""
      />
      <div className="flex flex-col" style={{ rowGap: "10px", padding: "8px" }}>
        <div className="section-our-products__content">
          <div className="title line-clamp-2">{data.title}</div>
          <div className="description">
            <span>Product:</span> <span className="bold">{data.category}</span>
            <span className="bold">·</span>
            {data.size && (
              <>
                <span>Size:</span> <span className="bold">{data.size}</span>
              </>
            )}
          </div>

          <div className="price">{data.price}</div>
        </div>
        <Button className="w-full button-gift">
          <GiftIcon />
          <span>·</span>
          <span>{data.free}</span>
        </Button>
      </div>
    </Card>
  );
}
