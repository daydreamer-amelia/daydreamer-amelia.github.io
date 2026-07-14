export interface News {
  date: string;
  title: string;
  emoji?: string;
  description?: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "July 2026",
    emoji: "🌱",
    title:
      "Hugging Carbon are selected among ICML 2026 Papers That Matter by Nebius Science",
    link: "https://nebius.science/stories/icml-papers-that-matter",
  },
  {
    date: "May 2026",
    emoji: "🎉",
    title: "Hugging Carbon and EngiAgent are accepted at ICML 2026",
    link: "https://icml.cc/",
  },
  {
    date: "April 2026",
    emoji: "📝",
    title: "EngiBench is accepted at ACL 2026 Findings",
    link: "https://aclanthology.org/",
  },
  {
    date: "February 2026",
    emoji: "🚀",
    title: "Excited to join INSAIT as Postdoctoral Researcher",
    link: "https://insait.ai/dr-xinlei-wang/",
  },
];
