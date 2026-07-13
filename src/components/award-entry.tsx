import { ArrowUpRight } from "lucide-react";
import { Award } from "@/data/awards";

export function AwardList({ items }: { items: Award[] }) {
  return (
    <ul className="space-y-3 list-disc pl-5 marker:text-zinc-400">
      {items.map((award, index) => (
        <AwardEntry key={index} award={award} />
      ))}
    </ul>
  );
}

export function AwardEntry({ award }: { award: Award }) {
  return (
    <li className="text-sm text-zinc-700 leading-relaxed">
      <p>
        <span className="text-xs text-zinc-500 mr-2">{award.date}</span>
        {award.link ? (
          <a
            href={award.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline font-serif text-zinc-900 hover:text-zinc-600 transition-colors"
          >
            {award.title}
            <ArrowUpRight
              size={12}
              className="inline ml-0.5 -mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        ) : (
          <span className="font-serif text-zinc-900">{award.title}</span>
        )}
      </p>
      <p className="text-xs text-zinc-500 mt-0.5">{award.organization}</p>
      {award.description && (
        <p className="text-xs text-zinc-600 mt-0.5 leading-relaxed">
          {award.description}
        </p>
      )}
    </li>
  );
}
