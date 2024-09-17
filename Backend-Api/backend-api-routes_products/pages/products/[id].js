import { useRouter } from "next/router";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;
  if (data.id != id) {
    return <div>Product with ID {id} is unavailable</div>;
  }

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
