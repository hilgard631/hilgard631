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
            If purchasing 6 or more bottles, pickup outside of sales hours can
            be arranged. Please complete the{" "}
            <Link
              className="underline text-primary"
              href="https://docs.google.com/forms/d/1_xbRfVVhoxrf1WhNJ2NGPMpRd4FnJlNKz2uYTGnDK9A/viewform?edit_requested=true"
            >
              contact form
            </Link>{" "}
            to make arrangements.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
          <div>
            <h2 className="text-lg font-bold mb-1">April</h2>
            <ul className="list-inside space-y-1">
              <li>Friday, April 17, 12-2 PM</li>
            </ul>
          </div>
        </div>
        <p className="text-lg font-bold mb-1">
          More dates to be added beginning in June
        </p>
        <MapEmbed />
      </div>
    </section>
  );
};

export default SplashPurchase;
