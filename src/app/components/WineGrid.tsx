"use client";

import Image from "next/image";
import { useState } from "react";

const wines = [
  {
    name: "9 Lives",
    type: "Sauvignon Blanc",
    year: 2025,
    price: 30.0,
    location: "Oakville AVA, Napa Valley",
    image: "./productshots/9lives-sb.jpg",
    alch: "14.5% ABV | 90% Sauvignon Blanc, 10% Albariño",
    description:
      "Curious, lively, and impossible to ignore. 9 Lives Sauvignon Blanc captures the playful spirit of a cat on the prowl. Bright notes of tropical fruit, green apple, and a hint of citrus leap from the glass. Finishing bold and refreshing.",
  },
  {
    name: "9 Lives",
    type: "Petite Sirah",
    year: 2025,
    price: 40.0,
    location: "Yolo County",
    image: "./productshots/9lives-ps.jpg",
    alch: "14.5% ABV | 96% Petite Sirah, 2% Cabernet Sauvignon, 1.2% Merlot, 0.8% Cabernet Franc",
    description:
      "Dark, smooth, and a little mysterious. 9 Lives Petite Sirah embodies the quiet confidence of a cat in the night. Rich layers of blackberry, plum, and spice unfold with a velvety depth, balanced by bold tannins and a lingering finish.",
  },
  {
    name: "Dilly Dally",
    type: "White Blend",
    year: "non vintage",
    price: 30.0,
    location: "Yolo County",
    image: "./productshots/dillydally-white.jpg",
    alch: "14.1% ABV | 50% Torrontes Riojano, 25% Pinot Blanc, 25% Sauvignon Blanc",
    description:
      "Sit back, relax, and dilly dally with our California White Blend! This aromatic wine was crafted from grapes sourced from the heart of Yolo County. This unique combination offers hints of stonefruit, bright citrus notes, delicate floral aromas, and a crisp finish. Enjoy chilled on a beautiful sunny day with light pasta or fresh seafood.",
  },
  {
    name: "Dilly Dally",
    type: "Cabernet Sauvignon",
    year: "non vintage",
    price: 40.0,
    location: "Oakville AVA, Napa Valley",
    image: "./productshots/dillydally-cab.jpg",
    alch: "15% ABV | 75.3% Cabernet Sauvignon, 14.3% Petite Sirah, 4.1% Cabernet Franc, 6.3% Merlot",
    description:
      "Sit back, relax, and dilly dally in the Napa Valley with our bold and sophisticated Oakville Cabernet Sauvignon. This wine boasts notes of pomegranate, chocolate, and cranberry sauce, with structured tannins, and a rich, toasty finish. This wine is perfect for movie night on the couch or enjoyed at room temperature with aged cheeses, hearty meats, or dark chocolate.",
  },
  {
    name: "Flight Home",
    type: "Albariño",
    year: 2025,
    price: 30.0,
    location: "Yolo County",
    image: "./productshots/flighthome-alba.jpg",
    alch: "14.4% ABV | 95% Albariño, 5% Pinot Blanc",
    description:
      "This Albariño is bright, refreshing, and easy to enjoy. Aromas of apricot, white peach, and delicate white flowers are complemented by notes of lemon and lime. The palate is crisp and balanced, with vibrant acidity carrying flavors of citrus and ripe stone fruit through a clean finish. A perfect wine for warm days, good company, and just about any occasion that calls for a cold glass of wine.",
  },
  {
    name: "Flight Home",
    type: "Red Wine",
    year: 2024,
    location: "Oakville AVA, Napa Valley",
    image: "./productshots/flighthome-red.jpg",
    alch: "14.5% ABV | 63.5% Cabernet Sauvignon, 19% Merlot, 12.5% Cabernet Franc, 5% Petite Sirah",
    description:
      "This red blend reflects its Oakville origins through aromas of dusty earth, dark and red fruits, and subtle graphite minerality. The palate is layered with blackberry, red plum, and black raspberry, supported by a savory undertone that adds complexity. Fine-grained tannins provide structure while maintaining an approachable texture, resulting in a wine that is both polished and balanced. A persistent finish carries notes of graphite and ripe fruit, underscored by freshness and lift. Approachable in its youth, the wine also possesses the structure and balance to reward further cellaring.",
  },
];

const formatWinePrice = (price?: number) =>
  price === undefined ? "Price TBD" : `$${price.toFixed(2)}`;

export default function WineGrid() {
  const [selectedWine, setSelectedWine] = useState<
    (typeof wines)[number] | null
  >(null);

  return (
    <div className="main-container">
      <h2 className="text-3xl text-primary text-center mt-4 mb-8">
        Wines Crafted, Designed, and Bottled by V&amp;E Students
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {wines.map((wine, index) => (
          <div
            key={`${wine.name}-${wine.type}-${index}`}
            className="w-full flex flex-col pb-2 cursor-pointer border-b-2 border-bg hover:border-b-2 hover:border-primary"
            onClick={() => setSelectedWine(wine)}
          >
            <Image
              src={wine.image}
              alt={`${wine.name} ${wine.type} bottle`}
              width={400}
              height={400}
              className="object-cover mb-2 w-full"
            />
            <div className="flex justify-between mt-1">
              <p className="text-secondary-f text-sm">{wine.location}</p>
              <p className="text-secondary-f text-sm">{wine.year}</p>
            </div>
            <h2 className="text-lg text-primary mt-3">{wine.name}</h2>
            <div className="flex justify-between">
              <h3 className="text-primary">{wine.type}</h3>
              <p>{formatWinePrice(wine.price)}</p>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-sm mt-4 text-secondary-f">Learn More</p>
              {/* {wine.inventory && (
                <span className="text-xs bg-primary text-white font-semibold px-2 py-1 rounded-sm">
                  {wine.inventory}
                </span>
              )} */}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedWine && (
        <div
          className="fixed inset-0 disclaimer-fade z-50 flex justify-center items-center px-4 py-8"
          onClick={() => setSelectedWine(null)}
        >
          <div
            className="bg-white rounded-xl max-h-[88vh] max-w-4xl w-full overflow-y-auto p-6 md:p-8 relative"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="absolute rounded-full top-3 bg-primary bor right-3 text-2xl text-white hover:text-white-700"
              onClick={() => setSelectedWine(null)}
              aria-label="Close wine details"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
            <div className="md:grid md:grid-cols-[18rem_minmax(0,1fr)] md:gap-8 md:items-start">
              <Image
                src={selectedWine.image}
                alt={selectedWine.name}
                width={400}
                height={400}
                className="hidden md:block w-full rounded-lg object-cover"
              />
              <div className="flex h-full flex-col md:pr-8">
                <div className="flex justify-between gap-4 mt-2 md:mt-0">
                  <p>{selectedWine.location}</p>
                  <p>{selectedWine.year}</p>
                </div>
                <h3 className="text-xl font-bold mt-4 text-primary">
                  {selectedWine.name}
                </h3>
                <p className="text-secondary-f">{selectedWine.type}</p>
                <p className="mt-4 text-secondary-f">{selectedWine.alch}</p>
                <p className="mt-6 md:mt-auto md:pt-4 font-semibold text-right">
                  {formatWinePrice(selectedWine.price)}
                </p>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <p className="text-primary-f">{selectedWine.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
