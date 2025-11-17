import Image from "next/image";

export default function MenuPage() {
  return (
    <div className="bg-white text-[#1a7533] flex flex-col justify-end min-h-screen p-8 pb-20 gap-4 sm:p-20 pt-20 sm:pt-0 -mt-14">
      <h1 className="font-Mirage text-5xl mt-20 pb-3">menu</h1>
      <i className="font-sans max-w-xl pb-3">
        our menu varies each season to highlight the freshest harvests from our partners
      </i>
      {/* classic teas */}
      <div className="xl:flex justify-between mb-5 space-x-5 space-y-5 xl:space-y-0">
        <div>
          <h2 className="text-3xl mb-5">classic teas</h2>
          <div className="space-y-4 font-sans">
            <div className="flex space-x-3 sm:space-x-5">
              <p>green tea</p>
              <p>moganshan mountain, china</p>
              <p className="invisible sm:visible">2024 harvest</p>
              <i className="invisible sm:visible">light, sweet, crisp</i>
            </div>
            <div className="flex space-x-3 sm:space-x-5">
              <p>rose red tea</p>
              <p>yunnan, taiwan</p>
              <p className="invisible sm:visible">2022 harvest</p>
              <i className="invisible sm:visible">bold, fruity</i>
            </div>
            <div className="flex space-x-3 sm:space-x-5">
              <p>red tea</p>
              <p>nantou, taiwan</p>
              <p className="invisible sm:visible">2025 harvest</p>
              <i className="invisible sm:visible">malty with a hint of cinnamon</i>
            </div>
            <div className="flex space-x-3 sm:space-x-5">
              <p>oolong tea</p>
              <p>alishan mountain, taiwan</p>
              <p className="invisible sm:visible">2024 harvest</p>
              <i className="invisible sm:visible">light, sweet, crisp</i>
            </div>
            <div className="flex space-x-3 sm:space-x-5">
              <p>oolong tea</p>
              <p>fujian, china</p>
              <p className="invisible sm:visible">2025 harvest</p>
              <i className="invisible sm:visible">bold, fruity</i>
            </div>
          </div>
        </div>
        <div className="flex space-x-5">
          {/* Images */}
          <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/028f014c-a701-4752-ad1e-b051393c648e" alt="" />
          <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/7448b158-c20e-47ef-aed7-9755bba0fa5b" alt="" />
        </div>
      </div>
      {/* milk teas */}
      <div className="xl:flex justify-between mb-5 space-x-5 space-y-5 xl:space-y-0">
        <div>
          <h2 className="text-3xl mb-5">milk teas</h2>
          <div className="space-y-4 font-sans">
            <div className="flex space-x-3 sm:space-x-5">
              <p>green tea</p>
              <p>moganshan mountain, china</p>
              <p className="invisible sm:visible">2024 harvest</p>
              <i className="invisible sm:visible">light, sweet, crisp</i>
            </div>
            <div className="flex space-x-3 sm:space-x-5">
              <p>jasmine green tea</p>
              <p>sanjiang, china</p>
              <p className="invisible sm:visible">2024 harvest</p>
              <i className="invisible sm:visible">bright, floral, crisp</i>
            </div>
            <div className="flex space-x-3 sm:space-x-5">
              <p>rose red tea</p>
              <p>yunnan, taiwan</p>
              <p className="invisible sm:visible">2022 harvest</p>
              <i className="invisible sm:visible">bold, fruity</i>
            </div>
            <div className="flex space-x-3 sm:space-x-5">
              <p>oolong tea</p>
              <p>alishan mountain, taiwan</p>
              <p className="invisible sm:visible">2024 harvest</p>
              <i className="invisible sm:visible">light, sweet, crisp</i>
            </div>
          </div>
        </div>
        <div className="flex space-x-5">
          {/* Images */}
          <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/e0431654-b390-483d-a06c-1adec2940674" alt="" />
          <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/5b66fd89-d43a-473e-bef3-2d8260726303" alt="" />
        </div>
      </div>
    </div>
  );
}