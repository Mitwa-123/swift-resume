// "use client";

// import { Sparkles, ChevronLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// export default function LinkedinStep({ onBack, onNext }) {
//   return (
//     <div className="relative p-6 flex flex-col items-center text-center gap-4">
//       <div className="flex p-2.5 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
//         <Sparkles className="size-5 text-blue-600" />
//       </div>
//       <div className="mb-1.5">
//         <div className="flex items-center justify-center gap-2 w-full mb-1.5">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={onBack}
//             className="h-8 w-8 rounded-lg border bg-background shadow-sm"
//           >
//             <ChevronLeft className="h-4 w-4 text-slate-600" />
//           </Button>
//           <h2 className="text-xl font-bold text-slate-900 leading-tight">
//             Want to use your LinkedIn profile?
//           </h2>
//         </div>

//         <p className="text-sm text-slate-500 leading-relaxed max-w-85">
//           Paste your LinkedIn profile URL below and our AI will use it to write
//           your resume.
//         </p>
//       </div>

//       <div className="w-full">
//         <Input
//           type="url"
//           placeholder="Your LinkedIn profile URL"
//           className="h-12 border-slate-200 bg-slate-50/50 focus-visible:ring-blue-600"
//         />
//       </div>

//       <div className="flex w-full gap-3 pt-2">
//         <Button
//           variant="outline"
//           onClick={onBack}
//           className="flex-1 h-11 border-slate-200 text-slate-700 font-semibold"
//         >
//           Back
//         </Button>
//         <Button
//           variant="outline"
//           className="flex-1 h-11 border-slate-200 text-slate-700 font-semibold"
//         >
//           Add manually
//         </Button>
//         <Button
//           onClick={onNext}
//           className="flex-1 h-11 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-200"
//         >
//           Import profile
//         </Button>
//       </div>
//     </div>
//   );
// }
