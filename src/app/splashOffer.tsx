"use client";

import Image from "next/image";
import { useState } from "react";

const splashWines = [
  {
    name: "Sauvignon Blanc",
    year: 2024,
    location: "Oakville AVA, Napa Valley",
    price: 50.0,
    image: "./productshots/vesauvignonblanc.jpg",
    alch: "100% Sauvignon Blanc | 13.8% ALC. BY VOL.",
    description:
      "This vibrant and expressive Sauvignon Blanc captures the essence of Oakville with its dazzling aromatics and exceptional finesse. On the nose, a lively bouquet of guava, passion fruit, white peach, and orange peel leaps from the glass, accented by white stone fruit blossoms, honeysuckle, and a touch of lemongrass. Notes of clementine, pear, and green melon round out the aromatic profile with freshness and charm.",
    descriptiontwo:
      "The palate is just as compelling broad, layered, and zesty. Waves of lemon zest, lime, kiwi, and honeydew melon flow across the tongue, supported by a soft lanolin texture and crisp acidity. Subtle minerality and accents of gooseberry and stone fruit add depth and complexity, while the finish is long, bright, and irresistibly tropical, with kiwi and guava lingering gracefully.",
  },
  {
    name: "Cabernet Sauvignon",
    year: 2020,
    location: "Oakville AVA, Napa Valley",
    price: 125.0,
    image: "./productshots/vecabernetsauvignon.jpg",
    alch: "100% Cabernet Sauvignon | 14.5% ALC. BY VOL.",
    description:
      "A bold, classic expression of Oakville, the 2020 Cabernet Sauvignon is powerful yet refined, with stunning depth and aromatic complexity. It opens with dark and compelling aromas of blackberry, black cherry, and boysenberry, interwoven with notes of fresh roses, cassis, vanilla, and black pepper. Hints of dark chocolate, tobacco, and baking spices enrich the bouquet, creating an inviting and layered nose.",
    descriptiontwo:
      "On the palate, rich dark fruits take center stage, plum, black currant, and black raspberry; framed by silky, granular tannins. Notes of bittersweet chocolate, espresso, and anise unfold alongside soft mocha, toasted cedar, and warm clove, revealing the influence of 22 months in medium toast French oak. The finish is long and structured, with lingering spice, sweet leather, and a touch of oak that speaks to its age worthiness and balance.",
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

      <div className="flex flex-col md:flex-row pt-8 mt-8 pb-8 mb-16 gap-16">
        {splashWines.map((wine, idx) => (
          <div
            key={idx}
            className="w-full md:w-1/2 pb-2 border-b-2 border-bg hover:border-b-2 hover:border-primary cursor-pointer"
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
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedWine && (
        <div
          className="fixed inset-0 disclaimer-fade z-50 flex justify-center items-center"
          onClick={() => setSelectedWine(null)}
        >
          <div
            className="bg-white rounded-xl max-w-md md:max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="absolute rounded-full top-1 bg-primary bor right-1 text-2xl text-white hover:text-white-700"
              onClick={() => setSelectedWine(null)}
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
            <Image
              src={selectedWine.image}
              alt={selectedWine.name}
              width={400}
              height={400}
              className="hidden md:block md:w-64 mb-4 rounded-lg"
            />
            <div className="flex justify-between mt-2">
              <p>{selectedWine.location}</p>
              <p>{selectedWine.year}</p>
            </div>
            <h3 className="text-xl font-bold mt-4 text-primary">
              {selectedWine.name}
            </h3>
            <p className="text-secondary-f">{selectedWine.alch}</p>
            <p className="mt-2 text-primary-f">{selectedWine.description}</p>
            <p className="mt-4 text-primary-f">{selectedWine.descriptiontwo}</p>
            <p className="mt-4 font-semibold text-right">
              ${selectedWine.price.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SplashOffer;
