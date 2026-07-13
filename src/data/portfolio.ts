export type PortfolioCategory = "Report" | "Projects";

export interface Portfolio {
  title: string;
  description: string;
  date?: string;
  role?: string;
  organization?: string;
  category: PortfolioCategory;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    date: "Oct 2025",
    title: "Carbon Rating Report of Australia's ASX 100 Listed Companies",
    role: "First Author",
    organization: "ESG Future Foundation",
    category: "Report",
    description:
      "Quantified carbon emissions and built carbon scores for 100 ASX-listed Australian firms over the past five years.",
    projectUrl:
      "https://esgff.org/wp-content/uploads/2025/12/2025_AU_Carbon_rating_Report.pdf",
    imageUrl: "/images/projects/asx-100-report.png",
  },
  {
    date: "Nov 2024",
    title: "AI and Sustainable Development Outlook",
    role: "Core Editorial Board Member",
    organization:
      "Tencent Research Institute & Chinese University of Hong Kong, Shenzhen",
    category: "Report",
    description:
      "Explored AI and carbon neutrality, energy, and climate resilience; analyzed energy consumption and carbon emissions of large models across training and inference.",
    projectUrl:
      "https://www.zhaojunhua.org/reports/AI_SUSTAINABLE_DEVELOPMENT_OUTLOOK_EN.pdf",
    imageUrl: "/images/projects/ai-sustainable-outlook.jpg",
  },
  {
    date: "Aug 2023",
    title: "2023 Carbon Rating Report of China's 100 Overseas Listed Companies",
    role: "First Author",
    organization: "Global Sustainable Development Forum 2023",
    category: "Report",
    description:
      "Built carbon scores for 100 overseas-listed Chinese firms; designed a 15-indicator scoring system across disclosure, emissions, and corporate governance.",
    projectUrl:
      "https://esgff.org/wp-content/uploads/2023/10/2023-Carbon-Rating-Report-of-Chinas-100-Overseas-Listed-Companies.pdf",
    imageUrl: "/images/projects/china-carbon-report-2023.jpg",
  },
  {
    date: "Jun 2022",
    title: "2022 Carbon Rating Report of China's 100 Overseas Listed Companies",
    role: "First Author",
    organization: "Global Sustainable Development Forum 2022",
    category: "Report",
    description:
      "Built carbon scores for 100 overseas-listed Chinese firms; designed a 15-indicator scoring system across disclosure, emissions, and corporate governance.",
    projectUrl:
      "https://esgff.org/wp-content/uploads/2023/10/2022-Carbon-rating-report_EN-1.pdf",
    imageUrl: "/images/projects/china-carbon-report.jpg",
  },
  {
    date: "Aug 2022",
    title:
      "High-Resolution Carbon Emissions Database for China's Listed Companies",
    role: "First Author",
    organization:
      "Shenzhen Institute of Artificial Intelligence and Robotics for Society (AIRS)",
    category: "Projects",
    description:
      "Used AI to fuse satellite and reported data for firm-level emission prediction.",
    projectUrl: "http://43.135.47.161/#/",
    imageUrl: "/images/projects/carbon-database.png",
  },
  {
    date: "Feb 2024",
    title: "Satellite & Drone-Certified Green Bond",
    role: "Sub-Project PI",
    organization:
      "China Galaxy International & Shenzhen Institute of Artificial Intelligence and Robotics for Society (AIRS)",
    category: "Projects",
    description:
      "World's first green bond certified by satellite and drone data; contributed to SPO for ¥12 billion JPY green bond on HKEX. Reported by Xinhua News Agency.",
    projectUrl: "https://mp.weixin.qq.com/s/sxTUDdBfR63Uj_QebQ8Tiw",
    imageUrl: "/images/projects/green-bond.png",
  },
];
