export type PublicationTopic =
  | "AI Sustainability"
  | "AI for Engineering"
  | "LLM for Time Series"
  | "Carbon & Electricity Market";

export const publicationTopics: PublicationTopic[] = [
  "AI Sustainability",
  "AI for Engineering",
  "LLM for Time Series",
  "Carbon & Electricity Market",
];

export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  topics: PublicationTopic[];
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
  awardUrl?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2026",
    conference: "ICML 2026",
    title:
      "Hugging Carbon: Quantifying the Training Carbon Emissions of AI Models at Scale",
    authors: "Xinlei Wang✉, Ruibo Ming, Jing Qiu, Junhua Zhao, Jinjin Gu",
    topics: ["AI Sustainability"],
    paperUrl: "https://arxiv.org/abs/2605.01549",
    codeUrl: "https://github.com/insait-institute/HuggingCarbon",
    imageUrl: "/images/publications/hugging-carbon.png",
    award: "ICML 2026: Papers that Matters by Nebius Science",
    awardUrl: "https://nebius.science/stories/icml-papers-that-matter",
  },
  {
    year: "2026",
    conference: "ICML 2026",
    title:
      "EngiAgent: Fully Connected Coordination of LLM Agents for Solving Open-ended Engineering Problems with Feasible Solutions",
    authors:
      "Xiyuan Zhou*, Ruixi Zou*, Xinlei Wang*, Yuheng Cheng, Yan Xu, Junhua Zhao, Jinjin Gu",
    topics: ["AI for Engineering"],
    paperUrl: "https://arxiv.org/abs/2605.02289",
    codeUrl: "https://github.com/AI4Engi/EngiAgent",
    imageUrl: "/images/publications/engiagent.png",
  },
  {
    year: "2026",
    conference: "ACL 2026 Findings",
    title:
      "EngiBench: A Benchmark for Evaluating Large Language Models on Engineering Problems",
    authors:
      "Xiyuan Zhou*, Xinlei Wang*, Yirui He, Yang Wu, Ruixi Zou, Yuheng Cheng, Yulu Xie, Wenxuan Liu, Huan Zhao, Yan Xu, Jinjin Gu, Junhua Zhao",
    topics: ["AI for Engineering"],
    paperUrl: "https://arxiv.org/abs/2509.17677",
    codeUrl: "https://github.com/AI4Engi/EngiBench",
    imageUrl: "/images/publications/engibench.png",
  },
  {
    year: "2026",
    conference: "Nature Reviews Electrical Engineering",
    title: "Structural Alignment for Energy–Computation Co-design",
    authors:
      "Xin Lu, Jing Qiu, Xinlei Wang, Jinjin Gu, Jiafeng Lin, Sihai An, Junhua Zhao",
    topics: ["AI Sustainability"],
    paperUrl: "https://arxiv.org/abs/2510.13029",
    imageUrl: "/images/publications/structural-alignment.png",
  },
  {
    year: "2026",
    conference: "IEEE Computer",
    title:
      "Rethinking Time Series Analysis with LLMs as a Reasoning-Centric Task",
    authors:
      "Xinlei Wang, Mingtian Tan, Ruihua Yu, Jing Qiu, Junhua Zhao, Jinjin Gu",
    topics: ["LLM for Time Series"],
    paperUrl: "https://arxiv.org/abs/2510.13029",
    imageUrl: "/images/publications/reasoning-centric-ts.png",
  },
  {
    year: "2026",
    conference: "Engineering",
    title:
      "News-Driven Load Forecasting: Generative Agents and Large Language Models for Unstructured Data and Event Analysis",
    authors:
      "Xinlei Wang, Jinjin Gu, Jing Qiu, Guolong Liu, Xinlei Cai, Jinzhou Zhu, Yanli Liu, Zhaoyang Dong, Junhua Zhao",
    topics: ["LLM for Time Series", "AI for Engineering"],
    paperUrl:
      "https://www.sciencedirect.com/science/article/pii/S209580992600175X",
    imageUrl: "/images/publications/news-driven-load-forecasting.png",
  },
  {
    year: "2026",
    conference: "Cell Nexus",
    title:
      "An LLM Agent-Based Framework for Analytical Characterization of Nash Equilibria",
    authors:
      "Wenxuan Liu*, Xiyuan Zhou*, Xinlei Wang*, Yuheng Cheng*, Lixin Ye, Randall Berry, Leandros Tassiulas, Jianwei Huang, Junhua Zhao",
    topics: ["AI for Engineering", "Carbon & Electricity Market"],
    paperUrl: "https://www.cell.com/nexus/fulltext/S2950-1601(25)00054-3",
    codeUrl: "https://github.com/energy-internet/PrimeNash",
    imageUrl: "/images/publications/primenash.png",
  },
  {
    year: "2025",
    conference: "ICPIES 2025",
    title:
      "A Large Language Model-Based Agent for Automated Bidding Strategy Generation in Electricity Markets",
    authors:
      "Ruixi Zou, Xiyuan Zhou, Yuheng Cheng, Wenxuan Liu, Xinlei Wang, Junhua Zhao, Xinlei Cai",
    topics: ["AI for Engineering", "Carbon & Electricity Market"],
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/11070004/",
    imageUrl: "/images/publications/llm-bidding-electricity.png",
  },
  {
    year: "2024",
    conference: "NeurIPS 2024",
    title:
      "From News to Forecast: Integrating Event Analysis in LLM-Based Time Series Forecasting with Reflection",
    authors: "Xinlei Wang, Maike Feng, Jing Qiu, Jinjin Gu, Junhua Zhao",
    topics: ["LLM for Time Series"],
    paperUrl:
      "https://proceedings.neurips.cc/paper_files/paper/2024/hash/6aef8bffb372096ee73d98da30119f89-Abstract-Conference.html",
    codeUrl: "https://github.com/ameliawong1996/From_News_to_Forecast",
    imageUrl: "/images/publications/from-news-to-forecast.png",
    award: "MIT Technology Review (China) coverage",
    awardUrl: "https://www.mittrchina.com/news/detail/13878",
  },
  {
    year: "2024",
    conference: "PSGEC 2024",
    title:
      "Large Language Model for Low-Carbon Energy Transition: Roles and Challenges",
    authors:
      "Yuheng Cheng, Xiyuan Zhou, Huan Zhao, Jinjin Gu, Xinlei Wang, Junhua Zhao",
    topics: ["AI for Engineering", "Carbon & Electricity Market"],
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10721191/",
    imageUrl: "/images/publications/llm-low-carbon-energy.png",
  },
  {
    year: "2022",
    conference: "Cell Patterns",
    title: "AI-Enabled Image Fraud in Scientific Publications",
    authors:
      "Jinjin Gu, Xinlei Wang, Chenang Li, Junhua Zhao, Weijin Fu, Gaoqi Liang, Jing Qiu",
    topics: ["AI for Engineering"],
    paperUrl: "https://www.cell.com/patterns/fulltext/S2666-3899(22)00103-9",
    imageUrl: "/images/publications/ai-image-fraud.jpg",
  },
  {
    year: "2021",
    conference: "Scientific Reports",
    title:
      "Electricity-Consumption Data Reveals the Economic Impact and Industry Recovery During the Pandemic",
    authors:
      "Xinlei Wang, Caomingzhe Si, Jinjin Gu, Guolong Liu, Wenxuan Liu, Jing Qiu, Junhua Zhao",
    topics: ["Carbon & Electricity Market"],
    paperUrl: "https://www.nature.com/articles/s41598-021-98259-3",
    imageUrl: "/images/publications/electricity-pandemic-impact.png",
  },
  {
    year: "2021",
    conference: "Energy and Climate Change",
    title:
      "Lessons Learned from Power Industry Reform and Electricity Spot Market Trial Operation in Southern China",
    authors:
      "Xinlei Wang, Wenxuan Liu, Gaoqi Liang, Junhua Zhao, Jing Qiu",
    topics: ["Carbon & Electricity Market"],
    paperUrl:
      "https://www.sciencedirect.com/science/article/abs/pii/S2666278721000325",
    imageUrl: "/images/publications/southern-china-power-reform.png",
  },
];
