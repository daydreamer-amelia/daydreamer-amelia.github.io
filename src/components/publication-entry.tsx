"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import {
  Publication,
  PublicationTopic,
  publicationTopics,
} from "@/data/publication";

type PublicationFilter = PublicationTopic | "All";

const topicTagStyles: Record<PublicationTopic, string> = {
  "AI Sustainability":
    "bg-emerald-50 text-emerald-800 border-emerald-100",
  "AI for Engineering": "bg-sky-50 text-sky-800 border-sky-100",
  "LLM for Time Series": "bg-violet-50 text-violet-800 border-violet-100",
  "Carbon & Electricity Market":
    "bg-amber-50 text-amber-800 border-amber-100",
};

const topicPlaceholderImages: Record<PublicationTopic, string> = {
  "AI Sustainability": "/images/publications/topic-ai-sustainability.svg",
  "AI for Engineering": "/images/publications/topic-ai-engineering.svg",
  "LLM for Time Series": "/images/publications/topic-llm-ts.svg",
  "Carbon & Electricity Market":
    "/images/publications/topic-carbon-market.svg",
};

const filterTagClassName =
  "inline-flex px-2.5 py-1 rounded-full border text-xs font-medium";

const publicationTagClassName =
  "inline-flex px-1.5 py-0.5 rounded-full border text-[10px] leading-tight font-normal";

const filterOptions: PublicationFilter[] = ["All", ...publicationTopics];

function formatAuthors(authors: string) {
  const parts = authors.split(/(✉)/g);
  return parts.map((part, index) =>
    part === "✉" ? (
      <Mail
        key={index}
        size={11}
        className="inline-block ml-0.5 -mt-0.5 text-zinc-500"
        aria-label="corresponding author"
      />
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}

function getPublicationImageUrl(publication: Publication): string {
  if (publication.imageUrl) {
    return publication.imageUrl;
  }

  const primaryTopic = publication.topics[0];
  return primaryTopic
    ? topicPlaceholderImages[primaryTopic]
    : "/images/publications/topic-ai-engineering.svg";
}

function getPublicationLink(publication: Publication): string | undefined {
  return publication.paperUrl ?? publication.codeUrl;
}

export function PublicationList({ items }: { items: Publication[] }) {
  const [selected, setSelected] = useState<PublicationFilter>("All");

  const filteredItems =
    selected === "All"
      ? items
      : items.filter((publication) => publication.topics.includes(selected));

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        {filterOptions.map((filter) => {
          const isActive = selected === filter;
          const topicStyle =
            filter !== "All" ? topicTagStyles[filter] : null;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setSelected(filter)}
              aria-pressed={isActive}
              className={`${filterTagClassName} transition-colors cursor-pointer ${
                isActive
                  ? filter === "All"
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : `${topicStyle} ring-1 ring-zinc-300 ring-offset-1`
                  : filter === "All"
                    ? "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-zinc-900"
                    : `${topicStyle} opacity-60 hover:opacity-100`
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="border border-zinc-200 rounded-lg bg-white/60 divide-y divide-zinc-200 shadow-sm">
        {filteredItems.length > 0 ? (
          filteredItems.map((publication) => (
            <PublicationEntry
              key={publication.title}
              publication={publication}
              selectedTopic={selected}
              onTopicSelect={setSelected}
            />
          ))
        ) : (
          <p className="px-4 py-6 text-sm text-zinc-500 text-center">
            No publications found for this topic.
          </p>
        )}
      </div>
    </div>
  );
}

export function PublicationEntry({
  publication,
  selectedTopic,
  onTopicSelect,
}: {
  publication: Publication;
  selectedTopic?: PublicationFilter;
  onTopicSelect?: (topic: PublicationTopic) => void;
}) {
  const imageUrl = getPublicationImageUrl(publication);
  const linkUrl = getPublicationLink(publication);

  const image = (
    <div className="relative w-[6.5rem] h-[4.5rem] sm:w-36 sm:h-24 overflow-hidden rounded-md border border-zinc-200 bg-white shadow-sm">
      <Image
        src={imageUrl}
        alt={publication.title}
        fill
        className="object-cover"
      />
    </div>
  );

  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-3 px-4 py-3 sm:px-5 sm:py-3.5">
      <div className="flex flex-col gap-2 shrink-0 sm:w-40">
        <p className="text-xs text-zinc-500 sm:pt-0.5 tracking-wide leading-snug">
          {publication.conference} · {publication.year}
        </p>
        {linkUrl ? (
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 hover:opacity-90 transition-opacity"
          >
            {image}
          </a>
        ) : (
          image
        )}
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        {publication.award && (
          <div className="mb-1">
            {publication.awardUrl ? (
              <a
                href={publication.awardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-2 py-0.5 bg-gradient-to-r from-amber-50 to-rose-50 rounded border border-amber-100/50 text-xs text-amber-700 font-medium hover:text-amber-900 transition-colors"
              >
                {publication.award}
              </a>
            ) : (
              <span className="inline-flex px-2 py-0.5 bg-gradient-to-r from-amber-50 to-rose-50 rounded border border-amber-100/50 text-xs text-amber-700 font-medium">
                {publication.award}
              </span>
            )}
          </div>
        )}
        <h3 className="font-serif text-sm text-zinc-900 mb-1 leading-snug">
          {publication.title}
        </h3>
        <p className="text-xs text-zinc-600 mb-1.5 leading-relaxed">
          {formatAuthors(publication.authors)}
        </p>
        {(publication.paperUrl ||
          publication.codeUrl ||
          publication.bibtex ||
          publication.topics.length > 0) && (
          <div className="flex flex-row flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <div className="flex flex-row flex-wrap gap-4">
              {publication.paperUrl && (
                <a
                  href={publication.paperUrl}
                  className="group inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  <ArrowUpRight size={11} />
                  <span className="tracking-wider uppercase">Paper</span>
                </a>
              )}
              {publication.codeUrl && (
                <a
                  href={publication.codeUrl}
                  className="group inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  <ArrowUpRight size={11} />
                  <span className="tracking-wider uppercase">Project</span>
                </a>
              )}
              {publication.bibtex && (
                <a
                  href={publication.bibtex}
                  className="group inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  <ArrowUpRight size={11} />
                  <span className="tracking-wider uppercase">BibTeX</span>
                </a>
              )}
            </div>
            {publication.topics.length > 0 && (
              <div className="flex flex-row flex-wrap justify-end gap-1.5 shrink-0">
                {publication.topics.map((topic) => {
                  const isActive = selectedTopic === topic;

                  return onTopicSelect ? (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => onTopicSelect(topic)}
                      aria-pressed={isActive}
                      className={`${publicationTagClassName} ${topicTagStyles[topic]} cursor-pointer transition-opacity hover:opacity-100 ${
                        isActive ? "ring-1 ring-zinc-300 ring-offset-1" : ""
                      }`}
                    >
                      {topic}
                    </button>
                  ) : (
                    <span
                      key={topic}
                      className={`${publicationTagClassName} ${topicTagStyles[topic]}`}
                    >
                      {topic}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        )}
        {publication.tldr && (
          <p className="text-xs italic text-zinc-600 mt-1.5">
            {publication.tldr}
          </p>
        )}
      </div>
    </div>
  );
}
