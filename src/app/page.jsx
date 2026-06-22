"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LogoStrip from "@/components/Logostrip";

gsap.registerPlugin(ScrollTrigger);

const words = ["Become", "Hire", "Upskill"];

const text = `
We’ve entered a new era of software development where human and AI
build together. This changes the skills you need as a developer, and
the way companies engage, hire, and upskill technical talent. In
short, this changes everything.

We’re embracing these changes with you, and we’ve reinvented our
products to meet the moment.
`;

function TypingText() {
  const words = ["Become", "Hire", "Upskill"];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout;

    // Pause at completed word
    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);

      return () => clearTimeout(timeout);
    }

    // Move to next word after deleting
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    timeout = setTimeout(
      () => {
        setDisplayText((prev) =>
          isDeleting
            ? currentWord.slice(0, prev.length - 1)
            : currentWord.slice(0, prev.length + 1),
        );
      },
      isDeleting ? 120 : 200,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <span className="text-[rgb(var(--primary-color))]">{displayText}</span>
  );
}

const faqs = [
  {
    q: "What type of projects do you handle?",
    a: "We specialize in premium residential and commercial construction, including turnkey projects from planning to final handover.",
  },
  {
    q: "Do you provide turnkey construction services?",
    a: "Yes. We manage the complete project end-to-end, including materials, skilled labor, supervision, and timely delivery.",
  },
  {
    q: "How do you ensure quality and safety?",
    a: "We follow strict quality checks, use reliable materials, and ensure safe site practices at every stage of construction.",
  },
  {
    q: "Can I customize the design as per my needs?",
    a: "Absolutely. We work closely with you to match your vision, budget, and functional requirements with transparent planning.",
  },
  {
    q: "What makes Unity Heights Constructions different from others?",
    a: "Our focus on premium-quality materials, transparent pricing, strict safety standards, and single-point accountability sets us apart. We combine professional management with hands-on supervision to deliver reliable, long-lasting results.",
  },
  {
    q: "How can I get a quote or start a project?",
    a: "Just click “Get in Touch” and share your requirements. We’ll schedule a call or site visit and provide a clear, detailed estimate.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="w-full text-left rounded-sm border border-[rgb(var(--text))]/20 bg-[rgb(var(--bg))]/40 p-5 transition hover:bg-[rgb(var(--text))]/5"
    >
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-base sm:text-lg font-semibold text-[rgb(var(--text))]">
          {item.q}
        </h4>

        <span
          className={`text-xl text-[rgb(var(--text))]/70 transition-transform ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          ›
        </span>
      </div>

      {isOpen && (
        <p className="mt-3 text-sm sm:text-base text-[rgb(var(--text))]/75 leading-relaxed max-w-3xl">
          {item.a}
        </p>
      )}
    </button>
  );
}

function SvgIcon({ svg }) {
  return (
    <div
      className="w-8 h-8 text-[rgb(var(--primary-color))] flex-shrink-0 [&>svg]:w-full [&>svg]:h-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export default function Home() {
  const mysvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 960 960" width="960" height="960" preserveAspectRatio="xMidYMid meet" style="width: 140%; height: 140%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_413"><rect width="960" height="960" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_413)"><g style="display: block;" transform="matrix(1,0,0,1,481.04998779296875,478.406005859375)" opacity="1"><g opacity="1" transform="matrix(0.7071067690849304,-0.7071067690849304,-0.7071067690849304,-0.7071067690849304,190.52000427246094,-190.49600219726562)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(25,170,89)" stroke-opacity="1" strokeWidth="52" d=" M-89.8270034790039,179.61900329589844 C-89.8270034790039,179.61900329589844 107.9739990234375,-18.301000595092773 107.9739990234375,-18.301000595092773"></path></g></g><g style="display: block;" transform="matrix(1,0,0,1,481.04998779296875,478.406005859375)" opacity="1"><g opacity="1" transform="matrix(0.7071067690849304,-0.7071067690849304,-0.7071067690849304,-0.7071067690849304,190.52000427246094,-190.49600219726562)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(25,170,89)" stroke-opacity="1" strokeWidth="52" d=" M107.86000061035156,17.996999740600586 C107.86000061035156,17.996999740600586 -89.76000213623047,-179.61900329589844 -89.76000213623047,-179.61900329589844"></path></g></g><g style="display: block;" transform="matrix(1,0,0,1,481.04998779296875,478.4059753417969)" opacity="1"><g opacity="1" transform="matrix(-0.7071067690849304,0.7071067690849304,0.7071067690849304,0.7071067690849304,-190.5260009765625,190.49600219726562)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(25,170,89)" stroke-opacity="1" strokeWidth="52" d=" M108.03800201416016,17.996000289916992 C108.03800201416016,17.996000289916992 -89.76000213623047,-179.61900329589844 -89.76000213623047,-179.61900329589844"></path></g></g><g style="display: block;" transform="matrix(1,0,0,1,481.0500183105469,478.40496826171875)" opacity="1"><g opacity="1" transform="matrix(-0.7071067690849304,0.7071067690849304,0.7071067690849304,0.7071067690849304,-190.5260009765625,190.49600219726562)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(25,170,89)" stroke-opacity="1" strokeWidth="52" d=" M-89.8270034790039,179.61900329589844 C-89.8270034790039,179.61900329589844 108.26499938964844,-18.274999618530273 108.26499938964844,-18.274999618530273"></path></g></g><g style="display: block;" transform="matrix(1,0,0,1,481.04998779296875,478.406005859375)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,-0.004000000189989805,-0.04800000041723251)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(25,170,89)" stroke-opacity="1" strokeWidth="52" d=" M-252.01400756835938,252.01400756835938 C-252.01400756835938,252.01400756835938 252.01400756835938,-252.01400756835938 252.01400756835938,-252.01400756835938"></path></g></g></g></svg>`;
  const steps = [
    {
      step: "01",
      title: "Candidate Applies",
      desc: "Developers enter the platform and begin assessments tailored to their role and skill level.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 23" fill="none" className="home-industry_icon"><path d="M9.18359 11.5713L9.18366 13.4717L15.1679 14.8226L15.1678 12.9222L9.18359 11.5713Z" fill="currentColor"></path><path d="M9.18359 18.0723L9.18366 16.1719L15.1679 14.821L15.1678 16.7214L9.18359 18.0723Z" fill="currentColor"></path><path d="M11.0879 16.1865L9.18752 16.1866L7.83661 22.1708L9.73698 22.1708L11.0879 16.1865Z" fill="currentColor"></path><path d="M4.58594 16.1865L6.48631 16.1866L7.83721 22.1708L5.93684 22.1708L4.58594 16.1865Z" fill="currentColor"></path><path d="M6.4873 18.0801L6.48724 16.1797L0.503003 14.8288L0.503067 16.7292L6.4873 18.0801Z" fill="currentColor"></path><path d="M6.4873 11.5781L6.48724 13.4785L0.503002 14.8294L0.503067 12.929L6.4873 11.5781Z" fill="currentColor"></path><path d="M4.58301 13.4756L6.48338 13.4755L7.83428 7.49128L5.93392 7.49135L4.58301 13.4756Z" fill="currentColor"></path><path d="M11.085 13.4756L9.18459 13.4755L7.83369 7.49128L9.73406 7.49135L11.085 13.4756Z" fill="currentColor"></path><path d="M13.9482 6.91016L15.8486 6.91022L17.1864 10.8747L15.286 10.8747L13.9482 6.91016Z" fill="currentColor"></path><path d="M20.4248 6.91016L18.5244 6.91022L17.1867 10.8747L19.087 10.8747L20.4248 6.91016Z" fill="currentColor"></path><path d="M18.5332 8.80762L18.5333 6.90725L22.4978 5.56949L22.4977 7.46986L18.5332 8.80762Z" fill="currentColor"></path><path d="M18.5332 2.33301L18.5333 4.23338L22.4978 5.57114L22.4977 3.67076L18.5332 2.33301Z" fill="currentColor"></path><path d="M20.4297 4.23145L18.5293 4.23138L17.1916 0.266876L19.0919 0.26694L20.4297 4.23145Z" fill="currentColor"></path><path d="M13.9541 4.23145L15.8545 4.23138L17.1922 0.266876L15.2919 0.26694L13.9541 4.23145Z" fill="currentColor"></path><path d="M15.8447 2.33398L15.8447 4.23436L11.8802 5.57211L11.8802 3.67174L15.8447 2.33398Z" fill="currentColor"></path><path d="M15.8447 8.80859L15.8447 6.90822L11.8802 5.57047L11.8802 7.47084L15.8447 8.80859Z" fill="currentColor"></path></svg>`,
    },
    {
      step: "02",
      title: "AI Interview",
      desc: "Interactive AI-driven interviews test communication, reasoning, and real-world problem solving.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="home-industry_grey-icon"><path d="M5.78899 11.5775C8.98602 11.5775 11.5777 8.98577 11.5777 5.78874C11.5777 2.59171 8.98602 0 5.78899 0C2.59195 0 0.000244141 2.59171 0.000244141 5.78874C0.000244141 8.98577 2.59195 11.5775 5.78899 11.5775Z" fill="currentColor"></path><path d="M18.0302 11.5775C21.2272 11.5775 23.8189 8.98577 23.8189 5.78874C23.8189 2.59171 21.2272 0 18.0302 0C14.8332 0 12.2415 2.59171 12.2415 5.78874C12.2415 8.98577 14.8332 11.5775 18.0302 11.5775Z" fill="currentColor"></path><path d="M5.78874 23.9998C8.98577 23.9998 11.5775 21.4081 11.5775 18.2111C11.5775 15.0141 8.98577 12.4224 5.78874 12.4224C2.59171 12.4224 0 15.0141 0 18.2111C0 21.4081 2.59171 23.9998 5.78874 23.9998Z" fill="currentColor"></path><path d="M18.0302 23.9998C21.2272 23.9998 23.8189 21.4081 23.8189 18.2111C23.8189 15.0141 21.2272 12.4224 18.0302 12.4224C14.8332 12.4224 12.2415 15.0141 12.2415 18.2111C12.2415 21.4081 14.8332 23.9998 18.0302 23.9998Z" fill="currentColor"></path></svg>`,
    },
    {
      step: "03",
      title: "AI Scoring",
      desc: "Our systems generate structured scores, insights, integrity signals, and detailed notes.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 24" fill="none" className="home-industry_grey-icon"><g clip-path="url(#clip0_8200_4413)"><mask id="mask0_8200_4413" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="24"><path d="M0 0.71875H23V23.7188H0V0.71875Z" fill="white"></path></mask><g mask="url(#mask0_8200_4413)"><mask id="mask1_8200_4413" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="4" y="7" width="19" height="17"><path d="M22.9981 7.30469H4.375V23.72H22.9981V7.30469Z" fill="white"></path></mask><g mask="url(#mask1_8200_4413)"><path d="M11.5073 23.72C8.33646 23.72 5.9526 22.4059 4.59289 21.4C4.17608 21.0917 4.39771 20.4351 4.91571 20.4369H4.94125C9.30771 20.4369 13.1489 16.9678 13.1489 12.2293C13.1489 9.21708 15.6413 7.30469 18.0735 7.30469C20.5056 7.30469 22.998 9.24262 22.998 12.2293C22.998 18.1588 18.2358 23.72 11.5073 23.72Z" fill="currentColor"></path><path opacity="0.3" d="M7.33131 22.4774C3.41446 20.2524 11.0321 20.97 12.8377 14.9465C13.3448 13.4555 13.0976 11.8057 13.7196 10.3648C15.0848 6.95959 20.1554 6.53459 22.0667 9.67082C25.7219 17.8183 15.0255 26.6406 7.33131 22.4774Z" fill="currentColor"></path><path opacity="0.3" d="M8.00567 22.4039C4.88673 20.9448 12.5007 18.9494 12.9923 14.7945C13.4236 13.4239 13.2676 11.9192 13.7975 10.5877C15.015 7.2636 19.8765 6.67356 21.8355 9.6338C25.6794 17.2441 15.3332 26.3939 8.00567 22.4039Z" fill="currentColor"></path><path opacity="0.3" d="M9.26261 22.5039C5.73606 21.1314 12.5712 18.712 13.2579 14.4175C13.5954 13.138 13.5151 11.7436 14.0696 10.5262C16.8693 5.27875 23.4828 8.64208 22.3711 14.0318C21.586 19.8984 15.0289 24.7473 9.26261 22.5039Z" fill="currentColor"></path><path opacity="0.3" d="M9.35584 21.2459C9.35584 21.2459 9.35584 21.2412 9.35584 21.2394C9.38863 20.9185 9.50446 20.6102 9.69509 20.3503C10.3015 19.5259 11.1314 18.8347 11.7314 18.0074C12.4756 16.9815 13.0483 15.8434 13.3949 14.6232C14.1254 12.0524 14.0697 8.85868 17.4176 8.30511C20.7535 7.75338 22.5062 10.9325 22.1443 13.8216C21.8086 16.4954 20.334 18.986 18.2183 20.6394C16.1025 22.2927 13.0301 23.317 10.4556 22.3912C10.1647 22.2863 9.88658 22.1652 9.64856 21.9698C9.60477 21.9343 9.56738 21.8933 9.53274 21.8486C9.53182 21.8477 9.53091 21.8459 9.52999 21.845C9.39686 21.6753 9.33393 21.461 9.35584 21.2468V21.2459Z" fill="currentColor"></path><path opacity="0.3" d="M10.7628 21.646C10.6735 21.5876 10.5121 21.3751 10.4938 21.3287C10.4646 21.2547 10.4062 21.1235 10.4062 21.004C10.4062 20.8845 10.4063 20.8444 10.4391 20.703C10.7975 19.615 11.704 18.7076 12.3004 17.7364C12.8448 16.8491 13.2798 15.897 13.5862 14.9011C14.3149 12.5346 14.2547 9.44215 17.2587 8.75908C20.2627 8.07604 22.0657 10.9214 21.8441 13.5761C21.6333 16.0931 20.2909 18.4925 18.3657 20.1049C16.6094 21.5758 12.9077 23.2866 10.7646 21.6442L10.7628 21.646Z" fill="currentColor"></path><path opacity="0.3" d="M11.9561 21.0986C11.8248 20.9901 11.7236 20.8395 11.6707 20.6755C11.4582 19.6385 12.4267 18.4475 12.869 17.5611C13.3113 16.6747 13.6761 15.7901 13.9506 14.8526C14.5598 12.7733 14.7166 10.0073 17.24 9.34796C20.1482 8.58834 21.6657 11.5449 21.3584 14.0026C21.0821 16.2069 19.8792 18.2825 18.1848 19.7034C16.8023 20.8633 13.6405 22.5266 11.9552 21.0986H11.9561Z" fill="currentColor"></path><path opacity="0.3" d="M13.2075 20.2048C12.363 19.1123 14.0036 16.3464 14.3492 15.1882C14.8244 13.5959 15.0368 11.5084 16.537 10.5034C18.5452 9.15832 20.618 10.9038 20.7904 13.0159C20.9391 14.838 20.1302 16.713 18.9885 18.0937C17.8584 19.4598 15.3324 21.3703 13.4537 20.4019L13.398 20.3708C13.3242 20.329 13.2594 20.2724 13.2075 20.2048Z" fill="currentColor"></path><path opacity="0.3" d="M14.6296 18.6531C14.2648 17.6354 14.8102 16.2929 15.081 15.3034C15.3965 14.1516 15.6802 12.7518 16.562 11.8809C17.7859 10.6716 19.4711 11.4158 19.8205 13.0044C20.1132 14.334 19.6061 15.8114 18.8602 16.9067C18.1115 18.0047 16.8666 19.13 15.4631 19.1446C15.4631 19.1446 15.2214 19.1255 15.1312 19.0881C15.0409 19.0508 14.9178 19.0069 14.8467 18.9367C14.8467 18.9367 14.6989 18.8082 14.6296 18.6549V18.6531Z" fill="currentColor"></path></g><mask id="mask2_8200_4413" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="18"><path d="M0 17.134H18.6232V0.71875H0V17.134Z" fill="white"></path></mask><g mask="url(#mask2_8200_4413)"><path d="M11.4907 0.71875C14.6616 0.71875 17.0454 2.03288 18.4052 3.03877C18.8219 3.347 18.6004 4.00362 18.0823 4.00182C18.0742 4.00182 18.0651 4.00182 18.0568 4.00182C13.6903 4.00182 9.84916 7.4709 9.84916 12.2095C9.84916 15.2216 7.35678 17.134 4.92457 17.134C2.49237 17.134 0 15.1961 0 12.2095C0 6.27988 4.76224 0.71875 11.4907 0.71875Z" fill="currentColor"></path><path opacity="0.3" d="M15.6619 1.96434C19.5788 4.18951 11.9612 3.47182 10.1555 9.49529C9.64842 10.9863 9.89556 12.6361 9.27361 14.077C7.90842 17.4822 2.83792 17.9072 0.926446 14.771C-2.7287 6.62354 7.96766 -2.19878 15.6619 1.96434Z" fill="currentColor"></path><path opacity="0.3" d="M14.988 2.03825C18.1071 3.49737 10.493 5.49275 10.0014 9.64766C9.5701 11.0183 9.72605 12.523 9.19622 13.8545C7.97873 17.1786 3.11709 17.7686 1.15818 14.8084C-2.68574 7.19811 7.66045 -1.95158 14.988 2.03825Z" fill="currentColor"></path><path opacity="0.3" d="M13.7332 1.93409C17.2597 3.3066 10.4246 5.726 9.73786 10.0204C9.40046 11.2999 9.48073 12.6943 8.92625 13.9118C6.12654 19.1593 -0.487014 15.7959 0.624668 10.4062C1.40989 4.53958 7.96686 -0.309329 13.7332 1.93409Z" fill="currentColor"></path><path opacity="0.3" d="M13.6399 3.19833V3.20472C13.6071 3.52572 13.4913 3.83395 13.3007 4.09391C12.6943 4.91831 11.8644 5.60955 11.2643 6.43673C10.5201 7.46267 9.9474 8.60079 9.60084 9.821C8.87036 12.3918 8.92602 15.5855 5.57819 16.139C2.24228 16.6908 0.489485 13.5117 0.851505 10.6226C1.18712 7.94874 2.66174 5.45817 4.77751 3.80479C6.89324 2.15141 9.96568 1.12727 12.5401 2.05293C12.831 2.15781 13.1092 2.27906 13.3472 2.47424C13.391 2.5098 13.4284 2.55084 13.463 2.59555C13.4639 2.59646 13.4648 2.59826 13.4658 2.59918C13.5989 2.76882 13.6618 2.9831 13.6399 3.19741V3.19833Z" fill="currentColor"></path><path opacity="0.3" d="M12.2324 2.79372C12.3217 2.8521 12.4831 3.06458 12.5014 3.11108C12.5306 3.18495 12.5889 3.31629 12.5889 3.43574C12.5889 3.55522 12.5889 3.59532 12.5561 3.73668C12.1977 4.82462 11.2912 5.73208 10.6948 6.70327C10.1503 7.5906 9.71538 8.54271 9.40897 9.53858C8.68029 11.9051 8.7405 14.9976 5.73647 15.6806C2.73249 16.3637 0.929557 13.5183 1.15114 10.8636C1.36182 8.34662 2.70424 5.94725 4.62938 4.33492C6.3858 2.86392 10.0875 1.15309 12.2306 2.79551L12.2324 2.79372Z" fill="currentColor"></path><path opacity="0.3" d="M11.0351 3.34064C11.1665 3.44915 11.2677 3.5996 11.3206 3.76378C11.5331 4.80067 10.5646 5.99171 10.1223 6.87813C9.67997 7.76454 9.31521 8.64913 9.04068 9.58665C8.43149 11.6659 8.27464 14.4319 5.75127 15.0912C2.84301 15.8509 1.32551 12.8943 1.63283 10.4366C1.90915 8.23236 3.11205 6.15675 4.80647 4.73591C6.18898 3.57592 9.35077 1.91251 11.0361 3.34064H11.0351Z" fill="currentColor"></path><path opacity="0.3" d="M9.78808 4.24194C10.6325 5.33449 8.99196 8.10048 8.64631 9.25865C8.17118 10.851 7.9587 12.9384 6.45851 13.9434C4.45037 15.2885 2.37748 13.5431 2.2051 11.4309C2.05648 9.60886 2.8654 7.73384 4.00715 6.35316C5.1371 4.98705 7.6632 3.07649 9.54183 4.04497L9.5975 4.07598C9.67134 4.11792 9.7361 4.17447 9.78808 4.24194Z" fill="currentColor"></path><path opacity="0.3" d="M8.36099 5.78843C8.72577 6.80612 8.18038 8.14855 7.90954 9.13805C7.59403 10.2899 7.31039 11.6897 6.42852 12.5606C5.20469 13.7699 3.5194 13.0257 3.17012 11.4371C2.87737 10.1075 3.38443 8.63008 4.13041 7.53481C4.87911 6.43679 6.12397 5.31145 7.52747 5.29688C7.52747 5.29688 7.7691 5.31599 7.85941 5.35341C7.9497 5.3908 8.07279 5.43455 8.14391 5.50479C8.14391 5.50479 8.29166 5.63336 8.36099 5.78658V5.78843Z" fill="currentColor"></path></g></g></g></svg>`,
    },
    {
      step: "04",
      title: "Employer Dashboard",
      desc: "Recruiters review skill depth, behavioral analysis, and candidate summaries in one place.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 21" fill="none" className="home-industry_grey-icon icon-n"><g clip-path="url(#clip0_8200_4351)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.29585 0.790007C9.35361 0.0908309 11.6448 0.0908309 13.7025 0.790007H13.7037C14.1008 0.925894 14.3133 1.35794 14.1786 1.75515C14.0427 2.15236 13.6108 2.3649 13.2136 2.23017C11.4717 1.63785 9.52779 1.63785 7.78592 2.23017C7.70459 2.25805 7.62217 2.27082 7.54088 2.27082C7.22386 2.27082 6.9289 2.07222 6.8209 1.75515C6.68503 1.35678 6.8987 0.924732 7.29585 0.790007ZM18.9609 6.53786C18.5637 6.67259 18.3501 7.10464 18.486 7.50297C18.7821 8.37408 18.9319 9.28692 18.9319 10.2173C18.9319 11.1475 18.7821 12.0604 18.486 12.9315C18.3512 13.3287 18.5637 13.7608 18.9609 13.8966C19.0422 13.9245 19.1247 13.9373 19.2059 13.9373C19.5229 13.9373 19.8179 13.7375 19.9259 13.4216C20.2755 12.3926 20.4531 11.3148 20.4531 10.2173C20.4531 9.11971 20.2755 8.04307 19.9259 7.01404C19.7912 6.61684 19.3581 6.40429 18.9609 6.53902V6.53786ZM2.06812 10.2173C2.06812 11.1464 2.21793 12.0604 2.51405 12.9315V12.9292C2.64991 13.3275 2.43624 13.7596 2.03909 13.8943C1.9578 13.9222 1.87535 13.935 1.79407 13.935C1.47704 13.935 1.18208 13.7363 1.07409 13.4193C0.724548 12.3902 0.546875 11.2857 0.546875 10.2161C0.546875 9.14644 0.716419 8.09298 1.0497 7.08489C1.18208 6.68652 1.61291 6.4705 2.01122 6.60173C2.40953 6.73414 2.62669 7.16502 2.4943 7.5634C2.21096 8.41702 2.06812 9.28813 2.06812 10.2173ZM7.78486 18.2044C9.52794 18.7968 11.4707 18.7956 13.2126 18.2044H13.2102C13.6086 18.0686 14.0405 18.2811 14.1753 18.6795C14.3111 19.0778 14.0975 19.5099 13.7003 19.6446C12.6714 19.9941 11.5938 20.1719 10.4976 20.1719C9.40132 20.1719 8.32368 19.9941 7.29482 19.6446C6.89767 19.5087 6.68515 19.0767 6.81986 18.6795C6.95573 18.2822 7.38771 18.0697 7.78486 18.2044ZM16.9021 15.5448C16.6049 15.2475 16.1242 15.2475 15.8268 15.5448C15.5295 15.8421 15.5295 16.3229 15.8268 16.6202L17.4886 18.2823C17.6372 18.4309 17.8312 18.5053 18.0263 18.5053C18.2213 18.5053 18.4153 18.4309 18.5639 18.2823C18.8612 17.985 18.8612 17.5041 18.5639 17.2068L16.9021 15.5448ZM2.43459 2.15247C2.73187 1.85515 3.21263 1.85515 3.50991 2.15247L5.17167 3.81448C5.46896 4.1118 5.46896 4.59263 5.17167 4.88995C5.02304 5.03862 4.82911 5.11295 4.63401 5.11295C4.43892 5.11295 4.24499 5.03862 4.09635 4.88995L2.43459 3.22796C2.13731 2.93063 2.13731 2.4498 2.43459 2.15247ZM4.09811 15.5448L2.43635 17.2068C2.13908 17.5041 2.13908 17.985 2.43635 18.2823C2.585 18.4309 2.77893 18.5053 2.97402 18.5053C3.16911 18.5053 3.36304 18.4309 3.51168 18.2823L5.17344 16.6202C5.47073 16.3229 5.47073 15.8421 5.17344 15.5448C4.87616 15.2475 4.3954 15.2475 4.09811 15.5448ZM16.924 4.86789C16.7753 5.01655 16.5814 5.09088 16.3863 5.09088C16.1912 5.09088 15.9973 5.01655 15.8487 4.86789C15.5514 4.57056 15.5514 4.08973 15.8487 3.79241L17.4883 2.15247C17.7856 1.85515 18.2664 1.85515 18.5637 2.15247C18.8609 2.4498 18.8609 2.93063 18.5637 3.22796L16.924 4.86789Z" fill="currentColor"></path></g></svg>`,
    },
    {
      step: "05",
      title: "Candidate Feedback",
      desc: "Applicants receive personalized feedback and recommendations for improvement.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 25" fill="none" className="home-industry_grey-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4999 0.21875C10.4999 0.21875 0 5.46874 0 13.7188C0 19.5177 4.70089 24.2188 10.4999 24.2188C16.2988 24.2188 21 19.5177 21 13.7188C21 5.46874 10.4999 0.21875 10.4999 0.21875ZM18 13.7188C18 17.8608 14.642 21.2188 10.4999 21.2188V18.9687C13.3993 18.9687 15.7499 16.6183 15.7499 13.7188H18Z" fill="currentColor"></path></svg>`,
    },
    {
      step: "06",
      title: "Hiring Decision",
      desc: "Companies move forward with interviews, offers, and hiring backed by verified signals.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 53 60" fill="none" className="home-loop_alert-icon" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"><path d="M21.8549 50.8588C21.8549 53.3347 23.9373 55.3893 26.4902 55.3893C29.0431 55.3893 31.1251 53.3347 31.1251 50.8588H35.7803C35.7803 55.9335 31.5608 60 26.4902 60C21.4196 60 17.2001 55.9335 17.2001 50.8588H21.8549ZM4.65486 44.1356H48.3448V33.7465H53V48.7459H0V33.7465H4.65486V44.1356ZM26.5006 0C38.5646 9.83889e-05 48.3443 9.68624 48.3444 21.6348L48.3448 33.7465H43.423L43.4226 21.6348C43.4225 12.3785 35.8463 4.8748 26.5006 4.8747C17.1548 4.8748 9.57821 12.3785 9.57815 21.6348L9.57852 33.7465H4.65671L4.65634 21.6348C4.65641 9.68624 14.4366 9.88151e-05 26.5006 0Z" fill="currentColor"></path></svg>`,
    },
  ];

  const [submittedOnce, setSubmittedOnce] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const textRef = useRef(null);



  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });

  const [errors, setErrors] = useState({});

  function validate(values) {
    const newErrors = {};

    if (!values.name.trim()) newErrors.name = "Please enter your name.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim()) newErrors.email = "Please enter your email.";
    else if (!emailRegex.test(values.email))
      newErrors.email = "Please enter a valid email address.";

    const phoneDigits = values.phone.replace(/\D/g, "");
    if (!values.phone.trim())
      newErrors.phone = "Please enter your phone number.";
    else if (phoneDigits.length !== 10)
      newErrors.phone = "Phone number must be exactly 10 digits.";

    if (!values.details.trim())
      newErrors.details = "Please enter project details.";
    else if (values.details.trim().length < 10)
      newErrors.details = "Project details must be at least 10 characters.";

    return newErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "phone" ? value.replace(/[^\d]/g, "") : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    const newErrors = validate(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the form errors");
      return;
    }

    setSubmittedOnce(true);
    toast.loading("Submitting...", { id: "consultation-toast" });

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/abhinandgangadharan17@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const data = await res.json();

      if (data.success === "true") {
        toast.success("Request submitted successfully", {
          id: "consultation-toast",
        });

        setForm({
          name: "",
          email: "",
          phone: "",
          details: "",
        });

        setShowSuccess(true);

        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      toast.error("Something went wrong. Try again", {
        id: "consultation-toast",
      });
    }

    setSubmittedOnce(false);
  }

  const [openIndex, setOpenIndex] = useState(null); // first one open by default

  const scrollToConsultation = () => {
    const section = document.getElementById("consultation");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full  bg-[rgb(var(--bg))]">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[110vh] sm:min-h-[90vh] md:min-h-[100vh]">
        {/* Gradient Overlay */}

        {/* Optional: Extra dark overlay for readability */}

        {/* Bottom fade overlay (video fades into page bg) */}

        <div className="relative z-10 max-w-7xl mt-7 md:mt-10 lg:mt-0 mx-auto px-6 pt-30 pb-16 ">
          <h1 className="text-center mt-0 text-5xl md:text-6xl lg:text-[90px] font-black  font-departure tracking-tight leading-[1.05]">
            <TypingText />

            <span className='text-[rgb(var(--text-dark))] font-normal font-["satoshi"]'>
              {" "}
              the next <br />
              generation developer
            </span>
          </h1>

          <div className="mt-10 flex  justify-center max-w-4xl  mx-auto lg:pb-5 flex-col sm:flex-row gap-4">
            <p className="text-2xl text-center text-[rgb(var(--text-light))] font-med opacity-70">
              We help thousands of companies hire and upskill the next <br />{" "}
              generation of developers, and millions of developers to become
              one.
            </p>
          </div>

          <div className=" flex pb-10 justify-center max-w-4xl  mx-auto  flex-col sm:flex-row gap-4">
            <button className="btn-primary text-lg">
              Start a free trial
            </button>

            {/* <button className="btn-outline-primary text-[16px]">
              For developers
            </button> */}
          </div>

          <LogoStrip />
        </div>
      </section>

      {/* <section
        className="relative flex overflow-hidden py-20 items-center justify-center h-[150vh]"
        style={{
          background: `
      linear-gradient(
        to bottom,

        rgb(255 255 255) 0%,

        rgb(88 86 201) 6%,

        rgb(3 9 20) 15%,

        rgb(3 9 20) 85%,

        rgb(88 86 201) 94%,

        rgb(255 255 255) 100%
      )
    `,
        }}
      >
        <div className="relative   flex-col justify-center max-w-3xl mx-auto ">
          <h1 className="text-[rgb(var(--primary-color))] font-medium text-center mb-5 text-5xl">
            About <span className='font-["Departure"]'>Us</span>
          </h1>

          <h1
            ref={textRef}
            className="text-[rgb(var(--bg))] leading-relaxed text-3xl flex flex-wrap gap-x-3"
          >
            {text.split(" ").map((word, i) => (
              <span key={i} className="word opacity-20">
                {word}
              </span>
            ))}
          </h1>
        </div>

        <div className="absolute opacity-35 left-0 right-0 top-[15%] h-[70%] overflow-hidden pointer-events-none">
          {[...Array(120)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            />
          ))}

          <span className="sparkle-star top-[10%] left-[12%]" />
          <span className="sparkle-star top-[22%] right-[18%]" />
          <span className="sparkle-star top-[45%] left-[28%]" />
          <span className="sparkle-star top-[70%] right-[22%]" />
          <span className="sparkle-star top-[58%] left-[70%]" />
          <span className="sparkle-star top-[30%] left-[50%]" />
        </div>
      </section> */}

      <div className="h-auto bg-[#5412AC]">
        <div className="grid grid-cols-1 h-auto my-auto justify-center items-center w-full md:grid-cols-2 gap-20 max-w-[95vw] md:max-w-[80vw] mx-auto py-40">
          <div className="relative  my-auto justify-center items-start  w-full h-full flex flex-col ">
            <h1 className="text-6xl font-black uppercase mb-5 leading-13 text-white">Stop Guessing, <br /> <span className="font-black [">Start Measuring With EIS</span></h1>
            <p className="text-xl text-white font-medium text-justify  mb-3">
              95% of companies now require AI fluency. But the methods used to
              assess candidates were never built for it. Shift from
              self-reported usage and tool name-checking, to genuine AI fluency
              assessments and interviews.
            </p>
            <p className="text-xl text-white  font-medium mb-10">5 pillar framework. Scientifically validated.</p>
            <a className="btn-primary text-lg bg-white hover:bg-black text-black hover:text-white">Explore EIS</a>
          </div>
          <div className="relative  w-auto h-auto my-auto justify-center items-center">
            <img
              src="/images/fluency.gif"
              className="w-full h-full object-contain rounded-md"
              alt=""
            />
          </div>
        </div>
      </div>

      <section className="relative flex overflow-hidden py-[15vh] bg-white items-center justify-center min-h-[150vh]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mt-5 text-black text-3xl md:text-6xl  leading-[1.05] font-medium">
              How it{" "}
              <span className='text-[rgb(var(--primary-color))] text-6xl font-black font-["Departure"]'>
                works
              </span>
            </h1>

            {/* <p className="mt-8 text-black/60 text-lg leading-relaxed ">
              From application to offer letter, our AI-assisted recruitment
              pipeline evaluates both technical ability and behavioral signals —
              helping companies hire with confidence and candidates improve with
              clarity.
            </p> */}
          </div>

          <div className="relative mt-15 max-w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 relative z-10">
              {steps.map((item, i) => {
                const coloredSvg = item.svg.replaceAll("currentColor", "#000");

                return (
                  <div
                    key={i}
                    className="
        relative
        border border-black/30
        backdrop-blur-xl
        rounded-sm
        p-6
        py-10
        transition-all
        duration-300
        hover:bg-black/[0.06]
        hover:border-[rgb(var(--primary-color))]/30
      "
                  >
                    <div className="flex items-center justify-center">
                      <div className="text-[rgb(var(--primary-color))] absolute right-5 top-5 text-4xl text-center tracking-[0.2em] uppercase font-departure">
                        {item.step}
                      </div>

                      {/* <div className="h-3 w-3 rounded-full bg-[rgb(var(--primary-color))] shadow-[0_0_20px_rgba(56,199,142,0.8)]" /> */}
                    </div>

                    <div className="flex items-center gap-3">
                      <SvgIcon svg={coloredSvg} />
                      <h2 className="text-black text-2xl font-medium">
                        {item.title}
                      </h2>
                    </div>

                    <div
                      className="mt-3 h-[1px] w-full opacity-60"
                      style={{
                        background:
                          "repeating-linear-gradient(to right, rgb(0,0,0) 0 2px, transparent 2px 12px)",
                      }}
                    />

                    <div className="flex ">
                      <div className="w-10 mt-7 mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 24 8"
                          fill="none"
                          className="home-industry_list-icon"
                        >
                          <path
                            d="M1 0V7H24"
                            stroke="#5434d1"
                            strokeWidth="2"
                          ></path>
                        </svg>
                      </div>
                      <p className="mt-5 mb-4 text-black mr-5 leading-relaxed text-lg">
                        {item.desc}
                      </p>
                    </div>

                    <div
                      className="mt-3 h-[1px] w-full opacity-60"
                      style={{
                        background:
                          "repeating-linear-gradient(to right, rgb(0,0,0) 0 2px, transparent 2px 12px)",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-14 max-w-7xl mx-auto">
            {/* <div
              className="
        border border-black/30
       
        backdrop-blur-xl
        rounded-sm
        p-8 md:p-10
        flex flex-col md:flex-row
        md:items-center
        md:justify-between
        gap-8
      "
            >
              <div>
                <h2 className=" text-black text-3xl md:text-4xl leading-tight font-medium max-w-5xl">
                  More than an ATS. We evaluate <br />
                  <span className="text-[rgb(var(--primary-color))] font-departure">
                    aptitude + attitude
                  </span>
                </h2>
              </div>

              <div className="flex relative ">
                <BadgeCheck className="w-20 h-20 text-[rgb(var(--primary-color))] mx-5" />
                <Blocks className="w-20 h-20 text-[rgb(var(--primary-color))] mx-5" />
                <Brain className="w-20 h-20 text-[rgb(var(--primary-color))] mx-5" />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="mx-5">
        <div className="max-w-6xl pb-20 mx-auto pt-20">
          <h1 className="relative text-center pb-10 text-3xl md:text-6xl font-medium ">
            Whether it's for{" "} <br />
            <span className='text-[rgb(var(--primary-color))] font-black font-["Departure"]'>
              candidates
            </span>{" "}
            <span className="">
            or{" "}
            </span>
            <span className='text-[rgb(var(--primary-color))] font-black font-["Departure"]'>
              employers
            </span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 h-auto  gap-5">
            <div className="group relative overflow-hidden z-0 border border-black/20 rounded-sm p-10 flex flex-col justify-between bg-white">
              <div className="absolute left-0 top-0 group-hover:-translate-y-80 translate-y-40 group-hover:scale-200 scale-150 transition-all duration-300  object-cover">
                <img
                  className="opacity-20"
                  src="/images/gradients/purple.png"
                  alt=""
                />
              </div>

              <div>
                <div className="flex relative z-10 items-center justify-between">
                  <h1 className="text-start font-medium text-3xl">
                    For Candidates
                  </h1>

                  {/* <div className="px-3 py-1 rounded-full text-xs border border-black/20 bg-black/5">
            AI Assisted Learning
          </div> */}
                </div>

                <p className="flex relative z-10  text-black mt-5 text-lg leading-relaxed max-w-lg">
                  Learn modern development skills, practice real-world tasks,
                  and get evaluated beyond traditional aptitude tests.
                </p>

                <div className="flex relative z-10  mt-10 flex flex-col gap-5">
                  {[
                    "AI-assisted coding assessments",
                    "Real-world project based evaluations",
                    "Behavior & attitude analysis",
                    "Instant performance feedback",
                    "Personalized upskilling roadmap",
                    "Resume & profile scoring",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-2 h-2 w-2 rounded-full bg-[rgb(var(--primary-color))]" />

                      <p className="text-black/80 text-lg leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTTOM CARD */}
              <div className="mt-10 border  relative z-10   border-black/10 rounded-sm p-6 bg-black/[0.03]">
                <div className="flex flex relative z-10  items-center justify-between">
                  <div>
                    <p className="text-lg text-black/60">Candidate Score</p>

                    <h2 className="text-4xl mt-1 font-semibold">92%</h2>
                  </div>

                  <div className="text-right">
                    <p className="text-lg text-black/60">AI Confidence</p>

                    <h2 className="text-2xl mt-1 text-[rgb(var(--primary-color))]">
                      High
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="bg-white group rounded-sm p-10 flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute left-0 top-0 group-hover:-translate-y-80 translate-y-40 group-hover:scale-200 scale-150 transition-all duration-300  object-cover">
                <img src="/images/gradients/purplebig.png" alt="" />
              </div>

              {/* glow */}
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <h1 className="text-start font-medium text-3xl">
                    For Employers
                  </h1>

                  {/* <div className="px-3 py-1 rounded-full text-xs border border-white/15 bg-white/10">
            Anti-Cheating AI
          </div> */}
                </div>

                <p className="text-white mt-5 text-lg leading-relaxed max-w-lg">
                  Hire developers confidently with AI-powered skill and
                  authenticity assessments.
                </p>

                {/* FEATURES */}
                <div className="mt-10 flex flex-col gap-5">
                  {[
                    "Advanced anti-cheating mechanisms",
                    "Behavior & authenticity tracking",
                    "AI-powered candidate dashboards",
                    "Skill + attitude based hiring",
                    "Automated technical screening",
                    "Detailed analytics & insights",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-2 h-2 w-2 rounded-full bg-[rgb(var(--primary-color))]" />

                      <p className="text-white/80 text-lg leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* DASHBOARD MOCK */}
              <div className="relative z-10 mt-10 border border-white/10 rounded-sm bg-white/5 backdrop-blur-xl p-6">
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div>
                    <p className="text-lg text-white/650">
                      Candidate Integrity
                    </p>

                    <h2 className="text-3xl font-semibold mt-1">98%</h2>
                  </div>

                  <div className="h-14 w-14 rounded-full border-4 border-[rgb(var(--primary-color))] flex items-center justify-center text-md font-medium">
                    AI
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-5">
                  <div className="rounded-sm bg-white/5 p-4">
                    <p className="text-white/60 text-lg">Aptitude</p>

                    <h3 className="text-2xl mt-1">91%</h3>
                  </div>

                  <div className="rounded-sm bg-white/5 p-4">
                    <p className="text-white/60 text-lg">Attitude</p>

                    <h3 className="text-2xl mt-1">95%</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
    SECTION 7 · METRICS / ROI
    Drop this block anywhere after the "For candidates / employers" section
    ───────────────────────────────────────────────────────────── */}

      {/* <DecodedSection/> */}

      <section
        className="relative overflow-hidden py-[120px] px-6"
        style={{
          background: "#fff",
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-black text-3xl md:text-6xl font-medium leading-tight">
              The numbers that{" "} <br />
              <span className="text-[rgb(var(--primary-color))] font-black font-departure">
                speak for themselves
              </span>
            </h2>
            <p className="mt-5 text-black/80  leading-relaxed text-xl  max-w-xl mx-auto">
              Across every company and candidate that's gone through our
              platform, the data is consistent.
            </p>
          </div>

          <div
            className="mt-14 rounded-sm grid grid-cols-2 lg:grid-cols-4"
            style={{
              border: "1px solid rgba(0,0,0,0.2)",
              background: "rgba(0,0,0,0.2)",
              gap: "1px",
            }}
          >
            {[
              { num: "3", unit: "×", label: "Faster shortlisting" },
              { num: "40", unit: "%", label: "Less time-to-hire" },
              { num: "92", unit: "%", label: "Candidate clarity score" },
              { num: "98", unit: "%", label: "Employer confidence" },
            ].map((m, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center justify-center  py-12 px-8 bg-[#fff] transition-colors duration-200 "
              >
                <span
                  className=" font-medium leading-none tracking-tight font-departure text-[rgb(var(--primary-color))] "
                  style={{
                    fontSize: "clamp(48px,6vw,72px)",
                    letterSpacing: "-2px",
                  }}
                >
                  {m.num}
                  <span
                    className=" align-top  text-black mt-2 inline-block"
                    style={{ fontSize: "50%", fontWeight: 500 }}
                  >
                    {m.unit}
                  </span>
                </span>
                <p className="mt-3   text-xl  text-black/80">{m.label}</p>
                <span className="absolute bottom-0 left-0   w-10 h-[2px] bg-[rgb(var(--primary-color))] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <span className="absolute bottom-0 right-0   w-10 h-[2px] bg-[rgb(var(--primary-color))] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <span className="absolute top-0 left-0   w-10 h-[2px] bg-[rgb(var(--primary-color))] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <span className="absolute top-0 right-0   w-10 h-[2px] bg-[rgb(var(--primary-color))] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <span className="absolute bottom-0 left-0   w-[2px] h-10 bg-[rgb(var(--primary-color))] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <span className="absolute bottom-0 right-0   w-[2px] h-10 bg-[rgb(var(--primary-color))] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <span className="absolute top-0 left-0   w-[2px] h-10 bg-[rgb(var(--primary-color))] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <span className="absolute top-0 right-0  w-[2px] h-10 bg-[rgb(var(--primary-color))] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            ))}
          </div>

          {/* <p className="mt-5 text-center text-sm  tracking-wide text-black/50">
            Based on aggregated platform data across 1,200+ hiring cycles ·
            Updated Q1 2025
          </p> */}

          <div className="mt-12 border border-black/[0.2] rounded-sm p-8 md:p-10 bg-black/[0.02] flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              {/* <p className='text-[rgb(var(--primary-color))] text-xs tracking-[0.2em] uppercase font-["Departure"] mb-3'>
                ROI proof
              </p> */}
              <h3 className="text-black text-xl md:text-2xl font-medium leading-snug max-w-sm">
                From 200 applicants to a{" "}
                <span className="text-[rgb(var(--primary-color))] font-departure">
                  verified shortlist of 5
                </span>{" "}
                — in under 48 hours.
              </h3>
            </div>
            <div className="flex flex-col gap-4 ">
              {[
                "No resume-reading. AI reads behaviour instead.",
                "Every candidate is scored on attitude + confidence.",
                "Hiring bias reduced. Consistency guaranteed.",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="h-[6px] w-[6px] rounded-full bg-[rgb(var(--primary-color))]  flex-shrink-0" />
                  <span className="text-xl  text-black/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
    SECTION 8 · TESTIMONIALS — DUAL VOICE
    Drop this block directly after the Metrics section above
    ───────────────────────────────────────────────────────────── */}

      {/* <section className="py-[120px] px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <p className="text-[13px] tracking-[0.15em] uppercase text-black/40 mb-4 font-medium">
        Real stories from real people
      </p>
      <h2 className="text-3xl md:text-[42px] font-medium leading-tight text-[rgb(var(--secondary-color))]">
        Heard from both{" "}
        <span className="text-[rgb(var(--primary-color))] font-departure relative">
          sides
          <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
            <path d="M0,4 Q25,0 50,4 Q75,8 100,4" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
          </svg>
        </span>{" "}
        of the table
      </h2>
      <p className="mt-5 text-black/50 font-light text-lg leading-relaxed max-w-lg mx-auto">
        Candidates who finally got clarity. Employers who finally got confidence.
        Both in their own words.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {[
        {
          type: "Candidate",
          badgeBg: "bg-emerald-50",
          badgeText: "text-emerald-700",
          avatarBg: "bg-emerald-50",
          avatarText: "text-emerald-700",
          initials: "AR",
          name: "Aarav Rajan",
          role: "Product Associate · Bangalore",
          quote:
            "For the first time, I could see exactly where I stood in the process. Not just a rejection email — actual insight into how I came across, what signals I sent, and what to work on. That changed everything for me.",
          highlight: "see exactly where I stood",
        },
        {
          type: "Employer",
          badgeBg: "bg-violet-50",
          badgeText: "text-violet-700",
          avatarBg: "bg-violet-50",
          avatarText: "text-violet-700",
          initials: "SN",
          name: "Shruti Nair",
          role: "Head of People · Series B SaaS, Pune",
          quote:
            "We had over 200 applicants for one role. Within two days, we had a shortlist of five people — each with a detailed behavioural profile, a confidence score, and a communication summary. Our panel had never felt more prepared.",
          highlight: "never felt more prepared",
        },
        {
          type: "Candidate",
          badgeBg: "bg-emerald-50",
          badgeText: "text-emerald-700",
          avatarBg: "bg-emerald-50",
          avatarText: "text-emerald-700",
          initials: "PM",
          name: "Priya Menon",
          role: "Operations Analyst · Kochi",
          quote:
            "I was nervous going in — I'm not the most polished speaker. But the AI didn't penalise me for that. It picked up on how I think, how I handle pressure, and how I communicate under uncertainty. I got selected, and I finally understood why.",
          highlight: "how I think",
        },
        {
          type: "Employer",
          badgeBg: "bg-violet-50",
          badgeText: "text-violet-700",
          avatarBg: "bg-violet-50",
          avatarText: "text-violet-700",
          initials: "RK",
          name: "Rahul Krishnaswamy",
          role: "Founder · Growth-stage startup, Chennai",
          quote:
            "We'd been burned before by candidates who interviewed great but weren't a cultural fit. This platform doesn't just tell you if someone can answer questions — it tells you who they actually are when they're under a little pressure.",
          highlight: "who they actually are",
        },
      ].map((t, i) => (
        <div
          key={i}
          className="group relative border border-black/[0.08] rounded-sm p-8 bg-white transition-all duration-300 hover:border-black/[0.15] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
        >
          <span
            className={`absolute top-5 right-5 text-[11px] tracking-[0.15em] uppercase px-3 py-1.5 font-medium font-departure ${t.badgeText}`}
          >
            {t.type}
          </span>

          <div
            className="text-[rgb(var(--primary-color))] -mb-10 font-serif leading-none opacity-20"
            style={{ fontSize: 140 }}
          >
            &ldquo;
          </div>

          <div className="flex gap-0.5 mb-5">
            {[...Array(5)].map((_, s) => (
              <svg key={s} className="w-4 h-4 text-[rgb(var(--primary-color))]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-[15px] leading-[1.8] text-[#333] font-light">
            {t.quote.split(t.highlight).map((part, pi) =>
              pi === 0 ? (
                <span key={pi}>
                  {part}
                  <span className="font-medium text-[rgb(var(--secondary-color))] bg-gradient-to-r from-[rgb(var(--primary-color))]/10 to-transparent px-0.5">
                    {t.highlight}
                  </span>
                </span>
              ) : (
                <span key={pi}>{part}</span>
              )
            )}
          </p>

          <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-medium flex-shrink-0 ${t.avatarBg} ${t.avatarText} ring-2 ring-white`}
            >
              {t.initials}
            </div>
            <div>
              <p className="text-[15px] font-medium text-[#111]">{t.name}</p>
              <p className="text-[13px] text-black/40 mt-0.5">{t.role}</p>
            </div>
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-14 pt-10 border-t border-black/[0.06]">
      <p className="text-center text-[11px] tracking-[0.15em] uppercase text-black/30 mb-8">
        Trusted by teams across India
      </p>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {[
          { num: "4.9", unit: "/5", label: "Candidate rating" },
          { num: "12k+", unit: "", label: "Assessments completed" },
          { num: "340+", unit: "", label: "Companies onboarded" },
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-8">
            <div className="text-center">
              <p 
                className="text-[rgb(var(--secondary-color))] font-light tracking-tight"
                style={{ fontSize: 32, letterSpacing: "-1px" }}
              >
                {s.num}
                {s.unit && (
                  <span className="text-[rgb(var(--primary-color))] text-sm ml-0.5">{s.unit}</span>
                )}
              </p>
              <p className="text-[11px] tracking-[0.1em] uppercase text-black/35 mt-1.5">
                {s.label}
              </p>
            </div>
            {i < 2 && (
              <div className="w-px h-8 bg-black/[0.06] hidden sm:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section> */}

      {/* <AITransparencySection/> */}

      <section
        className="relative overflow-hidden pt-[35vh] px-6"
        style={{
          background: `
      linear-gradient(
        to bottom,

        rgb(255 255 255) 0%,

        rgb(88 86 201) 6%,

        rgb(3 9 20) 15%,

        rgb(3 9 20) 85%,

        rgb(3 9 20) 94%,

        rgb(3 9 20) 100%
      )
    `,
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            {/* <p className='text-[rgb(var(--primary-color))] text-xs tracking-[0.2em] uppercase font-["Departure"] mb-4'>
        What brings you here?
      </p> */}
            <h2 className="text-white text-3xl md:text-6xl font-medium leading-tight">
              One platform,{" "}
              <span className="text-[rgb(var(--primary-color))] font-black font-departure">
                two paths
              </span>
            </h2>

            <p className="mt-5 text-white/80 font-light leading-relaxed text-xl max-w-xl mx-auto">
              Whether you're looking for your next role or your next hire —
              everything starts with a conversation that actually means
              something.
            </p>
          </div>

          {/* Dual CTA Panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Candidate Panel */}
            <div
              className="group relative rounded-sm p-10 md:p-14 flex flex-col justify-between transition-all duration-500 overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              }}
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary-color))]/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-sm flex items-center justify-center bg-[rgb(var(--primary-color))]/10 mb-8 group-hover:bg-[rgb(var(--primary-color))]/15 transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-[rgb(var(--primary-color))]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>

                <h3 className="text-white text-2xl md:text-4xl font-medium leading-tight mb-4">
                  I'm looking for a job
                </h3>

                <p className="text-white/80 font-light leading-relaxed text-lg mb-8">
                  Skip the resume pile. Show employers how you actually think,
                  communicate, and handle pressure — not just what's on paper.
                </p>

                {/* What you get */}
                <div className="space-y-3 mb-10">
                  {[
                    "One interview. Shared with multiple employers.",
                    "Behavioural score, not keyword matching.",
                    "No technical trivia. Just who you are.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <svg
                        className="w-4 h-4 text-[rgb(var(--primary-color))] flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-lg font-light text-white/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="relative z-10">
                <button className="btn-primary w-full py-4 text-lg bg-white text-black hover:text-white hover:bg-[rgb(var(--primary-color))]">
                  <span>Start your interview</span>
                </button>
                <p className="text-center text-white/40 text-sm font-light mt-3">
                  Takes under 20 minutes · Free forever for candidates
                </p>
              </div>

              {/* Decorative corner */}
              <span className="absolute top-0 right-0 w-20 h-[1px] bg-gradient-to-l from-[rgb(var(--primary-color))]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Employer Panel */}
            <div
              className="group relative rounded-sm p-10 md:p-14 flex flex-col justify-between transition-all duration-500 overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(225deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              }}
            >
              {/* Subtle hover glow — opposite direction */}
              <div className="absolute inset-0 bg-gradient-to-bl from-[rgb(var(--primary-color))]/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-sm flex items-center justify-center bg-[rgb(var(--primary-color))]/10 mb-8 group-hover:bg-[rgb(var(--primary-color))]/15 transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-[rgb(var(--primary-color))]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>
                </div>

                <h3 className="text-white text-2xl md:text-4xl font-medium leading-tight mb-4">
                  I'm hiring
                </h3>

                <p className="text-white/80 font-light leading-relaxed text-lg mb-8">
                  Meet candidates who've been scored on attitude, confidence,
                  and communication — not just keyword-stuffed resumes.
                </p>

                {/* What you get */}
                <div className="space-y-3 mb-10">
                  {[
                    "Pre-assessed behavioural profiles.",
                    "Shortlist by culture fit, not just skills.",
                    "Go from 200 applicants to 5 in hours.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <svg
                        className="w-4 h-4 text-[rgb(var(--primary-color))] flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-lg font-light text-white/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="relative z-10">
                <button className="btn-outline-secondary text-lg py-4 w-full">
                  <span>See how it works</span>
                </button>
                <p className="text-center text-white/40 text-sm font-light mt-3">
                  Book a demo · See sample candidate profiles
                </p>
              </div>

              {/* Decorative corner */}
              <span className="absolute top-0 left-0 w-20 h-[1px] bg-gradient-to-r from-[rgb(var(--primary-color))]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Bottom trust reassurance */}
          <div className="mt-10 text-center">
            {/* <p className="text-white/20 text-xs font-light tracking-wide">
              Used by 340+ companies across India ·
              <span className="text-white/30">
                {" "}
                12,000+ candidates assessed
              </span>
            </p> */}
          </div>
        </div>
      </section>

      {/* <section className="py-10 pb-40">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our construction process and services."
          />

          

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            
            <div className="flex flex-col gap-5">
              {faqs
                .map((item, index) => ({ item, index }))
                .filter(({ index }) => index % 2 === 0)
                .map(({ item, index }) => (
                  <FAQItem
                    key={item.q}
                    item={item}
                    isOpen={openIndex === index}
                    onToggle={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  />
                ))}
            </div>

            
            <div className="flex flex-col gap-5">
              {faqs
                .map((item, index) => ({ item, index }))
                .filter(({ index }) => index % 2 === 1)
                .map(({ item, index }) => (
                  <FAQItem
                    key={item.q}
                    item={item}
                    isOpen={openIndex === index}
                    onToggle={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  />
                ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CONSULTATION FORM SECTION */}
      {/* <section className="pb-40">
        <div className="max-w-7xl mx-auto px-6" id="consultation">
          <div className="rounded-sm border border-[rgb(var(--text))]/20 bg-[rgb(var(--bg))]/40 p-8 sm:p-10 shadow-sm">
            <h3 className="text-3xl font-semibold tracking-tight text-[rgb(var(--text))]">
              Request a Project Consultation
            </h3>
            <p className="mt-3 text-[rgb(var(--text-dark))] text-md">
              Share your details and project requirements — we’ll get back to
              you shortly.
            </p>

            <form
              onSubmit={onSubmit}
              className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
             
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[rgb(var(--text))]">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`rounded-sm border px-4 py-3 bg-[rgb(var(--bg))]/60 text-[rgb(var(--text))] outline-none transition
              ${errors.name ? "border-red-500/60" : "border-[rgb(var(--text))]/20"}
              focus:border-[rgb(var(--color-primary))]/70`}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[rgb(var(--text))]">
                  Email
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className={`rounded-sm border px-4 py-3 bg-[rgb(var(--bg))]/60 text-[rgb(var(--text))] outline-none transition
              ${errors.email ? "border-red-500/60" : "border-[rgb(var(--text))]/20"}
              focus:border-[rgb(var(--color-primary))]/70`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[rgb(var(--text))]">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10 digit phone number"
                  maxLength={10}
                  className={`rounded-sm border px-4 py-3 bg-[rgb(var(--bg))]/60 text-[rgb(var(--text))] outline-none transition
              ${errors.phone ? "border-red-500/60" : "border-[rgb(var(--text))]/20"}
              focus:border-[rgb(var(--color-primary))]/70`}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              
              <div className="flex flex-col gap-2 lg:col-span-2">
                <label className="text-sm font-medium text-[rgb(var(--text))]">
                  Project Details
                </label>
                <textarea
                  name="details"
                  value={form.details}
                  onChange={handleChange}
                  placeholder="Tell us about your project (location, budget range, size, timeline...)"
                  rows={5}
                  className={`rounded-sm border px-4 py-3 
  bg-[rgb(var(--bg))]/60 text-[rgb(var(--text))] 
  placeholder:text-black/40
  outline-none transition resize-none
  ${errors.details ? "border-red-500/60" : "border-[rgb(var(--text))]/20"}
  focus:border-[rgb(var(--color-primary))]/70`}
                />
                {errors.details ? (
                  <p className="text-sm text-red-500">{errors.details}</p>
                ) : (
                  <p className="text-sm text-[rgb(var(--text))]/50">
                    Minimum 10 characters
                  </p>
                )}
              </div>

              
              <div className="lg:col-span-2 flex flex-col gap-3 items-start">
                <Button variant="primary" disabled={submittedOnce}>
                  {submittedOnce ? "Submitting..." : "Submit Request"}
                </Button>

                {showSuccess && (
                  <p className="text-sm font-medium text-green-600">
                    Your message has been sent successfully. We’ll contact you
                    shortly.
                  </p>
                )}

                <p className="text-sm text-[rgb(var(--text))]/60 mt-2 sm:mt-3">
                  We respect your privacy. Your details are used only for
                  contacting you.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section> */}
    </div>
  );
}
