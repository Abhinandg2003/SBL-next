"use client";

const logos = [
  { id: 1, src: "/images/logos/airbnb.svg", alt: "Airbnb logo" },
  { id: 2, src: "/images/logos/stripe.svg", alt: "Stripe logo" },
  { id: 3, src: "/images/logos/linkedin.svg", alt: "Linkedin logo" },
  { id: 4, src: "/images/logos/atlassian.svg", alt: "Atlassian logo" },
  { id: 5, src: "/images/logos/ibm.svg", alt: "IBM logo" },
  { id: 6, src: "/images/logos/snap.svg", alt: "Snap inc logo" },
  { id: 7, src: "/images/logos/airbnb.svg", alt: "Airbnb logo" },
  { id: 8, src: "/images/logos/stripe.svg", alt: "Stripe logo" },
  { id: 9, src: "/images/logos/linkedin.svg", alt: "Linkedin logo" },
  { id: 10, src: "/images/logos/atlassian.svg", alt: "Atlassian logo" },
  { id: 11, src: "/images/logos/ibm.svg", alt: "IBM logo" },
  { id: 12, src: "/images/logos/snap.svg", alt: "Snap inc logo" },

];

const logos2 = [
  { id: 1, src: "/images/logos/doordash.svg", alt: "Doordash logo" },
  { id: 2, src: "/images/logos/adobe.svg", alt: "Adobe logo" },
  { id: 3, src: "/images/logos/paypal.svg", alt: "Paypal logo" },
  { id: 4, src: "/images/logos/goldman.svg", alt: "Goldman Sachs logo" },
  { id: 5, src: "/images/logos/canva.svg", alt: "Canva logo" },
  { id: 6, src: "/images/logos/doordash.svg", alt: "Doordash logo" },
  { id: 7, src: "/images/logos/adobe.svg", alt: "Adobe logo" },
  { id: 8, src: "/images/logos/paypal.svg", alt: "Paypal logo" },
  { id: 9, src: "/images/logos/goldman.svg", alt: "Goldman Sachs logo" },
  { id: 10, src: "/images/logos/canva.svg", alt: "Canva logo" },
];

const marqueeStyles = `
  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee 28s linear infinite;
  }
  .marquee-track-reverse {
    display: flex;
    width: max-content;
    animation: marquee 22s linear infinite reverse;
  }
  .marquee-wrapper {
    overflow: hidden;
    width: 100%;
    mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  }
`;

function MarqueeRow({ items, className = "marquee-track" }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrapper">
      <div className={className}>
        {doubled.map((image, index) => (
          <img
            key={`${image.id}-${index}`}
            src={image.src}
            alt={image.alt}
            className="h-[22px] object-contain mx-10 opacity-80"
          />
        ))}
      </div>
    </div>
  );
}

export default function LogoStrip() {
  return (
    <>
      <style>{marqueeStyles}</style>
      <div className="flex flex-col gap-10 mt-18">
        <MarqueeRow items={logos} className="marquee-track" />
        <MarqueeRow items={logos2} className="marquee-track-reverse" />
      </div>
    </>
  );
}