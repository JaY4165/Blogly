import Hero from "@/components/homeComponents/Hero";
import { Pagination } from "@/components/homeComponents/Pagination";
import Posts from "@/components/homeComponents/Posts";
import { getAllPosts } from "@/graphql/services";
import { Edge, Node } from "@/types/types";
// import { Edge } from "@/types";

export default async function Home() {
  const postsData: Edge[] = await getAllPosts();

  const firstPost: Edge = postsData[0];

  const [, ...otherPosts]: Edge[] = postsData;

  const featuredPost: Node = firstPost.node;

  return (
    <section className="h-auto flex items-center flex-col pt-20 px-5 sm:px-10 pb-20">
      <h3 className="text-lg font-normal tracking-wider pb-2">The blog</h3>
      <div className="flex flex-col items-center">
        <h1 className="text-xl md:text-5xl  tracking-wider font-semibold">
          Writings from our team
        </h1>
        <p className="mt-4 text-xs md:text-sm font-normal tracking-wider  text-center">
          The latest industry news, interviews, technologies, and resources.
        </p>
      </div>
      <Hero postsDataForHero={featuredPost} />

      <section className="grid grid-cols-1 sm:grid-cols-2 sm:grid-flow-row md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:grid-flow-row pt-10 gap-14 pb-20">
        <Posts postsData={otherPosts} />
      </section>

      <div className="flex justify-center">
        <Pagination />
      </div>
    </section>
  );
}
