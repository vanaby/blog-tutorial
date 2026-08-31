
export type  BlogItem = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type BlogItems = ReadonlyArray<BlogItem>;

export default async function Home() {
  const blogEntries : BlogItems = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json());
//      .then(json => console.log(json));

  return (
    <main className="flex min-h-screen flex-col p-24 gap-y-8 bg-linear-to-b from-blue-100 to-pink-100">
      {
        blogEntries.map((singlePost : BlogItem) => {
          return(
            <div key={singlePost.id}>
              <h2 className="font-extrabold text-xl">{singlePost.title}</h2>
              <span>
                {singlePost.body}
              </span>
            </div>
          );
        })
      }
    </main>
  );
}
