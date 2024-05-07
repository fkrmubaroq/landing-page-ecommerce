import cn from "classnames";
import "./TitleSection.scss";

export default function TitleSection({ column, title, subTitle }: { column?: boolean, title: string, subTitle: string }) {
  return (
    <div className={cn("title-section", { "column": column })}>
      <div className="title">{title}</div>
      <div className="sub-title">{subTitle}</div>
    </div>
  );
}