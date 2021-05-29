// const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/covid");

const mapSeed = [
  {
    id: "1",

    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-80.13586810043438, 25.790764268355275],
        },
        properties: {
          title: "Taverna",
          description: "Restaurant",
          status: "Open",
          website: "https://www.restaurantji.com/fl/miami-beach/taverna-/menu/",
        },
      },
    ],
  },
  {
    id: "2",

    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-80.13617540616877, 25.790764268355275],
        },
        properties: {
          title: "Spris Artisan Pizza",
          description: "Restaurant",
          status: "Open",
          website:
            "https://www.sprispizza.com/location/spris-pizza-lincoln-road/",
        },
      },
    ],
  },

  {
    id: "3",

    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-80.13702365473722, 25.790764268355275],
        },
        properties: {
          title: "Havana 1957",
          description: "Restaurant",
          status: "Open",
          website: "https://www.havana1957.com/lincoln-road/",
        },
      },
    ],
  },

  {
    id: "4",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-80.13641276571343, 25.790764268355275],
        },
        properties: {
          title: "Starbucks",
          description: "Restaurant",
          status: "Open",
          website: "https://www.starbucks.com/menu",
        },
      },
    ],
  },

  {
    id: "5",

    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-80.13680234446257, 25.79076001797118],
        },
        properties: {
          title: "Maya Tapas & Grill",
          description: "Restaurant",
          status: "CLOSED DUE TO COVID",
          website: "https://www.facebook.com/MayaGrill/",
        },
      },
    ],
  },

  {
    id: "6",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-80.1373118318068, 25.79076001797118],
        },
        properties: {
          title: "Montalcino",
          description: "Restaurant",
          status: "CLOSED DUE TO COVID",
          website:
            "https://www.tripadvisor.com/Restaurant_Review-g34439-d11963179-Reviews-Montalcino-Miami_Beach_Florida.html",
        },
      },
    ],
  },

  {
    id: "7",

    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-80.13547942134939, 25.79076001797118],
        },
        properties: {
          title: "Pizza Rustica",
          description: "Restaurant",
          status: "Open",
          website: "https://pizza-rustica.com/",
        },
      },
    ],
  },
];

db.Map.remove({})
  .then(() => db.Map.collection.insertMany(mapSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
