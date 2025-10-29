import { useQuery } from "@tanstack/react-query";

function FetchData() {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      console.log("Calling API...");
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      return res.json();
    },
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
  });


  return (
    <div>
      {posts.map((p) => (
        <h1 key={p.id}>{p.title}</h1>
      ))}
    </div>
  );
}

export default FetchData;
