const rotateIcon = {
  right: "rotate(0deg)", // default
  bottom: "rotate(90deg)"
}
export default function ChevronIcon({ rotate = "right"} : { rotate?: "right" | "bottom" }) {
  return (
    <svg
      style={{ transform: rotateIcon[rotate] }}
      width="7"
      height="10"
      viewBox="0 0 7 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 1L5.5 5L1.5 9"
        stroke="#003459"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

}