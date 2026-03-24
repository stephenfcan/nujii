import Image from "next/image";

export default function MenuPage() {
  return (
    <div className="bg-white text-[#1a7533] flex flex-col justify-center xl:items-center min-h-screen p-8 pb-20 gap-4 sm:p-20 pt-20 sm:pt-0 -mt-14">
      <h1 className="font-Mirage text-5xl sm:mt-20 mt-5 pb-3">menu</h1>
      <i className="font-sans max-w-xl pb-3 xl:mb-10">
        sourced directly from the farm, our tea leaves are handpicked and grown pesticide-free
      </i>
        {/* classic teas */}
        <div className="xl:flex justify-between mb-5 xl:space-x-30 space-x-5 space-y-5 xl:space-y-0">
          <div>
            <h2 className="text-3xl mb-5">high mountain tea series</h2>
            <div className="space-y-4 font-sans">
              <div className="flex space-x-3 sm:space-x-5">
                <p>green oolong tea</p>
                <p>alishan, taiwan</p>
                <i className="hidden sm:flex">light, sweet, milky</i>
              </div>
              <div className="flex space-x-3 sm:space-x-5">
                <p>jasmine oolong tea</p>
                <p>alishan, taiwan</p>
                <i className="hidden sm:flex">floral, sweet, crisp</i>
              </div>
              <div className="flex space-x-3 sm:space-x-5">
                <p>red oolong tea</p>
                <p>alishan, taiwan</p>
                <i className="hidden sm:flex">bold, notes of honey</i>
              </div>
            </div>
          </div>
          <div className="flex space-x-5">
            {/* Images */}
            <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/877a79e2-7bcb-411a-b98c-95c2c846093c" alt="" />
            <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/28b5b4b5-c33b-48f9-81b0-0309790c6fb6" alt="" />
          </div>
          </div>
        {/* premium teas */}
        <div className="xl:flex justify-between mb-5 xl:space-x-18 space-x-5 space-y-5 xl:space-y-0">
          <div>
            <h2 className="text-3xl mb-5">premium tea series</h2>
            <div className="space-y-4 font-sans">
              <div className="flex space-x-3 sm:space-x-5">
                <p>sun moon lake red tea</p>
                <p>nantou, taiwan</p>
                <i className="hidden sm:flex">bold, malty, cinnamon</i>
              </div>
              <div className="flex space-x-3 sm:space-x-5">
                <p>yuzu oolong tea</p>
                <p>alishan, taiwan</p>
                <i className="hidden sm:flex">tangy, aromatic, refreshing</i>
              </div>
            </div>
          </div>
          <div className="flex space-x-5">
            {/* Images */}
            <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/f8f7a239-e80d-46c0-9157-36b24490e6ec" alt="" />
            <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/6c0b8065-75f0-4f5b-bffd-cfdff7872f39" alt="" />
          </div>
        </div>
        {/* milk latte series */}
        <div className="xl:flex justify-between mb-5 xl:space-x-24 space-x-5 space-y-5 xl:space-y-0">
          <div>
            <h2 className="text-3xl mb-5">milk latte series</h2>
            <div className="space-y-4 font-sans">
              <div className="flex space-x-3 sm:space-x-5">
                <p>red oolong latte</p>
                <p>alishan, taiwan</p>
                <i className="hidden sm:flex">bold, rich, notes of honey</i>
              </div>
            </div>
          </div>
          <div className="flex space-x-5">
            {/* Images */}
            <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/f8f7a239-e80d-46c0-9157-36b24490e6ec" alt="" />
            <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/6c0b8065-75f0-4f5b-bffd-cfdff7872f39" alt="" />
          </div>
        </div>
      </div>
      
  );
}