"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import { links } from "@/data/profile";

type Counts = Record<string, number>;

export default function LinkList() {
  const [counts, setCounts] = useState<Counts>({});

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/clicks", { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: Counts) => setCounts(data))
      .catch(() => {});
    return () => controller.abort();
  }, []);

  const handleClick = (id: string) => {
    // 응답을 기다리지 않고 바로 반영하고, 서버에는 백그라운드로 기록
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${id}`, { method: "POST", keepalive: true }).catch(
      () => {},
    );
  };

  return (
    <div className="mt-12 flex w-full flex-col gap-5">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          link={link}
          count={counts[link.id] ?? 0}
          onClick={() => handleClick(link.id)}
        />
      ))}
    </div>
  );
}
