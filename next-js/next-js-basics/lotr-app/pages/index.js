import Link from "next/link";
export default function HomePage() {
  return (
    <div>
      <h1>
        <Link href="/volumes">Volumes Overview</Link>
      </h1>
    </div>
  );
}
