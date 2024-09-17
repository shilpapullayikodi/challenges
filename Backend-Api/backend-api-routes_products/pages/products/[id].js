import { useRouter } from "next/router";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>
        {data.id} : {data.name}
      </h2>

      {data.description}
      <p>
        {data.price} {data.currency}
      </p>
      <p>Price:{data.category}</p>
    </div>
  );
}
