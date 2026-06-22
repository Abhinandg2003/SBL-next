// import { useEffect, useState } from "react";

// export default function CookieConsent() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const saved = localStorage.getItem("cookie_consent");
//     if (saved) setVisible(true);
//   }, []);

//   function handleAccept() {
//     localStorage.setItem("cookie_consent", "accepted");
//     setVisible(false);
//   }

//   function handleReject() {
//     localStorage.setItem("cookie_consent", "rejected");
//     setVisible(false);
//   }

//   if (!visible) return null;

//   const consent = localStorage.getItem("cookie_consent");

// if (consent === "accepted") {
//   // load analytics scripts here
// }




//   return (
//     <div className="fixed bottom-4 left-4 right-4 z-[999] flex justify-center">
//       <div className="w-full max-w-3xl rounded-3xl border border-[rgb(var(--text))]/20 bg-[rgb(var(--bg))]/80 backdrop-blur-xl shadow-lg p-5 sm:p-6">
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//           {/* Text */}
//           <div>
//             <h4 className="text-base font-semibold text-[rgb(var(--text))]">
//               We value your privacy 🍪
//             </h4>
//             <p className="mt-1 text-sm text-[rgb(var(--text))]/70 leading-relaxed">
//               We use cookies to improve your experience. You can accept or reject
//               non-essential cookies anytime.
//             </p>
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-3 sm:justify-end">
//             <button
//               onClick={handleReject}
//               className="rounded-2xl border border-[rgb(var(--text))]/20 bg-transparent px-5 py-2.5 text-sm font-semibold text-[rgb(var(--text))] hover:bg-[rgb(var(--text))]/5 transition"
//             >
//               Reject
//             </button>

//             <button
//               onClick={handleAccept}
//               className="rounded-2xl bg-[rgb(var(--color-primary))] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[rgb(var(--color-primary))]/90 transition"
//             >
//               Accept
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
