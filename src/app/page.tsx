import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationList } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsList } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioList } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { AwardList } from "@/components/award-entry";
import { awardsData } from "@/data/awards";
import { ServiceList } from "@/components/service-entry";
import { serviceData } from "@/data/service";
import { sectionOrder, Section } from "@/data/section-order";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <nav className="sticky top-0 z-50 bg-[#FFFCF8]/95 backdrop-blur-sm">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-20 py-4 flex justify-end">
          <ul className="flex items-center gap-5 md:gap-7 font-serif text-xs md:text-sm tracking-wide uppercase text-zinc-500">
            <li>
              <a
                href="#news"
                className="hover:text-zinc-900 transition-colors"
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#publications"
                className="hover:text-zinc-900 transition-colors"
              >
                Publications
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-zinc-900 transition-colors"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-20 pb-24 pt-8 md:pt-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-12">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section>
                <div
                  className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600 [&_p+p]:mt-3 [&_ul]:mt-2 [&_ul+p]:mt-3 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:marker:text-zinc-400 [&_li]:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                case Section.News:
                  return (
                    newsData.length > 0 && (
                      <section
                        key={sectionName}
                        id="news"
                        className="scroll-mt-20"
                      >
                        <h2 className="font-serif text-l mb-6 tracking-wide uppercase">
                          News
                        </h2>
                        <NewsList items={newsData} />
                      </section>
                    )
                  );
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-zinc-700 mb-12 tracking-wide uppercase">
                          Education
                        </h2>
                        <div className="space-y-12">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Publication:
                  return (
                    publicationData.length > 0 && (
                      <section
                        key={sectionName}
                        id="publications"
                        className="scroll-mt-20"
                      >
                        <h2 className="font-serif text-l mb-2 tracking-wide uppercase">
                          Selected Publications
                        </h2>
                        <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                          For an up-to-date list of publications, check{" "}
                          {aboutMe.googleScholarUrl ? (
                            <a
                              href={aboutMe.googleScholarUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline text-zinc-700 hover:text-zinc-900"
                            >
                              Google Scholar
                            </a>
                          ) : (
                            "Google Scholar"
                          )}
                          . * denotes equal contribution (co-first author).{" "}
                          <span className="inline-flex items-center gap-0.5 align-middle">
                            <Mail
                              size={11}
                              className="inline text-zinc-500"
                              aria-hidden="true"
                            />
                          </span>{" "}
                          denotes corresponding author.
                        </p>
                        <PublicationList items={publicationData} />
                      </section>
                    )
                  );
                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                          Experience
                        </h2>
                        <div className="space-y-12">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Portfolio:
                  return (
                    portfolioData.length > 0 && (
                      <section
                        key={sectionName}
                        id="projects"
                        className="scroll-mt-20"
                      >
                        <h2 className="font-serif text-md mb-6 tracking-wide uppercase">
                          Public Reports and Projects
                        </h2>
                        <PortfolioList items={portfolioData} />
                      </section>
                    )
                  );
                case Section.Awards:
                  return (
                    awardsData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-l mb-6 tracking-wide uppercase">
                          Awards
                        </h2>
                        <AwardList items={awardsData} />
                      </section>
                    )
                  );
                case Section.Service:
                  return (
                    serviceData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-l mb-6 tracking-wide uppercase">
                          Service
                        </h2>
                        <ServiceList items={serviceData} />
                      </section>
                    )
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
