import React from "react";
import { Skeleton } from "../ui/skeleton";

const SlugLoading: React.FC = () => {
  return (
    <div className="px-5 sm:px-10 pt-20">
      <div className="flex justify-between w-full">
        <div className="flex pb-4 pl-1 items-center">
          <Skeleton className="h-4 w-80" />
          <Skeleton className="h-4 w-80" />
        </div>
        <div className="self-center pr-1">
          <Skeleton className="h-4 w-80" />
        </div>
      </div>

      <Skeleton className="rounded-xl h-[100%] w-[100%]" />
      <div className="flex pt-5 items-center justify-start flex-row space-x-2">
        {[...Array(6)].map(
          (_, index: any): React.JSX.Element => (
            <div key={index}>
              <Skeleton className="h-7 w-7 rounded-full" />
            </div>
          )
        )}
      </div>

      <section className="pb-14">
        <Skeleton className="h-4 w-28" />
      </section>
    </div>
  );
};

export default SlugLoading;
