"use client";
import { ReactNode, useState } from "react";

export default function CodeBlock({
  options = [],
  children,
}: {
  options: string[];
  children: ReactNode;
}) {
  const [code, setCode] = useState(Array.isArray(children) && children[0]);
  const random = (Math.random() + 1).toString(36).substring(7);
  const navigation = options.map((item, index) => (
    <div key={index} className="flex">
      <input
        defaultChecked={index == 0}
        type="radio"
        id={random + item}
        name={random}
        className="peer hidden"
        onChange={() => setCode(Array.isArray(children) && children[index])}
      />
      <label
        htmlFor={random + item}
        className=" peer-checked:after:block relative after:hidden after:absolute after:left-0 after:-bottom-2 after:content-[''] after:w-full after:h-[2px] after:bg-slate-900 dark:after:bg-white peer-checked:font-semibold"
      >
        {item}
      </label>
    </div>
  ));

  return (
    <div>
      <div className="flex gap-3 p-2 border-b border-b-slate-600">
        {navigation}
      </div>
      {code}
    </div>
  );
}
