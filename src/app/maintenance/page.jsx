import NavBarHome from "@/components/NavBar";
import Image from "next/image";

export default function Maintenance() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <NavBarHome />
      <Image
        src="/maintenance.avif"
        alt="maintenance"
        width={1024}
        height={1024}
        style={{ width: "100%", height: "auto", maxWidth: "450px" }}
      />
    </div>
  );
}
