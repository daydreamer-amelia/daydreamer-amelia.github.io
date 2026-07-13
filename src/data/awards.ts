export interface Award {
  date: string;
  title: string;
  organization: string;
  description?: string;
  link?: string;
}

export const awardsData: Award[] = [
  {
    date: "Oct 2024",
    title: "NeurIPS 2024 Scholar Award",
    organization: "Neural Information Processing Foundation",
  },
  {
    date: "Jun 2023",
    title:
      "National First Prize, The Ninth China National College Students Competition on Energy Economics",
    organization:
      "Chinese Society of Optimization, Overall Planning and Economic Mathematics",
    description:
      'Top 1% among 6,148 teams; Research Topic: "National Emission Trading Schemes and Corporate Financial Performance: Evidence from China\'s Power Sector"',
    link: "https://mp.weixin.qq.com/s/LG60Jc-Q6mmKJ8PyiR7kcA",
  },
  {
    date: "Nov 2022",
    title: "Australian Government Research Training Program (RTP) Scholarship",
    organization: "Australian Government",
  },
  {
    date: "May 2022",
    title:
      "National First Prize, The Eighth China National College Students Competition on Energy Economics",
    organization:
      "Chinese Society of Optimization, Overall Planning and Economic Mathematics",
    description:
      'Top 1% among 5,549 teams; Research Topic: "The Dynamic Effect of Carbon Disclosure on Stock-listed Firms: Evidence from China under the Dual-Carbon Target"',
    link: "https://www.sohu.com/a/550004718_121124212",
  },
];
