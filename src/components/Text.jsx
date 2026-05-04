export default function Text({
  children,
  variant = "p",
  color = "default",
  weight = "normal",
  className = "",
}) {
  const variants = {
    h1: "text-sm sm:text-base leading-none",
    h2: "text-base sm:text-lg leading-none",
    h3: "text-sm sm:text-base leading-6",
  };

  const colors = {
    default: "",
    muted: "text-muted-foreground",
  };

  const weights = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const Comp = variant === "h1" ? "h1" : variant === "h2" ? "h2" : "p";

  return (
    <Comp
      className={`${variants[variant]} ${colors[color]} ${weights[weight]} ${className}`}
    >
      {children}
    </Comp>
  );
}
