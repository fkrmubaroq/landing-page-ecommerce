import cn from "classnames";
import "./index.scss";

export default function Card({ className, children }: React.ComponentPropsWithoutRef<"div">) {
  return <div className={cn("card", className)}>
    {children}
  </div>;
}
