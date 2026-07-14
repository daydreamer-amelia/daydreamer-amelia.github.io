export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  emailLocal: string;
  emailDomain: string;
  imageUrl?: string;
  imageUrls?: string[];
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string;
  secretDescription?: string;
  altName?: string;
  institutionUrl?: string;
  location?: string;
}

export const aboutMe: AboutMe = {
  name: "Xinlei Wang",
  title: "Postdoctoral Researcher",
  institution:
    "INSAIT — Institute for Computer Science, Artificial Intelligence and Technology",
  description:
    "<p>🔔 I will join <a href='https://insait.ai'><strong>INSAIT</strong></a> as a postdoctoral researcher working on <strong>AI sustainability</strong>, aligning the growth of AI with environmental considerations. My work asks how we can build AI systems that meet <strong>real-world engineering needs</strong>, and how we can build them <strong>responsibly</strong>:</p><ul><li><strong>Life-cycle carbon footprint</strong> across data centers, training, and inference</li><li><strong>Attribution and pricing</strong> of compute and emissions</li><li><strong>Energy–computation co-design</strong> (data-center efficiency and grid readiness)</li><li><strong>LLM agents for real-world engineering</strong> in scheduling, planning, and forecasting, where solutions must be feasible and verifiable under real domain constraints, not merely convincing</li></ul><p>Currently, I am about to complete my Ph.D. in Electrical Engineering at the <a href='https://www.sydney.edu.au'>University of Sydney</a> under the supervision of <a href='https://profiles.sydney.edu.au/jeremy.qiu'>Dr. Jing Qiu</a>, and I had an M.Sc. in Data Science from the <a href='https://www.cuhk.edu.cn'>Chinese University of Hong Kong, Shenzhen</a> under the supervision of <a href='https://www.zhaojunhua.org/'>Prof. Junhua Zhao</a>, and a B.B.A. with Honors in Finance and Global Business Management from the <a href='https://www.cuhk.edu.cn'>Chinese University of Hong Kong, Shenzhen</a>.</p><p>My work has been published at <strong>ICML</strong>, <strong>NeurIPS</strong>, <strong>ACL</strong>, <strong>Cell Patterns</strong>, <strong>Cell Nexus</strong> and <strong>Nature Reviews Electrical Engineering</strong>. I also have extensive project experience with power grid operators and research institutes, spanning carbon accounting and energy market analysis. Over the past few years, I have led carbon rating reports for 100+ listed companies in Australia and China and served on the editorial board of the <em><a href='https://www.zhaojunhua.org/reports/AI_SUSTAINABLE_DEVELOPMENT_OUTLOOK_EN.pdf'>AI and Sustainable Development Outlook</a></em>.</p>",
  emailLocal: "xinlei.wang",
  emailDomain: "insait.ai",
  imageUrl: "/images/profile-slide-v2-1-cropped.jpg",
  imageUrls: [
    "/images/profile-slide-v2-1-cropped.jpg",
    "/images/profile-slide-v2-2-norm.jpg",
  ],
  googleScholarUrl: "https://scholar.google.com/citations?user=xinleiwang",
  linkedinUsername: "ameliawong1996",
  institutionUrl: "https://insait.ai",
  location: "Sofia, Bulgaria",
};
