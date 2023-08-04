import React from "react";
import { Skeleton } from "../ui/skeleton";

const HomeLoadComp = () => {
  return (
    <section className="h-auto flex items-center flex-col pt-20 px-5 sm:px-10 pb-20">
      <Skeleton className="h-7 w-28 rounded-lg" />
      <div className="flex flex-col items-center pt-6 w-full py-7">
        <Skeleton className="h-14 w-2/3 rounded-lg" />
      </div>
      <Skeleton className="h-5 w-3/6 rounded-lg" />

      <div className="h-screen w-full py-10">
        <Skeleton className="h-screen w-full rounded-lg" />
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 sm:grid-flow-row md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:grid-flow-row pt-10 gap-14 pb-20"></section>
    </section>
  );
};

export default HomeLoadComp;
