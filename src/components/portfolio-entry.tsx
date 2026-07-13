import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Portfolio, PortfolioCategory } from "@/data/portfolio";

const categoryTagStyles: Record<PortfolioCategory, string> = {
  Report: "bg-emerald-50 text-emerald-800 border-emerald-100",
  Projects: "bg-sky-50 text-sky-800 border-sky-100",
};

const publicationTagClassName =
  "inline-flex px-1.5 py-0.5 rounded-full border text-[10px] leading-tight font-normal";

export function PortfolioList({ items }: { items: Portfolio[] }) {
  return (
    <div className="border border-zinc-200 rounded-lg bg-white/60 divide-y divide-zinc-200 shadow-sm">
      {items.map((portfolio, index) => (
        <PortfolioEntry key={index} portfolio={portfolio} />
      ))}
    </div>
  );
}

export function PortfolioEntry({ portfolio }: { portfolio: Portfolio }) {
  const image = portfolio.imageUrl && (
    <div className="relative w-[4.5rem] h-[5.75rem] sm:w-20 sm:h-[6.5rem] overflow-hidden rounded-md border border-zinc-200 bg-white shadow-sm">
      <Image
        src={portfolio.imageUrl}
        alt={portfolio.title}
        fill
        className="object-cover"
      />
    </div>
  );

  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-3 px-4 py-3 sm:px-5 sm:py-3.5">
      <div className="flex flex-col gap-2 shrink-0 sm:w-32">
        {portfolio.date && (
          <p className="text-xs text-zinc-500 sm:pt-0.5 tracking-wide">
            {portfolio.date}
          </p>
        )}
        {portfolio.projectUrl && image ? (
          <a
            href={portfolio.projectUrl}
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
        <p className="text-sm leading-relaxed">
          {portfolio.projectUrl ? (
            <a
              href={portfolio.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline font-serif text-zinc-900 hover:text-zinc-600 transition-colors"
            >
              {portfolio.title}
              <ArrowUpRight
                size={12}
                className="inline ml-0.5 -mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          ) : (
            <span className="font-serif text-zinc-900">{portfolio.title}</span>
          )}
          {portfolio.role && (
            <span className="text-zinc-700"> — {portfolio.role}</span>
          )}
        </p>
        {portfolio.organization && (
          <p className="text-xs text-zinc-500 mt-0.5">{portfolio.organization}</p>
        )}
        {portfolio.description && (
          <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
            {portfolio.description}
          </p>
        )}
        <div className="flex justify-end mt-1.5">
          <span
            className={`${publicationTagClassName} ${categoryTagStyles[portfolio.category]}`}
          >
            {portfolio.category}
          </span>
        </div>
      </div>
    </div>
  );
}
