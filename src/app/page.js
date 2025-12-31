import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-4 sm:p-20 -mt-14">
      <img className='h-20 w-40 object-contain md:h-30 md:w-60' src="https://github.com/user-attachments/assets/496b38ae-fca6-45ff-a5ed-a6222de21987" alt="" />
      <h1 className="font-Mirage -mt-5 text-[#1a7533] text-7xl">nujii</h1>
      <div className="font-sans -mt-1">
        <h2 className="text-[#1a7533]">a craft tea company</h2>
      </div>
    </div>
  );
}
