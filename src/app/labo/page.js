export default function LaboPage() {
  return (
    <div className="bg-white text-[#1a7533] flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-4 sm:p-20 pt-20 sm:pt-0 -mt-14">
      <h1 className="font-Mirage text-5xl pb-3">nujii labo</h1>
      <i className="font-sans text-center max-w-3xl pb-3">
        where tradition meets innovation 
      </i>
      <p className="font-sans text-center max-w-3xl">
        labo is the experimental division of nujii — a playground for our brewers to showcase the boundaries of what tea can be.
      </p>
      <br />
      <p className="font-sans max-w-3xl">
        through nujii labo, we explore:
      </p>
      <ul className="font-sans max-w-3xl">
        <li>- small-batch origins: rare, seasonal harvests sourced directly from heritage farmers that are too limited for our permanent menu</li>
        <li>- botanical alchemy: experimental infusions using fruits like yuzu, dairy products, and house-made reductions</li>
        <li>- community co-creation: we don&apos;t just test recipes - we test them with you</li>
      </ul>
    </div>
  );
}