"use client";

import { useEffect, useState ,useRef} from "react";
import LogoStrip from "@/components/Logostrip";
import TeamSection from "@/components/Team";
import FAQ from "@/components/Faq";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";


gsap.registerPlugin(ScrollTrigger);



const text = `
We’ve entered a new era of software development where human and AI
build together. This changes the skills you need as a developer, and
the way companies engage, hire, and upskill technical talent. In
short, this changes everything.

We’re embracing these changes with you, and we’ve reinvented our
products to meet the moment.
`;



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

export default function About() {

    const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll(".word");

    gsap.fromTo(
      words,
      {
        opacity: 0.15,
      },
      {
        opacity: 1,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 3,
        },
      },
    );
  }, []);


  const [showSuccess, setShowSuccess] = useState(false);

  const [submittedOnce, setSubmittedOnce] = useState(false);

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

  const [openIndex, setOpenIndex] = useState(null);

  const scrollToConsultation = () => {
    const section = document.getElementById("consultation");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full  ">
      {/* HERO */}
      <section className="relative overflow-hidden  bg-white">

        {/* Background blobs */}
  <div className="absolute inset-0 pointer-events-none">
    
    {/* Green blob */}
    <div className="absolute -top-60 left-1/3 w-[35rem] h-[35rem] rounded-full bg-blue-400/5 blur-[140px]" />

    {/* Red blob */}
    <div className="absolute bottom-20 right-[-10rem] w-[30rem] h-[30rem] rounded-full bg-red-400/10 blur-[140px]" />

    {/* Small green accent */}

  </div>


        <div className="grid grid-cols-1  h-[100vh]  relative lg:grid-cols-2 gap-10 px-0 lg:px-30 p-10 ">
          <div className="felx relative my-auto items-center justify-center">
          <div className="flex-col  pl-10 lg:pl-0 relative  justify-center items-center ">
            <h1 className=" text-left  mt-0 text-5xl  md:text-[70px] lg:text-6  mb-5   tracking-tight leading-[1.05] text-black">
              Hire for{" "}
              <span className="text-[rgb(var(--primary-color))] font-departure font-black text-[70px] ">
                {" "}
                real skills,{" "}
              </span>
              <br /> Ignore <br />{" "}
              <span className="relative inline-block">AI resumes</span>
            </h1>

            <p className=" max-w-md text-xl my-5 mb-10 tracking-wide leading-7">
              De-risk every hire with science-backed assessments. Measure how
              candidates think, solve, and perform in an AI-powered world.
            </p>

            <div className="w-[80%] h-17 relative p-2 r flex   justify-start items-center ">
              <a className="btn-primary mr-5 text-lg py-2.5">
                Try for free
              </a>
              <a href="/contact" className="btn-outline-primary text-lg py-2.5">
                Contact us
              </a>
            </div>
          </div>
          </div>

          <div className="h-[80%] w-full relative overflow-hidden flex my-auto rounded-lg    justify-center items-center">
            <img src="/images/about.avif" alt="" />
          </div>
        </div>
      </section>

      <LogoStrip />

               <section
        className="relative flex overflow-hidden mt-20 py-20 items-center justify-center h-[150vh]"
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
          <h1 className=" font-medium text-white text-center mb-5 text-6xl font-normal">
            About <span className=' text-[rgb(var(--primary-color))] font-["Departure"] font-black'>Us</span>
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
      </section>

      <div
        className="mt-30  py-10"
        
      >


        
        <h1 className="text-black text-center mb-10 font-medium  mt-40 text-6xl">
          The{" "}
          <span className='font-departure font-black text-[rgb(var(--primary-color))]'>
            Problem
          </span>
        </h1>

        <div className="max-w-7xl mx-auto h-screen ">
          <p className="text-2xl font-normal leading-10 text-black  text-center">
            Resumes lie. Aptitude tests miss what matters. Great hires fail
            because of attitude, not ability. <br />{" "}
          </p>
          <p className=" text-black text-3xl leading-10 font-medium  mb-10  text-center">
            {" "}
            We exist to fix that.
          </p>

          <div className="grid grid-cols-3 gap-20 justify-between max-w-6xl py-10 mx-auto  items-center  px-20">
            <div className="flex-col ">
              <div className="flex justify-center items-center ">
                <img
                  className="flex justify-center items-center h-30 hover:scale-105 transition-all duration-500"
                  src="/images/bulbpurple.png"
                  alt=""
                />
              </div>
              <p className="text-black text-3xl mt-5 text-center font-medium ">
                Easy Analysis
              </p>
              <p className="text-black/60 text-lg mt-2 text-center max-w-sm">Standardize processes, skills, and roles across your org and integrate with your HR tech stack</p>
            </div>

           <div className="flex-col ">
              <div className="flex justify-center items-center ">
                <img
                  className="flex justify-center items-center h-30 hover:scale-105 transition-all duration-500"
                  src="/images/handpurple.png"
                  alt=""
                />
              </div>
              <p className="text-black text-3xl mt-5 text-center font-medium ">
                Easy Analysis
              </p>
                            <p className="text-black/60 text-lg mt-2 text-center max-w-sm">Standardize processes, skills, and roles across your org and integrate with your HR tech stack</p>

            </div>

            <div className="flex-col ">
              <div className="flex justify-center items-center ">
                <img
                  className="flex justify-center items-center h-30 hover:scale-105 transition-all duration-500"
                  src="/images/gearpurple.png"
                  alt=""
                />
              </div>
              <p className="text-black text-3xl  mt-5 text-center font-medium ">
                Easy Analysis
              </p>
                            <p className="text-black/60 text-lg mt-2 text-center max-w-sm">Standardize processes, skills, and roles across your org and integrate with your HR tech stack</p>

            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-20">
        <h1 className="text-black text-center mb-10  mt-40 text-5xl">
          What We've{" "}
          <span className='font-["Departure"] text-[rgb(var(--primary-color))]'>
            Built
          </span>
        </h1>
      </div> */}

      {/* WHAT WE BUILD */}

      <div className="py-32 bg-white relative overflow-hidden">
  {/* Decorative background elements */}
  <div className="absolute top-100 left-0 w-96 h-96 bg-[rgb(var(--primary-color))]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    
    {/* Section Header */}
    <div className="text-center mb-24">
      
      <h1 className="text-5xl md:text-6xl lg:text-6xl font-medium  mb-6">
        What{" "}
        <span className='font-["Departure"] font-black text-[rgb(var(--primary-color))] relative inline-block'>
          We've Built
          {/* <svg className="absolute -bottom-3 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
            <path d="M0 4C50 0 150 8 200 4" stroke="rgb(var(--primary-color))" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
          </svg> */}
        </span>
      </h1>
      {/* <p className="text-black/60 text-lg max-w-2xl mx-auto mt-6">
        Three tools. One mission. Making soft skills visible for everyone.
      </p> */}
    </div>

    {/* Feature 1 - Image Left, Content Right */}
    <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
      {/* Image Side */}
      <div className="lg:w-1/2 relative group">
          <img src="/images/ai_interview.png" className="h-[full] rounded-sm w-full object-cover" alt="" />

        {/* Floating element */}
      </div>

      {/* Content Side */}
      <div className="lg:w-1/2 space-y-6">
        
        <h2 className="text-4xl md:text-5xl font-departure font-semibold text-black leading-tight">
          AI Tester
        </h2>
        <p className="text-xl text-black leading-relaxed">
          No multiple choice. No trick questions. Just real workplace situations that reveal how you actually think and respond.
        </p>
        <div className="space-y-3 pt-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[rgb(var(--primary-color))]/20 flex items-center justify-center mt-0.5">
              <div className="w-2 h-2 bg-[rgb(var(--primary-color))] rounded-full"></div>
            </div>
            <p className="text-black/80 text-lg">Asks "what would you do" scenarios, not "what is the answer"</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[rgb(var(--primary-color))]/20 flex items-center justify-center mt-0.5">
              <div className="w-2 h-2 bg-[rgb(var(--primary-color))] rounded-full"></div>
            </div>
            <p className="text-black/80 text-lg">Measures problem-solving, empathy, and communication style</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[rgb(var(--primary-color))]/20 flex items-center justify-center mt-0.5">
              <div className="w-2 h-2 bg-[rgb(var(--primary-color))] rounded-full"></div>
            </div>
            <p className="text-black/80 text-lg">No right or wrong — just your genuine response</p>
          </div>
        </div>
        <button className="group flex items-center gap-2 text-[rgb(var(--primary-color))] font-semibold mt-6 hover:gap-4 transition-all">
          Learn how it works 
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>

    {/* Feature 2 - Image Right, Content Left */}
    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center mb-32">
      {/* Image Side */}
      <div className="lg:w-1/2 relative group">
        <img src="/images/expression.png" className="h-[full] rounded-sm w-full object-cover" alt="" />
      </div>

      {/* Content Side */}
      <div className="lg:w-1/2 space-y-6">
        
        <h2 className="text-4xl md:text-5xl font-departure font-semibold text-black leading-tight">
          Expression Analysis
        </h2>
        <p className="text-xl text-black leading-relaxed">
          We read confidence signals — not your face. Eye contact, poise, clarity. Everything else? Ignored.
        </p>
        <div className="space-y-3 pt-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[rgb(var(--primary-color))]/20 flex items-center justify-center mt-0.5">
              <div className="w-2 h-2 bg-[rgb(var(--primary-color))] rounded-full"></div>
            </div>
            <p className="text-black/80 text-lg">Measures how you communicate, not how you look</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[rgb(var(--primary-color))]/20 flex items-center justify-center mt-0.5">
              <div className="w-2 h-2 bg-[rgb(var(--primary-color))] rounded-full"></div>
            </div>
            <p className="text-black/80 text-lg">Age, gender, ethnicity — completely filtered out</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[rgb(var(--primary-color))]/20 flex items-center justify-center mt-0.5">
              <div className="w-2 h-2 bg-[rgb(var(--primary-color))] rounded-full"></div>
            </div>
            <p className="text-black/80 text-lg">Gives you a confidence score, not a judgment</p>
          </div>
        </div>
        <button className="group flex items-center gap-2 text-[rgb(var(--primary-color))] font-semibold mt-6 hover:gap-4 transition-all">
          See how we stay fair
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>

    {/* Feature 3 - Image Left, Content Right */}
    <div className="flex flex-col lg:flex-row gap-16 items-center">
      {/* Image Side */}
      <div className="lg:w-1/2 relative group">
        <img src="/images/dashboard.png" className="h-[full] rounded-sm w-full object-cover" alt="" />
      </div>

      {/* Content Side */}
      <div className="lg:w-1/2 space-y-6">
        
        <h2 className="text-4xl md:text-5xl font-departure font-semibold text-black leading-tight">
          Dual Dashboard
        </h2>
        <p className="text-xl text-black leading-relaxed">
          One platform. Two experiences. Candidates see their growth. Employers see their shortlist.
        </p>
        <div className="space-y-3 pt-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[rgb(var(--primary-color))]/20 flex items-center justify-center mt-0.5">
              <div className="w-2 h-2 bg-[rgb(var(--primary-color))] rounded-full"></div>
            </div>
            <p className="text-black/80 text-lg">Candidates: See your score, get feedback, track progress</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[rgb(var(--primary-color))]/20 flex items-center justify-center mt-0.5">
              <div className="w-2 h-2 bg-[rgb(var(--primary-color))] rounded-full"></div>
            </div>
            <p className="text-black/80 text-lg">Employers: Rank shortlists by soft skills instantly</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[rgb(var(--primary-color))]/20 flex items-center justify-center mt-0.5">
              <div className="w-2 h-2 bg-[rgb(var(--primary-color))] rounded-full"></div>
            </div>
            <p className="text-black/80 text-lgtext-gray-600">No more guessing. No more gut feelings.</p>
          </div>
        </div>
        <button className="group flex items-center gap-2 text-[rgb(var(--primary-color))] font-semibold mt-6 hover:gap-4 transition-all">
          Explore the dashboard
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>

    {/* Divider with personality */}
    
  </div>
</div>






{/* <div className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <h1 className="text-4xl md:text-5xl text-center mb-10">
      Who's{" "}
      <span className='font-["Departure"] text-[rgb(var(--primary-color))]'>
        Behind It
      </span>
    </h1>

    <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-4xl mx-auto mt-16">
      <div className="text-center">
        <div className="w-40 h-40 mx-auto rounded-md bg-gradient-to-br from-[rgb(var(--primary-color))] to-teal-600 p-1 mb-5">
          <div className="w-full h-full rounded-md bg-gray-200 flex items-center justify-center overflow-hidden">
            <span className="text-5xl">👤</span>
          </div>
        </div>
        <h3 className="text-2xl font-semibold">Alex Rivera</h3>
        <p className="text-[rgb(var(--primary-color))] font-medium mt-1">Founder & CEO</p>
        <p className="text-gray-600 mt-3 max-w-xs mx-auto">
          Previously hired 200+ people. Saw attitude get ignored. Decided to fix it.
        </p>
      </div>

      <div className="text-center">
        <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-[rgb(var(--primary-color))] to-teal-600 p-1 mb-5">
          <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <span className="text-5xl">👤</span>
          </div>
        </div>
        <h3 className="text-2xl font-semibold">Jamie Chen</h3>
        <p className="text-[rgb(var(--primary-color))] font-medium mt-1">Co-Founder & CTO</p>
        <p className="text-gray-600 mt-3 max-w-xs mx-auto">
          Built AI systems for 5+ years. Focused on ethical, bias-aware models.
        </p>
      </div>
    </div>

    <p className="text-center text-gray-500 mt-12 text-sm">
      We're small. We're building in public. And we're hiring —{" "}
      <a href="#" className="text-[rgb(var(--primary-color))] hover:underline">join us →</a>
    </p>
  </div>
</div> */}



<TeamSection/>







{/* <div className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6">
    <h1 className="text-4xl md:text-5xl text-center mb-10">
      Got{" "}
      <span className='font-["Departure"] text-[rgb(var(--primary-color))]'>
        Questions?
      </span>
    </h1>

    <div className="space-y-6 mt-16">
      <div className="border-b border-gray-200 pb-6">
        <button className="w-full text-left flex justify-between items-center group">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[rgb(var(--primary-color))] transition-colors">
            Is this an aptitude test?
          </h3>
          <svg className="w-6 h-6 text-gray-400 group-hover:text-[rgb(var(--primary-color))] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <p className="text-gray-600 mt-3 pl-0">
          No. Zero math. Zero trick questions. We test soft skills and attitude — how you handle real workplace situations.
        </p>
      </div>

      <div className="border-b border-gray-200 pb-6">
        <button className="w-full text-left flex justify-between items-center group">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[rgb(var(--primary-color))] transition-colors">
            Does the AI judge my face/looks?
          </h3>
          <svg className="w-6 h-6 text-gray-400 group-hover:text-[rgb(var(--primary-color))] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <p className="text-gray-600 mt-3 pl-0">
          No. It tracks confidence signals — eye contact, poise, clarity. Your appearance, age, gender? Completely ignored.
        </p>
      </div>

      <div className="border-b border-gray-200 pb-6">
        <button className="w-full text-left flex justify-between items-center group">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[rgb(var(--primary-color))] transition-colors">
            How accurate is it for a new company?
          </h3>
          <svg className="w-6 h-6 text-gray-400 group-hover:text-[rgb(var(--primary-color))] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <p className="text-gray-600 mt-3 pl-0">
          We're honest: we're new. Try us with one candidate. Judge the results yourself. Our early pilots show 89% correlation with hiring manager satisfaction.
        </p>
      </div>

      <div className="border-b border-gray-200 pb-6">
        <button className="w-full text-left flex justify-between items-center group">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[rgb(var(--primary-color))] transition-colors">
            Is it free for candidates?
          </h3>
          <svg className="w-6 h-6 text-gray-400 group-hover:text-[rgb(var(--primary-color))] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <p className="text-gray-600 mt-3 pl-0">
          Yes. Always. Candidates never pay. Employers pay — that's how we keep the lights on.
        </p>
      </div>
    </div>
  </div>
</div> */}

<FAQ/>




{/* <div className="py-20 bg-gradient-to-br from-[rgb(var(--primary-color))] to-teal-700">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 text-center hover:bg-white/15 transition-all duration-500">
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">Looking for a job?</h2>
        <p className="text-white/80 mb-8">Test your soft skills. See your score. Get feedback that actually helps.</p>
        <button className="bg-white text-[rgb(var(--primary-color))] px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
          Start applying →
        </button>
        <p className="text-white/60 text-sm mt-4">Always free for candidates</p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 text-center hover:bg-white/15 transition-all duration-500">
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">Looking to hire?</h2>
        <p className="text-white/80 mb-8">Shortlist by soft skills. See confidence scores. Hire attitude-first.</p>
        <button className="bg-white text-[rgb(var(--primary-color))] px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
          See employer demo →
        </button>
        <p className="text-white/60 text-sm mt-4">First 5 companies get 6 months free</p>
      </div>

    </div>
  </div>
</div> */}

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
              <span className="text-[rgb(var(--primary-color))]  font-black font-departure">
                two paths
              </span>
            </h2>
            <p className="mt-5 text-white/80 font-light leading-relaxed text-xl max-w-2xl mx-auto">
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
                <button className="btn-primary w-full py-4 text-base bg-white text-black hover:text-white hover:bg-[rgb(var(--primary-color))]">
                  <span>Start your interview</span>
                </button>
                <p className="text-center text-white/40 text-md font-light mt-3">
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
                <button className="btn-outline-secondary text-base py-4 w-full">
                  <span>See how it works</span>
                </button>
                <p className="text-center text-white/40 text-md font-light mt-3">
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
      

    
    </div>
  );
}
