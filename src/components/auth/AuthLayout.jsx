import resumePage from "../../assets/images/resume-page.png";

export default function AuthLayout({ children }) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="w-1/2 flex items-center justify-center p-4">
        <div className="w-full flex justify-center">{children}</div>
      </div>

      <div className="w-1/2 h-full p-7 pl-0">
        <div className="w-full h-full overflow-hidden rounded-3xl border border-border">
          <img
            src={resumePage}
            alt="Resume Preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
