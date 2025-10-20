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
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-bold mb-2">October</h2>
            <ul className="list-inside space-y-1">
              <li>Thursday, October 30, 2pm – 4pm</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">November</h2>
            <ul className="list-inside space-y-1">
              <li>Sunday, November 2, 11am – 1pm</li>
              <li>Thursday, November 13, 2pm – 4pm</li>
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
