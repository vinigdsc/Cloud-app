import React from "react";

import { CheckIcon } from "@heroicons/react/24/solid";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full bg-slate-900 text-white ">
      <div className="w-full "></div>
      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">
            The Right price for your research
          </h3>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
            quos. Eos, beatae inventore illo debitis optio exercitationem
            provident consequatur eligendi animi voluptas unde eum aut nobis
            nisi quae dignissimos fuga.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Standard
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $49
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /month
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Lorem, ipsum.askodasok
            </p>
            <div className="text-2xl ">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <button className="w-full py-4 my-4">Começar</button>
            </div>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              PREMIUM
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $99
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /month
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Lorem, ipsum.askodasok
            </p>
            <div className="text-2xl ">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <button className="w-full py-4 my-4">Começar</button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-y border-b-3 border-gray-600 max-w-[1240px] mx-auto"></div>
    </div>
  );
};

export default Pricing;
