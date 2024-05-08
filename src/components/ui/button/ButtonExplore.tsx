import Button from ".";

export default function ButtonExplore({ style }: { style?: React.CSSProperties }) {
  return (
    <Button variant="primary" className="button-explore" style={style}>
      Explore Now
    </Button>
  );
}