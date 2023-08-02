import Hero from "@/components/homeComponents/Hero";
import Posts from "@/components/homeComponents/Posts";
import { getAllPosts } from "@/graphql/services";
// import { Edge } from "@/types";

export default async function Home() {
  const postsData: any = await getAllPosts();

  const firstPost: any = postsData[0];

  const [, ...otherPosts]: any = postsData;

  console.log("changed values", otherPosts);

  const featuredPost: any = firstPost.node;

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

      <section className="grid grid-cols-1 sm:grid-cols-2 sm:grid-flow-row md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:grid-flow-row pt-10 gap-10 pb-20">
        <Posts postsData={postsData} />
      </section>
    </section>
  );
}
