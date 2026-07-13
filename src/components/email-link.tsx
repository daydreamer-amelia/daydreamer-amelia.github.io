"use client";

import { Mail } from "lucide-react";

export function EmailLink({
  local,
  domain,
}: {
  local: string;
  domain: string;
}) {
  return (
    <a
      href="#"
      onClick={(event) => {
        event.preventDefault();
        window.location.href = `mailto:${local}@${domain}`;
      }}
      className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
    >
      <Mail size={14} />
      {local} @ {domain}
    </a>
  );
}
