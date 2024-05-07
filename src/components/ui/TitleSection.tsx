import "./TitleSection.scss";

export default function TitleSection({ title, subTitle }: { title: string, subTitle: string }) {
  return (
    <div className="title-section">
      <div className="title">{title}</div>
      <div className="sub-title">{subTitle}</div>
    </div>
  );
}