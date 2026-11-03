import type { LinkItem } from "@/data/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-16 w-full items-center justify-center rounded-2xl border-2 border-foreground/80 px-4 font-medium transition hover:bg-foreground hover:text-background"
    >
      {link.title}
    </a>
  );
}
