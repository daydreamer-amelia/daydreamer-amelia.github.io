import { ArrowUpRight } from "lucide-react";
import { News } from "@/data/news";

export function NewsList({ items }: { items: News[] }) {
  return (
    <div className="border border-zinc-200 rounded-lg bg-white/60 divide-y divide-zinc-200 shadow-sm">
      {items.map((news, index) => (
        <NewsEntry key={index} news={news} />
      ))}
    </div>
  );
}

export function NewsEntry({ news }: { news: News }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 px-4 py-3 sm:px-5 sm:py-3.5">
      <p className="text-xs text-zinc-500 shrink-0 sm:w-28 sm:pt-0.5 tracking-wide">
        {news.date}
      </p>
      <p className="text-sm text-zinc-700 leading-relaxed">
        {news.emoji && (
          <span className="mr-1.5" aria-hidden="true">
            {news.emoji}
          </span>
        )}
        {news.link ? (
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline font-serif text-zinc-900 hover:text-zinc-600 transition-colors"
          >
            {news.title}
            <ArrowUpRight
              size={12}
              className="inline ml-0.5 -mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        ) : (
          <span className="font-serif text-zinc-900">{news.title}</span>
        )}
        {news.description && (
          <span className="text-zinc-600"> — {news.description}</span>
        )}
      </p>
    </div>
  );
}
