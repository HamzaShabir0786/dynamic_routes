import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-white font-bold text-center  mt-24 text-[2rem]">
        Hello World!
      </h1>
      <Link
        href={"/products"}
        className="text-white font-bold ml-[49rem]  mt-24 text-[2rem]"
      >
        {" "}
        Click me{" "}
      </Link>
    </>
  );
}
