import ParticlesBG from "@/components/ParticlesBG";
import Image from "next/image";


export default function Home() {
  return (
    <div className="rad-bg flex w-screen h-screen bg-gradient-to-r from-blue-800 to-indigo-600">
      <div className="flex flex-col w-full z-50 my-auto gap-[2rem]">
        <div className="flex place-items-center justify-center w-full gap-[9rem]">
          <Image 
          alt="drop-shadow"
          className="drop-shadow-lg"
          src={"/nam.png"} 
          width={220} height={220} />

          <Image
          alt="oais-cloud"
          className="drop-shadow-lg"
          src={"/oais cloud.png"}
          width={270} height={270} />
        </div>
        <h1 className="text-[3rem] place-items-center justify-center mx-auto font-poppins drop-shadow font-semibold">
          Digital Preservation System - Prototype Launching
        </h1>
        <div className="text-2xl mx-auto font-poppins">07 October 2024</div>
      </div>
      <ParticlesBG />
    </div>
  );
}
