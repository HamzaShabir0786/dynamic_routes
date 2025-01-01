import Image from "next/image";
export default function Products({
  params,
}: {
  params: { brand: string; price: string };
}) {
  let imageProduct: string = params.brand.toLowerCase();
  return (
    <>
      <div className="bg-pink-300 w-[30%] h-[50vh] m-auto flex flex-col items-center mt-20 rounded-3xl">
        <Image
          src={`/images/${imageProduct}.jpg`}
          width={200}
          alt="product pic"
          height={100}
          className="mt-5 rounded-2xl"
        ></Image>
        <div className="bg-purple-400 flex gap-8 font-bold text-[1.4rem] mt-6 p-3 rounded-lg">
          <h1>Price: {params.price}</h1>
          <h2>Product: {params.brand} </h2>
        </div>
      </div>
    </>
  );
}
