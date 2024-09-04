import Link from "next/link";
import { volumes } from "@/lib/data";

export default function TheTwoTowers() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map(({ ordinal, title }) => {
          return (
            <li key={ordinal}>
              {ordinal}:{title}
            </li>
          );
        })}
      </ul>
    </>
  );
}
