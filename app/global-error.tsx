"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="h-screen w-full flex items-center justify-center space-y-5">
        <h2 className="text-5xl">Something went wrong!</h2>
        <Link href="/">
          <Button variant={"link"}>Try again</Button>
        </Link>
      </body>
    </html>
  );
}
