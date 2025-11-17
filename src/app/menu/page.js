import Image from "next/image";

export default function MenuPage() {
  return (
    <div className="bg-white text-[#1a7533] flex flex-col justify-end min-h-screen p-8 pb-20 gap-4 sm:p-20 pt-20 sm:pt-0 -mt-14">
      <h1 className="font-Mirage text-5xl sm:mt-20 mt-5 pb-3">menu</h1>
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
          <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://private-user-images.githubusercontent.com/84104582/515399615-877a79e2-7bcb-411a-b98c-95c2c846093c.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM0MTUzMTAsIm5iZiI6MTc2MzQxNTAxMCwicGF0aCI6Ii84NDEwNDU4Mi81MTUzOTk2MTUtODc3YTc5ZTItN2JjYi00MTFhLWI5OGMtOTVjMmM4NDYwOTNjLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTExMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMTE3VDIxMzAxMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZmODExM2E5OTgwZDIzMjdiZDU1ZWVhYzg0NWEwMTBjNTk2YzQ4NTgzOGFlYTFhYzI4NTgwODYxZDdhZTE0MGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.KUi2QiX7E32igRTWYbE8Jzg4J7YxorxPdlWAGmPcppQ" alt="" />
          <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://private-user-images.githubusercontent.com/84104582/515399623-28b5b4b5-c33b-48f9-81b0-0309790c6fb6.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM0MTUzMTAsIm5iZiI6MTc2MzQxNTAxMCwicGF0aCI6Ii84NDEwNDU4Mi81MTUzOTk2MjMtMjhiNWI0YjUtYzMzYi00OGY5LTgxYjAtMDMwOTc5MGM2ZmI2LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTExMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMTE3VDIxMzAxMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFiNDg2YzAyYTRlMjM5ZmFlODYyNzczOWJiODAxYzUyMmVkZDNlMGQ4YjQzZTI4NmViODhiYjdmYTkyMDkzZWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.0PGXuCynB4b44qIA9kMPOmYar0tuDog3BQXJ4fN9Cxg" alt="" />
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
          <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://private-user-images.githubusercontent.com/84104582/515399633-f8f7a239-e80d-46c0-9157-36b24490e6ec.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM0MTUzMTAsIm5iZiI6MTc2MzQxNTAxMCwicGF0aCI6Ii84NDEwNDU4Mi81MTUzOTk2MzMtZjhmN2EyMzktZTgwZC00NmMwLTkxNTctMzZiMjQ0OTBlNmVjLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTExMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMTE3VDIxMzAxMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTI2OTA1NzM4NWQyNTJhZDY2MDZlMDc1NWU3YzA3MzlkODNlYzdmNGJlZmFkNjkxNDI4Y2Q5NWFlYzgxNTU5MTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.9dOexM_3dsQeZYq4GbefWCLUYdW3ax-V5W8xmuAs4CY" alt="" />
          <img className='h-30 w-30 object-contain md:h-60 md:w-60' src="https://private-user-images.githubusercontent.com/84104582/515399626-6c0b8065-75f0-4f5b-bffd-cfdff7872f39.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM0MTUzMTAsIm5iZiI6MTc2MzQxNTAxMCwicGF0aCI6Ii84NDEwNDU4Mi81MTUzOTk2MjYtNmMwYjgwNjUtNzVmMC00ZjViLWJmZmQtY2ZkZmY3ODcyZjM5LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTExMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMTE3VDIxMzAxMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThmM2NlOGQxY2IzMzBmMTAzZDQ0MjIzNGU5MTg5ZDA4Y2FmMzE4NzhiYTk1ZDQ1NmU3YmY4NGE2OTA4YzIzMDkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.K8HUiRDhMPs8cGbFZi-TyA4ZNzMzUqjD8672WoH4atU" alt="" />
        </div>
      </div>
    </div>
  );
}