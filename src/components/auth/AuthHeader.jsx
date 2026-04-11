"use client";

export default function AuthHeader({ title, subtitle }) {
  return (
    <div className="space-y-6 sm:space-y-7 lg:space-y-8.5">
      <img src="/images/swift-logo.svg" alt="swift logo" />
      <h1 className=" text-2xl lg:text-3xl font-extrabold leading-tight lg:leading-9 text-sidebar-foreground mb-2.5 font-cabinet">
        {title}
      </h1>
      <p className="text-sm font-medium leading-5 text-slate-700 max-w-md mx-auto lg:mx-0">
        {subtitle}
      </p>
      <div />
    </div>
  );
}
