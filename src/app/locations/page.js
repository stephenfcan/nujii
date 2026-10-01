export default function LocationsPage() {
  return (
    <div className="bg-white text-[#1a7533] p-8 pb-20 gap-4 sm:p-20 -mt-14">
      <div className="flex flex-col items-center justify-center min-h-screen -mt-20">
        <h1 className="font-Mirage text-5xl mb-10">find us</h1>
        <div className="flex flex-col space-y-5 md:flex-row md:space-x-10">
            <div>
              <b className="font-sans text-md max-w-xl">
                Union Fare
              </b>
              <p className="font-sans text-md max-w-xl">
                169 W Washington St
              </p>
              <p className="font-sans text-md max-w-xl">
                Athens, GA
              </p>
            </div>
            <div>
              <p className="font-sans text-md max-w-xl">
                Hours:
              </p>
              <p className="font-sans text-md max-w-xl">
                M-F: 3-9pm
              </p>
              <p className="font-sans text-md max-w-xl">
                Saturday: 11-6pm
              </p>
              <p className="font-sans text-md max-w-xl">
                Sunday: 3-9pm
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}