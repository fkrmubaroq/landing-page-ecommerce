import cn from "classnames";
const listVariant = {
  primary: "btn-primary",
  secondary: "btn-secondary",
};
type Variant = keyof typeof listVariant;
export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"button"> & { variant?: Variant }) {
  return (
    <button className={cn("btn", listVariant[variant], className)} {...props}>
      {children}
    </button>
  );
}
