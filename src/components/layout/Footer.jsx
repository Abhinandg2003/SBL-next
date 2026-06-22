"use client";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import NavLink from "@/components/Navlink";
import Link from "next/link";
import LogoReveal from "@/components/logoreveal";


export default function Footer() {
  return (
    <footer className="  max-w-full overflow-hidden border-t border-[rgb(var(--secondary-color))]/90 ">

      <div className=" px-10 md:px-30 py-12 bg-[rgb(var(--secondary-color))] ">
        
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <NavLink href="/">
                  {/* Light mode logo */}
                  <div className="logo-black h-14 w-40 bg-contain bg-no-repeat bg-left" />
                </NavLink>
              </div>
            </div>

            <p className="mt-4 text-lg leading-relaxed text-white/80 max-w-lg">
              Unity Heights Constructions delivers premium residential and
              commercial spaces with precision and care. Trust, transparency,
              and excellence guide every project we undertake.
            </p>

            <p className="mt-4 text-lg leading-10 text-white/80 mb-10 max-w-lg">
              Address <br />
              City <br />
              Pincode
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-lg font-semibold pl-2 text-white ">
              Company
            </p>

            <div className="mt-4 space-y-0 text-lg ">
              <Link className="block text-white/60 bg-[rgb(var(--primary-color))]/0 hover:bg-[rgb(var(--primary-color))]/10 hover:text-[rgb(var(--primary-color))] py-2 px-2 rounded-md  transition-all duration-300   -mb-2   " href="/about">
                About
              </Link> <br />    
              <Link className="block text-white/60 bg-[rgb(var(--primary-color))]/0 hover:bg-[rgb(var(--primary-color))]/10 hover:text-[rgb(var(--primary-color))] py-2 px-2 rounded-md  transition-all duration-300   -mb-2  " href="/strengths">
                Why Us
              </Link> <br />
              <Link className="block text-white/60 bg-[rgb(var(--primary-color))]/0 hover:bg-[rgb(var(--primary-color))]/10 hover:text-[rgb(var(--primary-color))] py-2 px-2 rounded-md  transition-all duration-300   -mb-2 " href="/services">
                Our Services
              </Link>
            </div>
          </div>

          {/* Legal + Contact */}
          <div>
            <p className="text-lg font-semibold text-white pl-2  ">
              Legal
            </p>

            <div className="mt-4 space-y-3 text-lg">
              <Link className="block text-white/60 bg-[rgb(var(--primary-color))]/0 mb-15 hover:bg-[rgb(var(--primary-color))]/10 hover:text-[rgb(var(--primary-color))] py-2 px-2 rounded-md  transition-all duration-300    " href="/privacy-policy">
                Privacy Policy
              </Link>
            </div>

            <p className="mt-8 text-lg font-semibold text-white pl-2">
              Get in touch
            </p>

            <div className="mt-4 space-y-2 text-lg text-white">
              <a
                href="tel:+91XXXXXXXXXX"
                className="block text-white/60 bg-[rgb(var(--primary-color))]/0 hover:bg-[rgb(var(--primary-color))]/10 hover:text-[rgb(var(--primary-color))] py-2 px-2 rounded-md mb-3 transition-all duration-300   "
              >
                📞 +91 XXXXX XXXXX
              </a>

              <a
                href="mailto:unityheights2010@gmail.com"
                className="block text-white/60 bg-[rgb(var(--primary-color))]/0 hover:bg-[rgb(var(--primary-color))]/10 hover:text-[rgb(var(--primary-color))] py-2 px-2 rounded-md  transition-all duration-300   -mb-2 "
              >
                ✉️ unityheights2010@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* <div className="py-0">
  <h1 className="w-full flex justify-between text-[200px] font-extrabold text-white">
  <span>L</span>
  <span>E</span>
  <span>A</span>
  <span>R</span>
  <span>N</span>
  <span>I</span>
  <span>N</span>
  <span>G</span>

  </h1>
</div> */}

<div className="py-0 mb-10">
  <LogoReveal/>
</div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row text-start justify-between items-center gap-3 pt-6 text-sm text-white">
          <p>© {new Date().getFullYear()} Unity Heights Constructions. All rights reserved.</p>

          <div className="flex flex-row gap-4 pt-5 md:pt-0">
            <a href="#" className="hover:text-[rgb(var(--primary-color))] bg-[rgb(var(--primary-color))]/0 p-2 hover:bg-[rgb(var(--primary-color))]/10 transition rounded-md ">
              <FaInstagram className="w-5" />
            </a>
            <a href="#" className="hover:text-[rgb(var(--primary-color))] bg-[rgb(var(--primary-color))]/0 p-2 hover:bg-[rgb(var(--primary-color))]/10 transition rounded-md ">
              <FaFacebook className="w-5" />
            </a>
            <a href="#" className="hover:text-[rgb(var(--primary-color))] bg-[rgb(var(--primary-color))]/0 p-2 hover:bg-[rgb(var(--primary-color))]/10 transition rounded-md ">
              <FaYoutube className="w-5" />
            </a>
            <a href="#" className="hover:text-[rgb(var(--primary-color))] bg-[rgb(var(--primary-color))]/0 p-2 hover:bg-[rgb(var(--primary-color))]/10 transition rounded-md ">
              <FaLinkedin className="w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
