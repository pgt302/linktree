export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "PKT",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  avatar: "/IMG.png",
};

export const links: LinkItem[] = [
  { id: "github", title: "💻 깃허브", url: "https://github.com/pgt302" },
  {
    id: "wishlist",
    title: "🪎 갖고싶은 것",
    url: "https://www.apple.com/kr/ipad-pro/",
  },
  { id: "email", title: "✉️ 이메일", url: "mailto:pgt30245@gmail.com" },
];
