import ChevronIcon from "@/components/icons/Chevron";
import Button from ".";

export default function ButtonViewMore() {
  return (
    <Button variant="secondary" className="view-more">
      <span>View more</span>
      <div className="icon">
        <ChevronIcon />
      </div>
    </Button>
  );
}
