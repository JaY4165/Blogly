import { Badge } from "../ui/badge";
import Image from "next/image";
import backg from "@/public/background.jpg";
// import { Edge } from "@/types";

const PostCard = ({ postsCardData }: { postsCardData: any }) => {
  console.log(postsCardData);

  const splitData = (dateToSplit: string) => {
    const date = dateToSplit.split("T")[0];
    return `${date}`;
  };

  return (
    <div>
      {postsCardData.map((post: any) => (
        <div className="overflow-hidden" key={post.node.title}>
          <Image
            src={post?.node?.featuredImage?.url}
            alt="bg"
            width={1000}
            height={1000}
            className="rounded-xl object-contain"
          />

          <div className="inline-flex justify-start space-x-8 pt-4 pb-2">
            <div>
              <h3 className="text-sm font-medium truncate">
                {post?.node?.author?.name}
              </h3>
            </div>
            <div>
              <p className="list-item text-sm font-medium ">
                {splitData(post?.node?.createdAt)}
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-1 md:space-y-3">
            <div className="flex flex-row items-center justify-between">
              <h1 className="font-semibold text-lg md:text-xl ">
                {post?.node?.title}
              </h1>
              <div className="pt-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            <p className="text-xs pt-1 md:text-sm font-normal line-clamp-2">
              {post?.node?.excerpt}
            </p>
            <div className="flex flex-row space-x-2 pt-2">
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                {post?.node?.categories[0]?.slug}
              </Badge>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
