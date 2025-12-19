"use client";

import Image from "next/image";
import { useState } from "react";

const wines = [
  {
    name: "Arvoré",
    type: "Cabernet Sauvignon",
    inventory: "low stock",
    year: 2023,
    price: 40.0,
    location: "Oakville AVA, Napa Valley",
    image: "./productshots/arvore-cab.jpg",
    alch: "14% ALC. BY VOL.",
    description:
      "A medium-bodied wine with aromas of blueberry, cranberry, vanilla, toasted oak, bay leaf, and peppercorn. Fine-grained, satiny tannins bring moderate astringency, leading to a long finish with notes of maraschino cherry and spice.",
  },
  {
    name: "Ambrosia",
    type: "Cabernet Sauvignon",
    inventory: "SOLD OUT",
    year: 2021,
    price: 40.0,
    location: "Oakville AVA, Napa Valley",
    image: "./productshots/ambrosia-cab.jpg",
    alch: "14% ALC. BY VOL.",
    description:
      "A medium-bodied wine with aromas of blueberry, cranberry, vanilla, toasted oak, bay leaf, and peppercorn. Fine-grained, satiny tannins bring moderate astringency, leading to a long finish with notes of maraschino cherry and spice.",
  },
  {
    name: "Kosmo",
    type: "Petit Syrah",
    inventory: "SOLD OUT",
    year: 2023,
    price: 40.0,
    location: "Yolo County",
    image: "./productshots/kosmo-petit.jpg",
    alch: "14% ALC. BY VOL.",
    description:
      "Mocha, chocolate, and vanilla blend with warm notes of cinnamon, nutmeg, and toasted pastry. Rich dark fruits and floral elements meet grippy tannins and fresh berry acidity. A juicy, velvety wine with a long finish of mocha and oak. ",
  },
  {
    name: "Arvoré",
    type: "Sauvignon Blanc",
    year: 2023,
    price: 30.0,
    location: "Yolo County",
    image: "./productshots/arvore-sav.jpg",
    alch: "14% ALC. BY VOL.",
    description:
      "This wine offers aromas of citrus, green apple, white flowers, tropical passion fruit, and pineapple. On the palate, it is refreshingly dry, crisp, and spritzy with a smooth, lingering finish.",
  },
  {
    name: "Ambrosia",
    type: "Chardonnay",
    year: 2023,
    price: 30.0,
    location: "Yolo County",
    image: "./productshots/ambrosia-chard.jpg",
    alch: "13.6% ALC. BY VOL.",
    description:
      "A delicate balance of white peach, night, blooming jasmine, and vanilla, with a subtle undertone of toasted sesame seeds wafting from the glass. The palate is bright, with an initial hint of life that broadens into a stonefruit and mineral-driven core, with classic Chardonnay density that draws out the finish for a mouthwatering and yet satisfying sip.",
  },
  {
    name: "Kosmo",
    type: "Albariño",
    inventory: "low stock",
    year: 2023,
    price: 30.0,
    location: "Yolo County",
    image: "./productshots/kosmo-albarino.jpg",
    alch: "13.5% ALC. BY VOL.",
    description:
      "This wine opens with mouth-watering acidity and a bright bouquet of citrus, melon, and florals. Lush and expressive on the palate, like an orange creamsicle with hints of nectarine and coastal salinity.",
  },
  {
    name: "Meleagris",
    type: "Chardonnay",
    year: 2024,
    price: 30.0,
    location: "Yolo County",
    image: "./productshots/meleagris-chard.jpg",
    alch: "80% Chardonnay, 8% Vermentino, 5% Grüner Veltliner, 4% Verdelho, 3% Viognier | 13.6% ALC. BY VOL.",
    description:
      "Light straw in hue, this aromatic blend offers notes of fresh green apple, pear, honeysuckle, LEMON and citrus blossom. Bright, crisp acidity lifts up a creamy round body.",
  },
  {
    name: "Meleagris",
    type: "Petite Sirah",
    year: 2024,
    price: 40.0,
    location: "Yolo County",
    image: "./productshots/meleagris-petit.jpg",
    alch: "98% Petite Sirah, 2% Cabernet Sauvignon | 14% ALC. BY VOL.",
    description:
      "Deep ruby with purple edges. Bursting with vibrant blueberry and cranberry, accented by black tea, coriander, and pepper. Juicy acidity and velvety tannins provide texture and grip. Enjoy now or cellar for 5–10 years.",
  },
  {
    name: "Afterglow",
    type: "Cabernet Sauvignon",
    inventory: "SOLD OUT",
    year: 2023,
    price: 40.0,
    location: "Napa County",
    image: "./productshots/afterglow-cab.jpg",
    alch: "85% Cabernet Sauvignon, 11.25% Petite Sirah, 3.75% Syrah | 14.3% ALC. BY VOL.",
    description:
      "Aromatic and approachable. The nose offers rich notes of vanilla, dark chocolate, and cherry, while the palate stays lean and structured. Subtle oak introduces layers of smoke and caramel to the long, smooth finish. Enjoy now or let it age gracefully. Ideal for young consumers seeking a smooth introduction to Oakville Cabernet – without the high price tag.",
  },
  {
    name: "Afterglow",
    type: "Albariño",
    inventory: "SOLD OUT",
    year: 2023,
    price: 30.0,
    location: "Yolo County",
    image: "./productshots/afterglow-alba.jpg",
    alch: "85% Albariño, 10% Grüner Veltliner, 5% Vermentino | 13.1% ALC. BY VOL.",

    description:
      "Fresh, crisp, and easy-drinking. This Albariño opens with bright notes of stone fruit (apricots, white peach), balanced by lively acidity and a clean, refreshing finish. Best served chilled. Perfect for sunny afternoons or casual get-togethers. ",
  },
  {
    name: "Aba-ra",
    type: "Sauvignon Blanc",
    inventory: "SOLD OUT",
    year: 2024,
    price: 30.0,
    location: "Oakville, Napa Valley",
    image: "./productshots/abara-white.jpg",
    alch: "85% Sauvignon Blanc, 10% Grüner Veltliner, 5% Pinot Blanc | 13.5% ALC. BY VOL.",
    description:
      "Zesty and fruit-forward, with notes of lemon zest, pineapple, banana, and peach. A lively white inspired by carefree afternoons—fresh, juicy, and endlessly drinkable.",
  },
  {
    name: "Aba-ra",
    type: "Red Wine",
    inventory: "SOLD OUT",
    year: "non vintage",
    price: 40.0,
    location: "California",
    image: "./productshots/abara-red.jpg",
    alch: "60% Petite Sirah, 40% Cabernet Sauvignon | 14.2% ALC. BY VOL.",
    description:
      "Aromas of cranberry, violet, pomegranate, and vanilla oak lead into a fruit-forward palate. Approachable and bold, this wine balances lush berry tones with subtle spice.",
  },
];
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
              alt={wine.name}
              width={400}
              height={400}
              className="object-cover mb-2 w-full"
            />
            <div className="flex justify-between mt-1">
              <p className="text-secondary-f text-sm">{wine.location}</p>
              <p className="text-secondary-f text-sm">{wine.year}</p>
            </div>
            <h4 className="text-lg text-primary mt-3">{wine.name}</h4>
            <div className="flex justify-between">
              <h3 className="text-primary">{wine.type}</h3>
              <p>${wine.price.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-sm mt-4 text-secondary-f">Learn More</p>
              {wine.inventory && (
                <span className="text-xs bg-primary text-white font-semibold px-2 py-1 rounded-sm">
                  {wine.inventory}
                </span>
              )}
            </div>
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
            className="bg-white rounded-xl max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
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
              className="w-54 lg:object-cover lg:w-full mb-4 rounded-lg"
            />
            <div className="flex justify-between mt-2">
              <p>{selectedWine.location}</p>
              <p>{selectedWine.year}</p>
            </div>
            <h3 className="text-xl font-bold mt-4 text-primary">
              {selectedWine.name}
            </h3>
            <p className="text-secondary-f">{selectedWine.type}</p>

            <p className="text-secondary-f">{selectedWine.alch}</p>
            <p className="mt-2 text-primary-f">{selectedWine.description}</p>
            <p className="mt-4 font-semibold text-right">
              ${selectedWine.price.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
