import { validityScore } from "@pocket-bursar/core";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Pocket Bursar</h1>
      <p>Sample validity score (8 worked, 2 failed): {validityScore(8, 2).toFixed(2)}</p>
    </main>
  );
}
