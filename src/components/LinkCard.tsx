import type { LinkItem } from "@/data/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass glass-card flex h-16 w-full items-center justify-center rounded-3xl px-6 font-medium tracking-tight transition duration-300 hover:-translate-y-0.5"
    >
      {link.title}
    </a>
  );
}
