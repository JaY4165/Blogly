import { getPostBySlug } from "@/graphql/services";
import { Category, Post } from "@/types/types";
import Image from "next/image";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { splitData } from "@/components/homeComponents/PostCard";
import ContentRenderer from "@/components/homeComponents/ContentRederer";

export default async function Slug({
  params,
}: {
  params: { slug: string };
}): Promise<React.JSX.Element> {
  const slugName: string = params.slug;

  const postData: Post = await getPostBySlug(slugName);

  const postImage: string = postData?.featuredImage?.url;

  const blogCategories: Category[] = postData?.categories;

  // console.log(postData?.content?.json);

  return (
    <div className="px-5 sm:px-10 pt-20">
      <div className="flex justify-between w-full">
        <div className="flex pb-4 pl-1 items-center">
          <Avatar>
            <AvatarImage
              className="object-cover"
              src={postData?.author?.profilePicture?.url}
              alt={postData?.author?.name}
            />
            <AvatarFallback className="capitalize">CN</AvatarFallback>
          </Avatar>
          <p className="pl-2 text-lg">{postData?.author?.name}</p>
        </div>
        <div className="self-center pr-1">
          <p>{splitData(String(postData?.createdAt))}</p>
        </div>
      </div>

      <Image
        src={postImage}
        alt={postData?.title}
        className="rounded-xl"
        loading="lazy"
        width={1000}
        height={1000}
      />

      <div className="flex pt-5 items-center justify-start flex-row space-x-2">
        {blogCategories.map(
          (category: any, index: any): React.JSX.Element => (
            <div key={index}>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                {category.name}
              </Badge>
            </div>
          )
        )}
      </div>

      <section className="pb-14">
        <h1 className="text-5xl font-extralight pt-5">{postData?.title}</h1>
        <ContentRenderer content={postData?.content} />
      </section>
    </div>
  );
}
