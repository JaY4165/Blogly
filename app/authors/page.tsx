import { AuthorCard } from "@/components/homeComponents/AuthorCard";
import { getAllAuthors } from "@/graphql/services";
import { AllAuthorsData } from "@/types/types";
import React from "react";

async function page() {
  const authorsData : AllAuthorsData = await getAllAuthors();
  console.log(authorsData);

  return (
    <div className="px-5">
      <h1 className="text-center text-3xl pt-16 font-thin tracking-widest">
        ALL AUTHORS
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 sm:grid-flow-row md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:grid-flow-row pt-10 gap-14 pb-20">
        <AuthorCard postAuData={authorsData} />
      </section>
    </div>
  );
}

export default page;
