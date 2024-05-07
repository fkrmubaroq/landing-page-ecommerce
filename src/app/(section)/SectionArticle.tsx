import TitleSection from "@/components/ui/TitleSection";
import ButtonViewMore from "@/components/ui/button/ButtonViewMore";
import Card from "@/components/ui/card";
import Image from "next/image";
import "./SectionArticle.scss";

type CardItem = {
  image: string;
  category: string;
  title: string;
  description: string;
};

const cardItems: CardItem[] = [
  {
    image: "/images/section-article/image-1.webp",
    category: "Pet knowledge",
    title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
    description:
      "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
  },
  {
    image: "/images/section-article/image-2.webp",
    category: "Pet knowledge",
    title: "Dog Diet You Need To Know",
    description:
      "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
  },
  {
    image: "/images/section-article/image-3.webp",
    category: "Pet knowledge",
    title:
      "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
    description:
      "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
  },
];
export default function SectionArticle() {
  return (
    <section id="section-article">
      <TitleSection
        title="You already know ?"
        subTitle="Useful pet knowledge"
      />
      <div className="section-article__items">
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
        width={364}
        height={245}
        alt=""
      />
      <div className="section-article__content">
        <div className="category">{data.category}</div>
        <div className="title">{data.title}</div>
        <div className="description line-clamp-3">{data.description}</div>
      </div>
    </Card>
  );
}
