import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white text-[#1a7533] flex flex-col justify-center min-h-screen p-8 pb-20 gap-4 sm:p-20 pt-20 sm:pt-0 -mt-14">
      <h1 className="font-Mirage text-5xl sm:mt-20 xl:mt-30 pb-3 xl:mb-10">about nujii</h1>
        {/* mission */}
        <div className="xl:flex justify-between mb-5 xl:space-x-29 space-x-5 space-y-5 xl:space-y-0">
          <div>
            <h2 className="text-3xl mb-5">our mission</h2>
            <div className="space-y-4 font-sans">
              <p className="xl:w-150">nujii is a craft tea company — born in Denver, Colorado and now rooted in Athens, Georgia. Our mission is to bring a little joy to your day through specialty beverages made with only the highest-quality ingredients. We make <i>almost</i> everything in-house — tea bases, syrups, cremes and toppings — because it&apos;s the only way to ensure every drink meets our standards. It&apos;s also why our menu stays small and rotates often.</p>
              <p className="xl:w-150">We&apos;re obsessed with the quality of ingredients that go into every cup, but ultimately it&apos;s the end result that counts. If you&apos;ll grant us the opportunity to be a little snobby, you can learn more about what sets our products apart: <Link href="/thenujiidifference"><b>The nujii Difference</b></Link></p>
              <p className="xl:w-150">And while having great drinks is one thing, we know that where and who you choose to enjoy your drink with is just as important. That&apos;s why we&apos;re striving to build an active community here — beyond the typical percentage nights, we&apos;ve got a full lineup of events we&apos;ll be announcing very soon.</p>
            </div>
          </div>
          <div className="flex space-x-5">
            {/* Images */}
            <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/877a79e2-7bcb-411a-b98c-95c2c846093c" alt="" />
            <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/a1b70973-c9fb-4dcc-b1f7-f31ff2968a33" alt="" />
          </div>
          </div>
        {/* story */}
        <div className="xl:flex justify-between mb-5 xl:space-x-22 space-x-5 space-y-5 xl:space-y-0">
          <div>
            <h2 className="text-3xl mb-5">our story</h2>
            <div className="space-y-4 font-sans">
              <p className="xl:w-150">nujii is the passion project of a couple of UGA alums. As undergrads, they realized there wasn't a premium, beverage-forward option for milk teas and matcha in Athens. 4 years later, and while the number of options grew, the quality bar hadn&apos;t, so they decided to raise it themselves.</p>
            </div>
          </div>
          <div className="flex space-x-5">
            {/* Images */}
            <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/78b0e7ff-0d10-458d-963b-79a82ddcbbd2" alt="" />
            <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/28b5b4b5-c33b-48f9-81b0-0309790c6fb6" alt="" />
          </div>
        </div>
      </div>
      
  );
}