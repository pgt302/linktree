import { getClicksCollection } from "@/lib/mongodb";

export async function GET() {
  try {
    const clicks = await getClicksCollection();
    const docs = await clicks.find().toArray();
    const counts = Object.fromEntries(docs.map((d) => [d._id, d.count]));
    return Response.json(counts);
  } catch (error) {
    console.error("클릭 수 조회 실패", error);
    return Response.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}
