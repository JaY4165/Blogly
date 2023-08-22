import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center space-y-5 flex-col">
      <h2 className="text-5xl">Not Found</h2>
      <p className="text-xl">Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
