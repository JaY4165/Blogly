import Image from "next/image";
import wallbg from "../public/wallbg.jpg";
import { Badge } from "@/components/ui/badge";
import backg from "../public/background.jpg";

export default async function Home() {
  // const { data } = await fetch(String(process.env.HYGRAPH_CMS_ENDPOINT), {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     query: `
  //     query getPostTitle {
  //       posts {
  //         title
  //       }
  //     }
  //     `,
  //   }),
  //   next: { revalidate: 10 },
  // })
  //   .then((res) => res.json())
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // console.log(data);

  return (
    <main className="h-screen flex items-center flex-col pt-20 px-5 sm:px-10">
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
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
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
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-10 gap-8">
        <div className="">
          <Image src={backg} alt="bg" className="rounded-xl" />
          <div className="flex flex-row space-x-8 pt-4 pb-2">
            <h3 className="text-sm font-medium">Guy Ritchie</h3>
            <ul>
              <li className="list-disc  text-sm font-medium">14 July 2023</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-1 md:space-y-3">
            <div className="flex flex-row items-center justify-between">
              <h1 className="font-semibold text-lg md:text-xl ">
                UX reviews presentations
              </h1>
              <div className="pt-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            <p className="text-xs pt-1 md:text-sm font-normal line-clamp-2">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div className="flex flex-row space-x-2 pt-2">
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                IOT
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                Web
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                DS
              </Badge>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={backg} alt="bg" className="rounded-xl" />
          <div className="flex flex-row space-x-8 pt-4 pb-2">
            <h3 className="text-sm font-medium">Guy Ritchie</h3>
            <ul>
              <li className="list-disc  text-sm font-medium">14 July 2023</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-1 md:space-y-3">
            <div className="flex flex-row items-center justify-between">
              <h1 className="font-semibold text-lg md:text-xl ">
                UX reviews presentations
              </h1>
              <div className="pt-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            <p className="text-xs pt-1 md:text-sm font-normal line-clamp-2">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div className="flex flex-row space-x-2 pt-2">
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                IOT
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                Web
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                DS
              </Badge>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={backg} alt="bg" className="rounded-xl" />
          <div className="flex flex-row space-x-8 pt-4 pb-2">
            <h3 className="text-sm font-medium">Guy Ritchie</h3>
            <ul>
              <li className="list-disc  text-sm font-medium">14 July 2023</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-1 md:space-y-3">
            <div className="flex flex-row items-center justify-between">
              <h1 className="font-semibold text-lg md:text-xl ">
                UX reviews presentations
              </h1>
              <div className="pt-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            <p className="text-xs pt-1 md:text-sm font-normal line-clamp-2">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div className="flex flex-row space-x-2 pt-2">
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                IOT
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                Web
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                DS
              </Badge>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={backg} alt="bg" className="rounded-xl" />
          <div className="flex flex-row space-x-8 pt-4 pb-2">
            <h3 className="text-sm font-medium">Guy Ritchie</h3>
            <ul>
              <li className="list-disc  text-sm font-medium">14 July 2023</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-1 md:space-y-3">
            <div className="flex flex-row items-center justify-between">
              <h1 className="font-semibold text-lg md:text-xl ">
                UX reviews presentations
              </h1>
              <div className="pt-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            <p className="text-xs pt-1 md:text-sm font-normal line-clamp-2">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div className="flex flex-row space-x-2 pt-2">
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                IOT
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                Web
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                DS
              </Badge>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={backg} alt="bg" className="rounded-xl" />
          <div className="flex flex-row space-x-8 pt-4 pb-2">
            <h3 className="text-sm font-medium">Guy Ritchie</h3>
            <ul>
              <li className="list-disc  text-sm font-medium">14 July 2023</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-1 md:space-y-3">
            <div className="flex flex-row items-center justify-between">
              <h1 className="font-semibold text-lg md:text-xl ">
                UX reviews presentations
              </h1>
              <div className="pt-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            <p className="text-xs pt-1 md:text-sm font-normal line-clamp-2">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div className="flex flex-row space-x-2 pt-2">
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                IOT
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                Web
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                DS
              </Badge>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={backg} alt="bg" className="rounded-xl" />
          <div className="flex flex-row space-x-8 pt-4 pb-2">
            <h3 className="text-sm font-medium">Guy Ritchie</h3>
            <ul>
              <li className="list-disc  text-sm font-medium">14 July 2023</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-1 md:space-y-3">
            <div className="flex flex-row items-center justify-between">
              <h1 className="font-semibold text-lg md:text-xl ">
                UX reviews presentations
              </h1>
              <div className="pt-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            <p className="text-xs pt-1 md:text-sm font-normal line-clamp-2">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div className="flex flex-row space-x-2 pt-2">
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                IOT
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                Web
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                DS
              </Badge>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={backg} alt="bg" className="rounded-xl" />
          <div className="flex flex-row space-x-8 pt-4 pb-2">
            <h3 className="text-sm font-medium">Guy Ritchie</h3>
            <ul>
              <li className="list-disc  text-sm font-medium">14 July 2023</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-1 md:space-y-3">
            <div className="flex flex-row items-center justify-between">
              <h1 className="font-semibold text-lg md:text-xl ">
                UX reviews presentations
              </h1>
              <div className="pt-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            <p className="text-xs pt-1 md:text-sm font-normal line-clamp-2">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div className="flex flex-row space-x-2 pt-2">
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                IOT
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                Web
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                DS
              </Badge>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={backg} alt="bg" className="rounded-xl" />
          <div className="flex flex-row space-x-8 pt-4 pb-2">
            <h3 className="text-sm font-medium">Guy Ritchie</h3>
            <ul>
              <li className="list-disc  text-sm font-medium">14 July 2023</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-1 md:space-y-3">
            <div className="flex flex-row items-center justify-between">
              <h1 className="font-semibold text-lg md:text-xl ">
                UX reviews presentations
              </h1>
              <div className="pt-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            <p className="text-xs pt-1 md:text-sm font-normal line-clamp-2">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div className="flex flex-row space-x-2 pt-2">
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                IOT
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                Web
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                DS
              </Badge>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={backg} alt="bg" className="rounded-xl" />
          <div className="flex flex-row space-x-8 pt-4 pb-2">
            <h3 className="text-sm font-medium">Guy Ritchie</h3>
            <ul>
              <li className="list-disc  text-sm font-medium">14 July 2023</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-1 md:space-y-3">
            <div className="flex flex-row items-center justify-between">
              <h1 className="font-semibold text-lg md:text-xl ">
                UX reviews presentations
              </h1>
              <div className="pt-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            <p className="text-xs pt-1 md:text-sm font-normal line-clamp-2">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div className="flex flex-row space-x-2 pt-2">
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                IOT
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                Web
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                DS
              </Badge>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={backg} alt="bg" className="rounded-xl" />
          <div className="flex flex-row space-x-8 pt-4 pb-2">
            <h3 className="text-sm font-medium">Guy Ritchie</h3>
            <ul>
              <li className="list-disc  text-sm font-medium">14 July 2023</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-1 md:space-y-3">
            <div className="flex flex-row items-center justify-between">
              <h1 className="font-semibold text-lg md:text-xl ">
                UX reviews presentations
              </h1>
              <div className="pt-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            <p className="text-xs pt-1 md:text-sm font-normal line-clamp-2">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div className="flex flex-row space-x-2 pt-2">
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                IOT
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                Web
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                DS
              </Badge>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={backg} alt="bg" className="rounded-xl" />
          <div className="flex flex-row space-x-8 pt-4 pb-2">
            <h3 className="text-sm font-medium">Guy Ritchie</h3>
            <ul>
              <li className="list-disc  text-sm font-medium">14 July 2023</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-1 md:space-y-3">
            <div className="flex flex-row items-center justify-between">
              <h1 className="font-semibold text-lg md:text-xl ">
                UX reviews presentations
              </h1>
              <div className="pt-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            <p className="text-xs pt-1 md:text-sm font-normal line-clamp-2">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div className="flex flex-row space-x-2 pt-2">
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                IOT
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                Web
              </Badge>
              <Badge
                variant="outline"
                className="dark:border-white border-black"
              >
                DS
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
