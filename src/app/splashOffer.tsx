"use client";

import Image from "next/image";
import { useState } from "react";

const splashWines = [
  {
    name: "Cabernet Sauvignon",
    year: 2022,
    location: "Oakville AVA, Napa Valley",
    price: 125.0,
    image: "./productshots/ucd-cs2022.jpg",
    alch: "96.5% Cabernet Sauvignon, 1.3% Petite Sirah, 0.9% Syrah, 0.9% Merlot, 0.4% Cabernet Franc | 14.3% ALC. BY VOL.",
    description:
      "Oakville is one of the world's most celebrated Cabernet Sauvignon appellations, renowned for producing wines of exceptional depth, structure, and longevity. Warm days promote full flavor development and tannin maturity, while cool evenings preserve freshness and aromatic complexity.",
    descriptiontwo:
      "Carefully aged for more than a year in bottle, our 2022 Cabernet Sauvignon is a classic expression of Oakville, powerful yet refined. Aromas of black currant, blackberry, ripe cherry, cassis, and dark chocolate are layered with hints of vanilla, tobacco, and baking spice. Rich flavors of plum, black currant, and black raspberry are framed by finely textured tannins and complemented by notes of bittersweet chocolate, espresso, cedar, and clove. The finish is long, structured, and elegant, with lingering fruit, spice, and subtle oak character.",
    descriptionthree:
      "Aged in medium-toast French oak, this wine displays exceptional balance, complexity, and age-worthy structure.",
    pairing:
      "Pair with grilled steaks, roasted meats, hearty pasta dishes, aged cheeses, or dark chocolate desserts.",
  },
  {
    name: "Cabernet Sauvignon",
    year: 2020,
    location: "Oakville AVA, Napa Valley",
    price: 125.0,
    image: "./productshots/ucd-cs2020.jpg",
    alch: "85% Cabernet Sauvignon, 8.5 % Cabernet Franc, 6 % Merlot, 0.5% Petite Sirah | 14.5% ALC. BY VOL.",
    description:
      "A bold, classic expression of Oakville, the 2020 Cabernet Sauvignon is powerful yet refined, with depth and aromatic complexity. Aromas of blackberry, black cherry, and boysenberry are interwoven with notes of fresh roses, cassis, vanilla, and black pepper. Hints of dark chocolate, tobacco, and baking spices enrich and complete the bouquet.",
    descriptiontwo:
      "On the palate, dark fruits take center stage: plum, black currant, and black raspberry framed by silky tannins. Notes of bittersweet chocolate, espresso, and anise unfold alongside mocha, toasted cedar, and clove, revealing the influence of 22 months in medium toast French oak barrels. The finish is long and structured, with lingering spice, leather, and a touch of oak that speaks to its age worthiness and balance.",
  },
  {
    name: "Sauvignon Blanc",
    year: 2025,
    location: "Oakville AVA, Napa Valley",
    price: 50.0,
    image: "./productshots/ucd-sb2025.jpg",
    alch: " 97% Sauvignon Blanc, 3% Torrontes Riojano | 14.5% ALC. BY VOL.",
    description:
      "Oakville's warm afternoons, cool evenings, and well-drained vineyard soils create ideal conditions for Sauvignon Blanc, allowing expressive fruit flavors to develop while preserving the bright acidity and aromatic freshness that define the variety.",
    descriptiontwo:
      "Vibrant, crisp, and expressive, this Sauvignon Blanc opens with aromas of grapefruit, guava, Meyer lemon, and passion fruit, accented by hints of white flowers, honeysuckle, and lemongrass. On the palate, flavors of lemon zest, lime, and green melon unfold across a broad, layered texture supported by refreshing acidity. The finish is long and lively, with lingering tropical fruit notes and exceptional freshness.",
    descriptionthree:
      "Crafted exclusively from free-run and gently pressed juice, this wine was fermented and aged entirely in stainless steel. No oak was used, and malolactic fermentation was avoided to preserve varietal purity, bright fruit character, and vibrant acidity.",
    pairing:
      "Enjoy with fresh seafood, grilled white fish, goat cheese, light salads, or vegetable-forward dishes.",
  },
  {
    name: "Albariño",
    year: 2025,
    location: "Yolo County, California",
    price: 40.0,
    image: "./productshots/ucd-alba2025.jpg",
    alch: "13.9% ABV, 94% Albariño, 3% Torrontes Riojano, 1.5% Vermentino, 1% Viogner, 0.5% Verdelho | 13.9% ALC. BY VOL.",
    description:
      "At the UC Davis RMI Vineyard, Yolo County's Mediterranean climate provides ideal conditions for Albariño. Abundant sunshine promotes the development of vibrant fruit and floral aromas, while cool evening temperatures help preserve the bright acidity that gives the variety its signature freshness and energy.",
    descriptiontwo:
      "Bright, flavorful, and aromatic, our 2025 Albariño opens with expressive aromas of guava, pear, mango, quince, and orange blossom. The palate is fresh and lively, revealing layers of tropical fruit and citrus balanced by vibrant acidity. The finish is crisp and persistent, leaving a lasting impression of freshness and fruit.",
    descriptionthree:
      "Crafted entirely in stainless steel, this wine underwent no oak aging or malolactic fermentation, allowing its delicate aromatics, bright acidity, and varietal character to shine.",
    pairing:
      "Excellent with oysters, shellfish, ceviche, sushi, grilled fish, fresh herbs, and tangy cheeses such as goat cheese or feta.",
  },
];

const SplashOffer: React.FC = () => {
  const [selectedWine, setSelectedWine] = useState<
    (typeof splashWines)[number] | null
  >(null);

  return (
    <section id="selection" className="main-container">
      <h2 className="pt-24 pb-4 text-3xl text-primary text-center">
        The Wines
      </h2>
      <p className="text-center text-xl w-[100%] md:w-[60%] mx-auto pb-8 text-secondary-f">
        Every bottle is handcrafted by Aggies—a tribute to the passion and
        excellence that defines the University of California.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 pt-8 mt-8 pb-8 mb-16 gap-16">
        {splashWines.map((wine, idx) => (
          <div
            key={idx}
            className="w-full pb-2 border-b-2 border-bg hover:border-b-2 hover:border-primary cursor-pointer"
            onClick={() => setSelectedWine(wine)}
          >
            <Image
              src={wine.image}
              width={815}
              height={815}
              alt={wine.name}
              className="object-cover w-full"
            />
            <div className="flex justify-between mt-3">
              <p className="text-secondary-f">{wine.location}</p>
              <p className="text-secondary-f">{wine.year}</p>
            </div>
            <h3 className="text-primary text-xl mt-2">{wine.name}</h3>
            <p>${wine.price.toFixed(2)}</p>
            {/* {wine.inventory && (
              <span className="text-xs bg-primary text-white font-semibold px-2 py-1 rounded-sm">
                {wine.inventory}
              </span>
            )} */}
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
                <p className="text-secondary-f">{selectedWine.alch}</p>
                {selectedWine.pairing && (
                  <p className="mt-4 text-primary-f">
                    <b>Pairing Suggestions:</b> {selectedWine.pairing}
                  </p>
                )}
                <p className="mt-6 md:mt-auto md:pt-4 font-semibold text-right">
                  ${selectedWine.price.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <p className="text-primary-f">{selectedWine.description}</p>
              <p className="mt-4 text-primary-f">
                {selectedWine.descriptiontwo}
              </p>
              {selectedWine.descriptionthree && (
                <p className="mt-4 text-primary-f">
                  {selectedWine.descriptionthree}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SplashOffer;
