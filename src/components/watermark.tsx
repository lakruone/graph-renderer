import Image from "next/image";

export default function Watermark() {
  return (
    <Image
      src="/curve.svg"
      alt="Background curve"
      width={300}
      height={300}
      className="z-0 absolute opacity-5 rotate-12 h-full w-full scale-[2]"
    />
  );
}
