import useSWR from "swr";
import Link from "next/link";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Products() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>
          <Link href={`/products/${data.id}`}>
            <h2>Id: {data.id}</h2>
            <h3>Name: {data.name}</h3>
          </Link>
          <p>Description: {data.description}</p>
          <p>
            Price: {data.price} {data.currency}
          </p>
          Category: {data.category}
        </li>
      ))}
    </ul>
  );
}
