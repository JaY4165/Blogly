import React from "react";
import { Skeleton } from "../ui/skeleton";

const SlugLoading: React.FC = () => {
  return (
    <div className="px-5 sm:px-10 pt-20 pb-10">
      <div className="flex justify-between w-full">
        <div className="flex pb-4 pl-1 space-x-2 items-center">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="pl-2 text-lg h-4 w-32" />
        </div>
        <div className="self-center pr-1">
          <Skeleton className="h-4 w-44" />
        </div>
      </div>
      <Skeleton className="h-screen w-full rounded-xl" />
    </div>
  );
};

export default SlugLoading;
