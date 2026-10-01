import Image from "next/image";
import Link from "next/link";

export default function TheNujiiDifferencePage() {
  return (
    <div className="bg-white text-[#1a7533] flex flex-col justify-center min-h-screen p-8 pb-20 gap-4 sm:p-20 pt-20 sm:pt-0 -mt-14">
      <h1 className="font-Mirage text-5xl sm:mt-20 xl:mt-30 pb-3 xl:mb-10">the nujii difference</h1>
        {/* ingredients */}
        <div className="xl:flex justify-between mb-5 xl:space-x-20 space-x-5 space-y-5 xl:space-y-0">
          <div>
            <h2 className="text-3xl mb-5">it starts with the leaf</h2>
            <div className="space-y-4 font-sans">
              <p className="xl:w-150">The most important factor in making great tea is the quality of the tea itself — even poorly prepared good quality tea will taste better than well-prepared lower quality tea. That&apos;s why we source directly from the farmers who grow it — no middlemen, no mystery blends.</p>
              <p className="xl:w-150">We only use whole, loose-leaf tea — never the shredded fannings and dust that most shops brew with and definitely not the flavored powders used by others. Cheaper tea lacks the depth found in that of high-quality tea and because the texture is almost dust-like, steep times are impossible to control — resulting in harsh flavors and muddy tea. Whole leaves take longer to bloom but as a consequence, the flavor is brighter, cleaner, and maintains the full range of flavor notes.</p>
              <p className="xl:w-150">Our oolong tea comes from the high mountain regions of Nantou, Taiwan, widely considered the best in the world. It&apos;s picked and processed by hand, grown without pesticides, and produces a naturally aromatic and creamy flavor that comes from the cool, mountainous air. The cultivar we use is actually so coveted that many vendors fake it — cheaper tea propped up with artificial dairy flavoring. For us, we&apos;d rather just use the real thing.</p>
              <p className="xl:w-150">While our matcha is ceremonial-grade, that&apos;s not the part we&apos;d anchor on. What actually matters is that ours is single-origin and single-cultivar: Saemidori, grown in Kagoshima, Japan. Prized for its smooth, mellow sweetness and deep green color, Saemidori only accounts for roughly 2 to 4 percent of all the tea grown in Japan. It&apos;s some of the best you can put in a cup.</p>
            </div>
          </div>
          <div className="flex space-x-5">
            {/* Images */}
            <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/877a79e2-7bcb-411a-b98c-95c2c846093c" alt="" />
            <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/a1b70973-c9fb-4dcc-b1f7-f31ff2968a33" alt="" />
          </div>
          </div>
        {/* making */}
        <div className="xl:flex justify-between mb-5 xl:space-x-20 space-x-5 space-y-5 xl:space-y-0">
          <div>
            <h2 className="text-3xl mb-5">made fresh — almost all of it in-house</h2>
            <div className="space-y-4 font-sans">
              <p className="xl:w-150">In addition to using premium ingredients, we care a whole lot about how we make our craft products. Our matcha is whisked to order, ensuring maximum aromatics and a smooth, creamy mouthfeel. We simmer every one of our syrups from raw ingredients — our Earl Grey syrup gets its flavor from real bergamot steeped into our own red oolong. Our cremes are whisked fresh every morning. We brew our teas right before each service, using whole tea leaves and real jasmine and osmanthus flowers — we wish you could smell the shop when we do. Our tea jelly is made in-house, set with freshly squeezed yuzu. And our boba is cooked in small batches throughout the day to deliver the iconic soft, chewy texture.</p>
              <p className="xl:w-150">None of this is the cheap or easy way to run a beverage truck. But it&apos;s the only way to make the drinks we&apos;re proud to serve.</p>
            </div>
          </div>
          <div className="flex space-x-5">
            {/* Images */}
            <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://raw.githubusercontent.com/stephenfcan/nujii/refs/heads/main/public/images/popup%20group.jpg" alt="" />
            <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://raw.githubusercontent.com/stephenfcan/nujii/refs/heads/main/public/images/popup%20ella.jpg" alt="" />
          </div>
        </div>
      </div>
      
  );
}