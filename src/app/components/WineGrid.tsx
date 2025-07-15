"use client";

import Image from "next/image";

const wines = [
  {
    name: "Arvoré",
    type: "Cabernet Sauvignon",
    year: 2023,
    price: 40.0,
    location: "Oakville AVA, Napa Valley",
    image: "./productshots/arvore-cab.jpg",
  },
  {
    name: "Ambrosia",
    type: "Cabernet Sauvignon",
    year: 2021,
    price: 40.0,
    location: "Oakville AVA, Napa Valley",
    image: "./productshots/ambrosia-cab.jpg",
  },
  {
    name: "Kosmo",
    type: "Petit Syrah",
    year: 2023,
    price: 40.0,
    location: "Yolo County",
    image: "./productshots/kosmo-petit.jpg",
  },
  {
    name: "Arvoré",
    type: "Sauvignon Blanc",
    year: 2023,
    price: 30.0,
    location: "Yolo County",
    image: "./productshots/arvore-sav.jpg",
  },
  {
    name: "Ambrosia",
    type: "Chardonnay",
    year: 2023,
    price: 30.0,
    location: "Yolo County",
    image: "./productshots/ambrosia-chard.jpg",
  },
  {
    name: "Kosmo",
    type: "Albariño",
    year: 2023,
    price: 30.0,
    location: "Yolo County",
    image: "./productshots/kosmo-albarino.jpg",
  },
  {
    name: "Meleagris",
    type: "Chardonnay",
    year: 2024,
    price: 30.0,
    location: "Yolo County",
    image: "./productshots/meleagris-chard.jpg",
  },
  {
    name: "Meleagris",
    type: "Petite Sirah",
    year: 2024,
    price: 40.0,
    location: "Yolo County",
    image: "./productshots/meleagris-petit.jpg",
  },
  {
    name: "Afterglow",
    type: "Cabernet Sauvignon",
    year: 2023,
    price: 40.0,
    location: "Napa County",
    image: "./productshots/afterglow-cab.jpg",
  },
  {
    name: "Afterglow",
    type: "Albariño",
    year: 2023,
    price: 30.0,
    location: "Yolo County",
    image: "./productshots/afterglow-alba.jpg",
  },
  {
    name: "Aba-ra",
    type: "Sauvignon Blanc",
    year: 2024,
    price: 30.0,
    location: "Oakville, Napa Valley",
    image: "./productshots/abara-white.jpg",
  },
  {
    name: "Aba-ra",
    type: "Red Wine",
    year: "non vintage",
    price: 40.0,
    location: "California",
    image: "./productshots/abara-red.jpg",
  },
];

export default function WineGrid() {
  return (
    <div className="main-container">
      <h2 className="text-3xl text-primary text-center mt-4 mb-8">
        Wines Crafted, Designed, and Bottled by V&E Students
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {wines.map((wine, index) => (
          <div
            key={`${wine.name}-${wine.type}-${index}`}
            className="w-full flex flex-col pb-2 border-transparent transition duration-200"
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
          </div>
        ))}
      </div>
    </div>
  );
}
