import { AllAuthorsData } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface AuthorCardProps {
  postAuData: AllAuthorsData;
}

export function AuthorCard({ postAuData }: AuthorCardProps) {
  const authorDetails = postAuData.authors;
  return (
    <>
      {authorDetails.map((author) => (
        <Link key={author?.id} href={`/author/${author?.id}`}>
          <div className="overflow-hidden w-full hover:bg-slate-100 cursor-pointer dark:hover:bg-black/30 sm:p-5 sm:rounded-2xl duration-500 transition-all">
            <div className="w-full relative pt-[100%] overflow-hidden">
              <Image
                src={author?.profilePicture?.url}
                alt="bg"
                fill
                className="rounded-full overflow-hidden"
              />
            </div>

            <div className="flex items-center flex-col space-y-1 pt-2">
              <div className="">
                <h1 className="font-normal text-md md:text-lg line-clamp-2 text-center">
                  {author?.name}
                </h1>
              </div>
              <div className="">
                <p className="font-normal text-sm md:text-sm line-clamp-1 text-center">
                  {author?.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
