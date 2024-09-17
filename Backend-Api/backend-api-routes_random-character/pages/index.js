import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function HomePage() {
  const { data, error } = useSWR("/api/random-character", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      First Name: {data.firstName}
      <br />
      Last Name: {data.lastName} <br />
      Age: {data.age}
      <br />
      Twitter: {data.twitterName}
      <br />
      Geohash: {data.geohash}
      <br />
    </div>
  );
}
