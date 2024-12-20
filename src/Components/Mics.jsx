import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Mics = () => {
  return (
    <section className="py-16 w-full">
      <div className="container flex justify-center items-center">
        <article className="h-auto abi flex-col w-full p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between">
          <div className="flex flex-col gap-5">
            <h1 className=" token text-2xl font-Bungee tracking-wide">
              TOKENOMICS
            </h1>
            <p className="text-white text-xl font-Bungee leading-7 tracking-tight">
              Total Supply: 1,000,000 $FLOBYINU
            </p>

            <div className="py-10 flex flex-col gap-5 border-b">
              <h4 className="flex items-center gap-4">
                <AiOutlineCheck />
                Buy/Sell Tax: 7% tax applied to each transaction of $FLOBYINU.
              </h4>
              <h4 className="flex items-center gap-4">
                <AiOutlineCheck />
                Max Wallet: No Max Wallet
              </h4>
              <h4 className="flex items-center gap-4">
                <AiOutlineCheck />
                Max TXN: No Max Txn
              </h4>
            </div>

            {/* <div className="py-10 flex flex-col gap-5">
              <h4 className="flex items-center gap-4">
                <AiOutlineCheck />
                Buy/Sell Tax: 5% tax applied to each transaction of $LOOT
              </h4>
              <h4 className="flex items-center gap-4">
                <AiOutlineCheck />
                First 6 months: 1% for LP, 4% for team
              </h4>
              <h4 className="flex items-center gap-4">
                <AiOutlineCheck />
                After 6 months: 1% for LP, 2% for revenue sharing, 2% for team{" "}
              </h4>
            </div> */}
          </div>

          <div className="flex flex-col gap-12">
            <h1 className="text-zinc-300 text-2xl font-normal leading-[33.60px] tracking-wide">
              Tax Distribution 
            </h1>
            <div className="flex flex-col gap-6">
              <article className="flex flex-col gap-6">
                <h1 className="text-white text-2xl font-bold leading-[33.60px] tracking-wide">
                  25%
                </h1>
                <div className="w-full h-9 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="opacity-60 text-center text-white text-base font-normal leading-snug tracking-tight">
                    MARKETING (25%)
                  </div>
                  <div className="w-full h-1.5 bg-white rounded-full justify-start items-center inline-flex">
                    <div className="w-12 h-1.5 relative bg-orange-600 rounded-full" />
                  </div>
                </div>
              </article>
              <article className="flex flex-col gap-6">
                <h1 className="text-white text-2xl font-bold leading-[33.60px] tracking-wide">
                  25%
                </h1>
                <div className="w-full h-9 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="opacity-60 text-center text-white text-base font-normal leading-snug tracking-tight">
                    Liquidity Pool (25%)
                  </div>
                  <div className="w-full h-1.5 bg-white rounded-full justify-start items-center inline-flex">
                    <div className="w-12 h-1.5 relative bg-lime-500 rounded-full" />
                  </div>
                </div>
              </article>
              <article className="flex flex-col gap-6">
                <h1 className="text-white text-2xl font-bold leading-[33.60px] tracking-wide">
                  25%
                </h1>
                <div className="w-full h-9 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="opacity-60 text-center text-white text-base font-normal leading-snug tracking-tight">
                    BotMaintenance  & Rewards $Floki(25%)
                  </div>
                  <div className="w-full h-1.5 bg-white rounded-full justify-start items-center inline-flex">
                    <div className="w-12 h-1.5 relative bg-red-600 rounded-full" />
                  </div>
                </div>
              </article>
              <article className="flex flex-col gap-6">
                <h1 className="text-white text-2xl font-bold leading-[33.60px] tracking-wide">
                  25%
                </h1>
                <div className="w-full h-9 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="opacity-60 text-center text-white text-base font-normal leading-snug tracking-tight">
                    DevFee (25%)
                  </div>
                  <div className="w-full h-1.5 bg-white rounded-full justify-start items-center inline-flex">
                    <div className="w-12 h-1.5 relative bg-red-600 rounded-full" />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Mics;
