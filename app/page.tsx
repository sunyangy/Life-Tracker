import LifeGrid from "@/components/LifeGrid";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-y-10 mt-20">
      <h1 className="text-3xl font-bold text-center capitalize">
        life tracker
      </h1>
      {/* 生命网格 */}
      <LifeGrid />
    </main>
  );
}
