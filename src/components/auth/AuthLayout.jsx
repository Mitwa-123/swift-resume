import resumePage from '../../assets/images/resume-page.png'

export default function AuthLayout({ children }) {
  return (
    <div className="grid grid-cols-2 h-screen overflow-hidden ">
      <div className="flex items-center justify-center">{children}</div>

      <div className="">
        <img src={resumePage} className="w-full  h-full object-cover" />
      </div>
    </div>
  );
}
