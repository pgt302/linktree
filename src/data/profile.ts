export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "BlueStar",
  bio: "바이브 코딩을 해도 제대로 된 것을 원하는 자",
  avatar: "",
};

export const links: LinkItem[] = [
  { id: "blog", title: "블로그", url: "https://example.com/blog" },
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "instagram", title: "Instagram", url: "https://instagram.com" },
];
