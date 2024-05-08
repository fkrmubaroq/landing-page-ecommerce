import PlayIcon from "@/components/icons/Play";
import Button from ".";
import "./ButtonViewIntro.scss";

export default function ButtonViewIntro({ style }: { style?: React.CSSProperties }) {
  return (
    <Button variant="secondary" className="button-view-intro" style={style}>
      <div>View Intro</div>
      <PlayIcon />
    </Button>
  );
}