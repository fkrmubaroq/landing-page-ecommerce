import PlayIcon from "@/components/icons/Play";
import Button from ".";
import "./ButtonViewIntro.scss";

export default function ButtonViewIntro() {
  return (
    <Button variant="secondary" className="button-view-intro">
      <div>View Intro</div>
      <PlayIcon />
    </Button>
  );
}