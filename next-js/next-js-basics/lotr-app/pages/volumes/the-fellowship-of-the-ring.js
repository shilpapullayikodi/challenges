import Link from "next/link";
import { volumes } from "@/lib/data";
import Image from "next/image";

export default function TheFellowshipOfTheRing() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        height={144}
        width={144}
        alt="cover"
      />

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
      <Link href="/volumes/the-two-towers">Next Volume: The Two Towers</Link>
    </>
  );
}
