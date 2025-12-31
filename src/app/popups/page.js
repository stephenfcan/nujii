export default function PopupsPage() {
  return (
    <div className="bg-white text-[#1a7533] p-8 pb-20 gap-4 sm:p-20 -mt-14">
      <div className="flex flex-col items-center justify-center min-h-screen -mt-20">
        <h1 className="font-Mirage text-5xl">upcoming pop-ups</h1>
        <div className="flex flex-col space-y-5 mt-12">
            {/* <p className="font-sans text-md max-w-xl">Stay tuned!</p> */}
            <div>
              <p className="font-sans text-md max-w-xl">
                Private Tea Tasting
              </p>
              <p className="font-sans text-md max-w-xl">
                January 18, 1-3pm
              </p>
              <i className="font-sans text-md max-w-xl">
                Private Location
              </i>
            </div>
            {/* <div>
              <p className="font-sans text-md max-w-xl">
                2026 Lunar New Year on Havana Street
              </p>
              <p className="font-sans text-md max-w-xl">
                February 15, 12-6pm
              </p>
              <i className="font-sans text-md max-w-xl">
                The Stampede, Aurora
              </i>
            </div> */}
        </div>
      </div>
    </div>
  );
}