import Image from "next/image";
import wallbg from "../public/wallbg.jpg";

export default function Home() {
  return (
    <main className="h-screen flex items-center flex-col pt-20 px-5 sm:px-10 ">
      <h3 className="text-lg font-normal tracking-wider pb-2">The blog</h3>
      <div className="flex flex-col items-center">
        {/* <Image
            src={blacksplash}
            alt="blacksplash"
            className="absolute left-[21rem] bottom-7 h-10 w-16 scale-x-75 rotate-45"
          /> */}
        <h1 className="text-xl md:text-5xl  tracking-wider font-semibold">
          Writings from our team
        </h1>
        <p className="mt-4 text-xs md:text-sm font-normal tracking-wider  text-center">
          The latest industry news, interviews, technologies, and resources.
        </p>
      </div>
      <div className="relative pt-8 ">
        <Image
          src={wallbg}
          alt="background"
          className="rounded-xl"
          loading="lazy"
        />
        <div className="flex flex-col absolute top-[50%] pl-8 max-md:pl-3 md:top-[70%] space-y-1 md:space-y-3">
          <div className="flex flex-row space-x-8">
            <h3 className="text-white text-sm max-md:text-xs">Guy Ritchie</h3>
            <ul>
              <li className="list-disc text-white text-sm max-md:text-xs">
                14 July 2023
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-1 md:space-y-3">
            <h1 className="font-semibold text-lg md:text-2xl text-white">
              UX reviews presentations
            </h1>
            <p className="text-xs pr-2 pt-1 md:text-sm font-light  text-white">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
