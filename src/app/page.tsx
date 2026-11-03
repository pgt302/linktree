import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links } from "@/data/profile";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-7 pb-16 pt-24">
      <ThemeToggle />
      <Profile />
      <div className="mt-12 flex w-full flex-col gap-5">
        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>
    </main>
  );
}
