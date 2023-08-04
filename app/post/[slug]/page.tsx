import { getPostBySlug } from "@/graphql/services";
import { Post } from "@/types/types";
import Image from "next/image";
import React from "react";
import bg from "@/public/wallbg.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function Slug({
  params,
}: {
  params: { slug: string };
}): Promise<React.JSX.Element> {
  // const slugName: string = params.slug;

  // const postData: Post = await getPostBySlug(slugName);

  return (
    <div className="px-5 sm:px-10 pt-20">
      <div className="flex pb-4 items-center">
        <Avatar>
          <AvatarImage
            className="object-cover"
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="pl-2 text-lg">Author</p>
      </div>

      <Image
        src={bg}
        alt="background"
        className="rounded-xl"
        loading="lazy"
        width={1000}
        height={1000}
      />
    </div>
  );
}
