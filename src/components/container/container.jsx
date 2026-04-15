
export default function Container({ children, className = "" }) {
  return (
    <div className="w-full">
      <div className={`max-w-325 mx-auto px-2 sm:px-5 ${className}`}>
        {children}
      </div>
    </div>
  );
}