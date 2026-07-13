export interface ConferenceReview {
  name: string;
  years: string[];
}

export interface Service {
  role: string;
  details?: string;
  conferences?: ConferenceReview[];
}

export const serviceData: Service[] = [
  {
    role: "Journal Reviewer",
    details:
      "IEEE Transactions on Network Science and Engineering; Energy; Applied Energy; Energy Conversion and Economics",
  },
  {
    role: "Conference Reviewer",
    conferences: [
      { name: "ICML", years: ["2025", "2026"] },
      { name: "NeurIPS", years: ["2025", "2026"] },
      { name: "AAAI", years: ["2026"] },
      { name: "ICLR", years: ["2026"] },
      { name: "ACL", years: ["2026"] },
    ],
  },
];
