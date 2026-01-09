import Image from "next/image";

export default function Logo() {
  return (
    <Image 
      src="/logo.png"   
      alt="Logo do site"
      width={40}
      height={32}
      />

      );
}