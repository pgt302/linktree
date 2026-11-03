import { profile } from "@/data/profile";

export default function Profile() {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-foreground/80 bg-foreground/5">
        {profile.avatar && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profile.avatar}
            alt={`${profile.name} 프로필 사진`}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <h1 className="mt-6 text-xl font-semibold">{profile.name}</h1>
      <p className="mt-3 text-sm text-foreground/70">{profile.bio}</p>
    </section>
  );
}
