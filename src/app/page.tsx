import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-7 pb-16 pt-24">
      <ThemeToggle />
      <Profile />
      <LinkList />
    </main>
  );
}
