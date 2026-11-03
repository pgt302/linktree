import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links } from "@/data/profile";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-6 py-16">
      <ThemeToggle />
      <Profile />
      <div className="mt-10 flex w-full flex-col gap-4">
        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>
    </main>
  );
}
