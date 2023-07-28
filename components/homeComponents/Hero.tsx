import Image from "next/image";
import { Badge } from "../ui/badge";
import wallbg from "@/public/wallbg.jpg";

const Hero = () => {
  return (
    <div className="relative pt-8 ">
      <Image
        src={wallbg}
        alt="background"
        className="rounded-xl"
        loading="lazy"
      />
      <div className="flex flex-col absolute top-[45%] pl-8 max-md:pl-3 md:top-[70%] space-y-1 md:space-y-3">
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
            How do you create compelling presentations that wow your colleagues
            and impress your managers ?
          </p>
          <div className="flex flex-row space-x-2 pt-2">
            <Badge variant="outline" className="text-white dark:border-white">
              IOT
            </Badge>
            <Badge variant="outline" className="text-white dark:border-white">
              Web
            </Badge>
            <Badge variant="outline" className="text-white dark:border-white">
              DS
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
