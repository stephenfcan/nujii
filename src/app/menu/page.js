import Image from "next/image";

export default function MenuPage() {
  return (
    <div className="bg-white text-[#1a7533] flex flex-col justify-center min-h-screen p-8 pb-20 gap-4 sm:p-20 pt-20 sm:pt-0 -mt-14">
      <h1 className="font-Mirage text-5xl sm:mt-20 xl:mt-30 pb-3">menu</h1>
      <i className="font-sans max-w-xl pb-3 xl:mb-10">
        all drinks are made with housemade syrups and come with oat milk
      </i>
        {/* matcha */}
        {/* <div className="xl:flex justify-between mb-5 xl:space-x-5 space-x-5 space-y-5 xl:space-y-0">
          <div>
            <h2 className="text-3xl mb-5">matcha series</h2>
            <div className="space-y-4 font-sans xl:w-150">
              <div className="flex space-x-3 sm:space-x-5">
                <p>jasmine green oolong milk tea</p>
                <p>nantou, taiwan</p>
                <i className="hidden sm:flex">bright, floral, notes of orchid</i>
              </div>
              <div className="flex space-x-3 sm:space-x-5">
                <p>osmanthus red oolong milk tea</p>
                <p>nantou, taiwan</p>
                <i className="hidden sm:flex">dark, floral, notes of honey and fruit</i>
              </div>
            </div>
          </div>
          <div className="flex space-x-5"> */}
            {/* Images */}
            {/* <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/877a79e2-7bcb-411a-b98c-95c2c846093c" alt="" />
            <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/a1b70973-c9fb-4dcc-b1f7-f31ff2968a33" alt="" />
          </div>
          </div> */}
        {/* premium teas */}
        {/* <div className="xl:flex justify-between mb-5 xl:space-x-22 space-x-5 space-y-5 xl:space-y-0">
          <div>
            <h2 className="text-3xl mb-5">premium fruit tea series</h2>
            <div className="space-y-4 font-sans">
              <div className="flex space-x-3 sm:space-x-5">
                <p>yuzu oolong tea</p>
                <p className="hidden sm:flex">green oolong tea + yuzu juice + simple syrup</p>
              </div>
              <div className="flex space-x-3 sm:space-x-5">
                <p>peach oolong tea</p>
                <p className="hidden sm:flex">green oolong tea + peach juice + simple syrup</p>
              </div>
              <div className="flex space-x-3 sm:space-x-5">
                <p>pear oolong tea</p>
                <p className="hidden sm:flex">green oolong tea + pear juice + simple syrup</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-5"> */}
            {/* Images */}
            {/* <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/78b0e7ff-0d10-458d-963b-79a82ddcbbd2" alt="" />
            <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://github.com/user-attachments/assets/28b5b4b5-c33b-48f9-81b0-0309790c6fb6" alt="" />
          </div>
        </div> */}
        {/* matcha series */}
        <div className="xl:flex justify-between mb-5 xl:space-x-5 space-x-5 space-y-5 xl:space-y-0">
          <div>
            <h2 className="text-3xl mb-5">matcha series</h2>
            <div className="space-y-4 font-sans xl:w-150">
              <div className="flex space-x-3 sm:space-x-5">
                <b>strawberry matcha latte</b>
                <p>first flush matcha, oat milk, strawberry syrup</p>
              </div>
              <div className="flex space-x-3 sm:space-x-5">
                <b>osmanthus matcha latte</b>
                <p>first flush matcha, oat milk, osmanthus syrup</p>
              </div>
              <div className="flex space-x-3 sm:space-x-5">
                <b>brown sugar maple matcha latte</b>
                <p>first flush matcha, oat milk, brown sugar maple syrup</p>
              </div>
              <div className="flex space-x-3 sm:space-x-5">
                <b>earl grey matcha latte</b>
                <p>first flush matcha, oat milk, earl grey syrup</p>
              </div>
              <div className="flex space-x-3 sm:space-x-5">
                <b>tokyo fog</b>
                <p>first flush matcha, oat milk, earl grey syrup, cream top</p>
              </div>
              <div className="flex space-x-3 sm:space-x-5">
                <b>coconut matcha</b>
                <p>first flush matcha, coconut water, cream top</p>
              </div>
              <div className="flex space-x-3 sm:space-x-5">
                <b>sparkling strawberry yuzu matcha</b>
                <p>first flush matcha, yuzu strawberry syrup, sparkling water</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-5">
            {/* Images */}
            <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://private-user-images.githubusercontent.com/84104582/662820189-553c9666-0a9d-4cbf-9e3f-09381ad0c557.jpeg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTA4MzYzMDMsIm5iZiI6MTc5MDgzNjAwMywicGF0aCI6Ii84NDEwNDU4Mi82NjI4MjAxODktNTUzYzk2NjYtMGE5ZC00Y2JmLTllM2YtMDkzODFhZDBjNTU3LmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYxMDAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MTAwMVQwNjI2NDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lMzI5MDJmZjZhZjJkNzQ2YzVhMzViNzU5M2VhYTdjNDBjNTAzYjM2NTc0NWVhOTI2NjA4ZDZjZWJjYzAyZTk1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZqcGVnIn0.ZPvtnbSetlrr-A-j9SlMCvSzqQ-Rf55Fn2M8viddf6c" alt="" />
            <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://private-user-images.githubusercontent.com/84104582/662819692-c399e5f7-9119-4605-9210-8c006dd839e7.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTA4MzYzMDMsIm5iZiI6MTc5MDgzNjAwMywicGF0aCI6Ii84NDEwNDU4Mi82NjI4MTk2OTItYzM5OWU1ZjctOTExOS00NjA1LTkyMTAtOGMwMDZkZDgzOWU3LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjEwMDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYxMDAxVDA2MjY0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk5NDdiZDBkMmEwM2FjMWFjMzhkMGNiMWE3ZmUxMTEyYjgxYWE2YjkyZjgxZGQyOTgwZTRkMGZkMzY3MDQ0YTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRmpwZWcifQ.gtrSpwdJb04ul2SRBIemW5szBRHG-oJMNKjAAcZd7xc" alt="" />
          </div>
        </div>
      </div>
      
  );
}