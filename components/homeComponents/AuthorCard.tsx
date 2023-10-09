import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function AuthorCard() {
  return (
    <div
      className="overflow-hidden w-full hover:bg-slate-100 dark:hover:bg-black/30 sm:p-5 sm:rounded-2xl duration-500 transition-all"
      //   key={post.node.title}
    >
      {/* <Link href={`/post/${post?.node?.slug}`} className="group/grpitem"> */}
      <div className="w-full relative pt-[100%] overflow-hidden">
        <Image
          src={"https://media.graphassets.com/2ndookcfTpyn1aZWxSkj"}
          alt="bg"
          fill
          className="rounded-full overflow-hidden"
        />
      </div>

      <div className="flex items-center flex-col space-y-1 pt-2">
        <div className="">
          <h1 className="font-normal text-md md:text-lg line-clamp-2 text-center">
            Helen Adjsyter
          </h1>
        </div>
        <div className="">
          <p className="font-normal text-sm md:text-sm line-clamp-1 text-center">
            fkasjfl s afaksjf ls sfklj salfjaslkdf j dkalfj dsa flsdfj kldf as f
            df kldsa fj asdfads dsfasdf dsafasdf dasfsda ff asdf asd
            fasdlkfjasdl fdslkf as fasflk jdsf hasdjk fasd f kdhf kjasdf jhsd
            fkjsadf
          </p>
        </div>
      </div>

      {/* </Link> */}
    </div>
  );
}
