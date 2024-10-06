import ParticlesBG from "@/components/ParticlesBG";
import Image from "next/image";


export default function Home() {
  return (
    <div className="rad-bg flex w-screen h-screen bg-gradient-to-r from-blue-800 to-indigo-600">
      <div className="flex flex-col w-full z-50 my-auto gap-[2rem]">
        <div className="flex place-items-center justify-center w-full gap-[14rem] mb-5">
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

        <div className="place-items-center justify-center mx-auto text-center mt-8 flex flex-col gap-4">
          <h1 className="text-[3.5rem] font-aammufk drop-shadow">
            ސުމޭކީ އަރުޝީފުގެ ޕްރޮޓޯޓައިޕް އިފުތިތާހުކުރުން 
          </h1>
          <h1 className="text-[3.5rem] font-poppins drop-shadow font-semibold w-[900px]">
            Prototype Launching Event of the Digital Preservation System
          </h1>
        </div>

        <div className="flex text-2xl mx-auto gap-7 place-items-center justify-center">
          <div className="font-poppins font-semibold">07 October 2024</div>
          <div className="text-3xl">|</div>
          <div dir="rtl" className="font-aammufk mt-2">07 އޮކްޓޫބަރު 2024</div> 
        </div>
      </div>
      <ParticlesBG />
    </div>
  );
}
