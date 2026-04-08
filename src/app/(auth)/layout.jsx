"use client";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="w-1/2 flex items-center justify-center p-4">
        <div className="w-full flex justify-center">{children}</div>
      </div>

      <div className="w-1/2 h-full p-7 pl-0">
        <div className="w-full h-full overflow-hidden rounded-3xl border border-border">
          <img
            src="/images/resume-page.png"
            alt="facebook logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
