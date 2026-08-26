import Link from "next/link";
import MapEmbed from "./components/mapEmbed";

const SplashPurchase: React.FC = () => {
  return (
    <section id="purchase" className="main-container">
      <h2 className="pt-24 pb-4 text-3xl text-primary">
        Purchasing Info - Local Pickup Only
      </h2>

      <div className="flex flex-col gap-5">
        <div className="w-full md:w-3/4 pb-1">
          <p className="pb-8 text-xl">
            All our wines are available exclusively for local pickup at the UC
            Davis Teaching and Research Winery (631 Hilgard Ln, Davis CA). No
            shipping, no deliveries. We are unable to offer tastings of the
            wines.
          </p>
          <p className="pb-4 text-xl">
            If purchasing 6 or more bottles, pickup outside of regular sales
            hours may be arranged{" "}
            <strong>during normal business hours, Monday–Friday.</strong>{" "}
            We are unable to accommodate pickups after business hours, on
            weekends, or on university holidays. Alternate pickup times are{" "}
            <strong>
              not guaranteed and will be scheduled based on staff availability
            </strong>
            . Please complete the{" "}
            <Link
              className="underline text-primary"
              href="https://docs.google.com/forms/d/1_xbRfVVhoxrf1WhNJ2NGPMpRd4FnJlNKz2uYTGnDK9A/viewform?edit_requested=true"
            >
              contact form
            </Link>{" "}
            to request an alternate pickup time.
          </p>
          <p className="pb-4 text-xl">
            Wines can only be purchased using a valid credit or debit card with
            a Visa, Mastercard, AMEX or Discover symbol (physical or tap to
            pay). We do not accept other forms of payment.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
          <div>
            <h2 className="text-lg font-bold mb-1">September</h2>
            <ul className="list-inside space-y-1">
              <li>Friday, September 4, 12-2 PM</li>
              <li>Tuesday, September 15, 2-4 PM</li>
              <li>Wednesday, September 16, 11 AM-1 PM</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-1">October</h2>
            <ul className="list-inside space-y-1">
              <li>Friday, October 1, 10 AM-12 PM</li>
              <li>Thursday, October 15, 11 AM-1 PM</li>
              <li>Thursday, October 29, 12-2 PM</li>
            </ul>
          </div>
        </div>
        <MapEmbed />
      </div>
    </section>
  );
};

export default SplashPurchase;
