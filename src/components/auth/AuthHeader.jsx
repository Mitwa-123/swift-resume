"use client";

export default function AuthHeader({ title, subtitle }) {
  return (
    <header>
      <img
        src="/images/swift-logo.svg"
        alt="facebook logo"
        className="mb-8.5"
      />

      <h1 className="text-3xl font-extrabold leading-9 text-sidebar-foreground mb-2.5">
        {title}
      </h1>
      <p className="text-sm font-medium leading-5 text-sidebar-foreground mb-8.5">
        {subtitle}
      </p>
    </header>
  );
}
