import MapEmbed from "./components/mapEmbed";

const SplashPurchase: React.FC = () => {
  return (
    <section id="purchase" className="main-container">
      <h2 className="pt-24 pb-4 text-3xl text-primary">
        Purchasing Info - Local Pickup Only
      </h2>

      <div className="flex flex-col gap-5">
        <div className="w-full md:w-3/4 pb-4">
          <p className="pb-8 text-xl">
            All our wines are available exclusively for local pickup at the
            address below. No shipping, no deliveries. We are unable to offer
            tastings of the wines.
          </p>
          <address
            className="not-italic text-lg border-l-4 border-primary ps-4"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <span itemProp="name">Teaching and Research Winery</span>
            <br />
            <span itemProp="streetAddress">631 Hilgard Rd</span>
            <br />
            <span itemProp="addressLocality">Davis</span>,{" "}
            <span itemProp="addressRegion">CA</span>{" "}
            <span itemProp="postalCode">95616</span>
          </address>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
          <div>
            <h2 className="text-xl font-bold mb-2">August</h2>
            <ul className="list-inside space-y-1">
              <li>Tuesday, August 12, 11am – 1pm</li>
              <li>Thursday, August 28, 12pm – 2pm</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">September</h2>
            <ul className="list-inside space-y-1">
              <li>Tuesday, September 16, 11am – 1pm</li>
              <li>Wednesday, September 17, 11am – 1pm</li>
              <li>Thursday, September 18, 11am – 1pm</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">October</h2>
            <ul className="list-inside space-y-1">
              <li>Thursday, October 2, 11am – 1pm</li>
              <li>Tuesday, October 14, 11am – 1pm</li>
              <li>Thursday, October 30, 11am – 1pm</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">November</h2>
            <ul className="list-inside space-y-1">
              <li>Thursday, November 13, 11am – 1pm</li>
              <li>Tuesday, November 25, 11am – 1pm</li>
            </ul>
          </div>
        </div>
        <MapEmbed />
      </div>
    </section>
  );
};

export default SplashPurchase;
