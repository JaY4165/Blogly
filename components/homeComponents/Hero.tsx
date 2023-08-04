import Image from "next/image";
import { Badge } from "../ui/badge";
import { splitData } from "./PostCard";
import { Node } from "@/types/types";
import Link from "next/link";

const Hero = ({ postsDataForHero }: { postsDataForHero: Node }) => {
  // console.log(postsDataForHero);
  return (
    <div className="relative pt-8 ">
      <Link href={`/post/${postsDataForHero?.slug}`}>
        <Image
          src={postsDataForHero.featuredImage.url}
          alt="background"
          className="rounded-xl"
          loading="lazy"
          width={1000}
          height={1000}
        />
        <div className="flex flex-col absolute top-[45%] pl-8 max-md:pl-3 md:top-[70%] space-y-1 md:space-y-3">
          <div className="flex flex-row space-x-8">
            <h3 className="text-white text-sm max-md:text-xs">
              {postsDataForHero.author.name}
            </h3>
            <ul>
              <li className="list-disc text-white text-sm max-md:text-xs">
                {splitData(String(postsDataForHero.createdAt))}
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-1 md:space-y-3">
            <h1 className="font-semibold text-lg md:text-2xl text-white">
              {postsDataForHero.title}
            </h1>
            <p className="text-xs pr-2 pt-1 md:text-sm font-light  text-white">
              {postsDataForHero.excerpt}
            </p>
            <div className="flex flex-row space-x-2 pt-2">
              <Badge variant="outline" className="text-white dark:border-white">
                {postsDataForHero.categories[0].slug}
              </Badge>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
