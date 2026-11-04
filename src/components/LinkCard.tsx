"use client";

import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
  count: number;
  onClick: () => void;
};

export default function LinkCard({ link, count, onClick }: Props) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="glass glass-card relative flex h-16 w-full items-center justify-center rounded-3xl px-6 font-medium tracking-tight transition duration-300 hover:-translate-y-0.5"
    >
      {link.title}
      <span className="absolute right-5 text-xs font-normal tabular-nums text-foreground/50">
        {count}회
      </span>
    </a>
  );
}
