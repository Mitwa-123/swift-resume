export default function AuthHeader({ title, subtitle }) {
  return (
    <header>
      <h1 className="text-3xl font-extrabold text-muted-foreground">{title}</h1>
      <p className="text-sm font-medium text-black">{subtitle}</p>
    </header>
  );
}
