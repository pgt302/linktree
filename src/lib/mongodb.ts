import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
}

// dev 서버의 HMR로 모듈이 다시 로드돼도 연결이 늘어나지 않도록 global에 보관
const globalForMongo = globalThis as unknown as {
  mongoClient?: Promise<MongoClient>;
};

const clientPromise = (globalForMongo.mongoClient ??= new MongoClient(
  uri,
).connect());

type ClickDoc = { _id: string; count: number };

export async function getClicksCollection() {
  const client = await clientPromise;
  return client.db("linktree").collection<ClickDoc>("clicks");
}
