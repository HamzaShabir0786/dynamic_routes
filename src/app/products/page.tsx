import Link from "next/link";
export default function Products() {
  return (
    <div className="bg-purple-500 w-[30%] h-[200px] m-auto flex flex-col items-center gap-7 mt-32 rounded-3xl">
      <h1 className="text-white text-[2rem] font-bold">Products</h1>
      <ul className="flex flex-col gap-4 items-center text-white font-bold">
        <Link href={"/products/20k/Headphone"}>
          <li className="hover:text-gray-400">Headphone</li>
        </Link>
        <Link href={"/products/290k/LaptopBagpack"}>
          {" "}
          <li className="hover:text-gray-400">laptopBagpack</li>
        </Link>
        <Link href={"/products/180k/Smartwatch"}>
          {" "}
          <li className="hover:text-gray-400">smartWatch</li>
        </Link>
      </ul>
    </div>
  );
}
