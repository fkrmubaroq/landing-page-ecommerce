import ChevronIcon from "@/components/icons/Chevron";
import Button from ".";

export default function ButtonViewMore({ text = "View more" }: { text?: string }) {
  return (
    <Button variant="secondary" className="view-more">
      <span>{text}</span>
      <div className="icon">
        <ChevronIcon />
      </div>
    </Button>
  );
}
