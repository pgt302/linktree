import { profile } from "@/data/profile";

export default function Profile() {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="h-32 w-32 overflow-hidden rounded-full bg-foreground/5 shadow-[0_12px_32px_rgba(180,110,70,0.28)] ring-4 ring-white/70 dark:ring-white/15">
        {profile.avatar && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profile.avatar}
            alt={`${profile.name} 프로필 사진`}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <h1 className="mt-7 text-2xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/65">
        {profile.bio}
      </p>
    </section>
  );
}
