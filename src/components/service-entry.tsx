import { Service } from "@/data/service";

export function ServiceList({ items }: { items: Service[] }) {
  return (
    <ul className="space-y-3 list-disc pl-5 marker:text-zinc-400">
      {items.map((service, index) => (
        <ServiceEntry key={index} service={service} />
      ))}
    </ul>
  );
}

export function ServiceEntry({ service }: { service: Service }) {
  return (
    <li className="text-sm text-zinc-700 leading-relaxed">
      <p className="font-serif text-zinc-900">{service.role}</p>
      {service.conferences ? (
        <div className="flex flex-wrap gap-1.5 mt-1">
          {service.conferences.map((conference) => (
            <span
              key={conference.name}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-zinc-200 bg-white text-[11px] text-zinc-700"
            >
              <span className="font-medium text-zinc-900">{conference.name}</span>
              <span className="text-zinc-500">{conference.years.join(", ")}</span>
            </span>
          ))}
        </div>
      ) : (
        <p className="text-xs text-zinc-600 mt-0.5 leading-relaxed">
          {service.details}
        </p>
      )}
    </li>
  );
}
