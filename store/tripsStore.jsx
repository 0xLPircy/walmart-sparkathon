import { create } from "zustand";

const useStore = create((set) => ({
  trips: [
    {
      id: 0,
      duration: 6,
      destination: "Bali, Indonesia",
      tasks: [
        {
          name: "Sunrise Trekking at Mount Batur and Natural Hot ",
          description:
            "Find secluded beaches known for their tranquility and beauty.",
          nft: "A serene beach-themed NFT and a 15% ",
          reward: "discount on beachside activities.",
        },
        {
          name: "Indulge in Spa Bliss",
          description:
            "Treat yourself to a luxurious spa session to rejuvenate your senses.",
          nft: "spa-themed NFT",
          reward: " 20% discount on spa treatments.",
        },
      ],
    },
  ],
  myRewards: [{}],
}));
