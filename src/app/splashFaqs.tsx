import Accordion from "./components/Accordion";
import Link from "next/link";

export default function SplashFAQ() {
  return (
    <section className="main-container">
      <div className="flex flex-row">
        <div className="w-full">
          <h2 className="pt-24 pb-4 text-2xl text-primary">
            Frequently Asked Questions
          </h2>
          <Accordion title="How do I choose the right wine for a gift?">
            <p className="border-primary border-l-2 w-[100%] md:w-[65%] px-4 text-md">
              Consider the recipient’s preferences—red or white, dry or
              sweet—and the occasion. A safe choice is a popular varietal like
              Pinot Noir or Chardonnay.
            </p>
          </Accordion>
          <Accordion title="Can I order wine online and have it delivered?">
            <p className="border-primary border-l-2 w-[100%] md:w-[65%] px-4 text-md">
              Yes, many regions allow online wine orders with home delivery.
              Make sure to check your local laws and the seller’s shipping
              policy.
            </p>
          </Accordion>
          <Accordion title="What’s the difference between vintage and non-vintage wines?">
            <p className="border-primary border-l-2 w-[100%] md:w-[65%] px-4 text-md">
              Vintage wines are made from grapes harvested in a single year,
              often indicating quality and aging potential. Non-vintage blends
              use grapes from multiple years for consistency.
            </p>
          </Accordion>

          <Link href="">View all FAQs</Link>
        </div>
      </div>
    </section>
  );
}
