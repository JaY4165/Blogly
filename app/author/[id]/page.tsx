import Image from "next/image";
import React from "react";


async function AuthorId({
  params,
}: {
  params: { id: string };
}): Promise<React.JSX.Element> {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full overflow-hidden">
          <Image
            src={""}
            alt="bg"
            fill
            className="rounded-full overflow-hidden"
          />
          <h1 className="text-3xl dark:text-white">{params.id}</h1>
        </div>
      </div>
    </>
  );
}

export default AuthorId;
