export default function PopupsPage() {
  return (
    <div className="bg-white text-[#1a7533] p-8 pb-20 gap-4 sm:p-20 -mt-14">
      <div className="flex flex-col items-center justify-center min-h-screen -mt-20">
        <h1 className="font-Mirage text-5xl mb-12">upcoming pop-ups</h1>
        <div className="flex flex-col space-y-5 md:flex-row md:space-x-10">
            {/* <p className="font-sans text-md max-w-xl">Stay tuned!</p> */}
            <div>
              <p className="font-sans text-md max-w-xl">
                Private Tea Tasting
              </p>
              <p className="font-sans text-md max-w-xl">
                January 18, 1-3pm MST
              </p>
              <i className="font-sans text-md max-w-xl">
                Private Location
              </i>
            </div>
            <div>
              <p className="font-sans text-md max-w-xl">
                Lunar New Year Pop-Up
              </p>
              <p className="font-sans text-md max-w-xl">
                February 15, 12-6pm MST
              </p>
              <i className="font-sans text-md max-w-xl">
                Stampede, CO
              </i>
            </div>
        </div>
      </div>
    </div>
  );
}