import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Products() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>
          <p>Id: {data.id}</p>
          Name: {data.name}
          Description: {data.description}
          <p>
            Price: {data.price} {data.currency}
          </p>
          Category: {data.category}
        </li>
      ))}
    </ul>
  );
}
