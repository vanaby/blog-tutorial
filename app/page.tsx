import { Navbar } from "./components/navbar";

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
    <>
    <Navbar />
    <main className="mx-auto max-w-7xl px-6 py-12">
      {
        blogEntries.map((singlePost : BlogItem) => {
          return(
        <section key={singlePost.id} className="space-y-4">
          <h2 className="text-3xl font-bold">{singlePost.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl">
            ID: {singlePost.id}
          </p>
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6">
            <p className="text-sm">{singlePost.body}</p>
          </div>
        </section>
          );
        })
      }
    </main>
    </>
  );
}
