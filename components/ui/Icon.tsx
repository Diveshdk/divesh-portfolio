

import React from 'react'

export default function Button({
    icon, handleClick, otherClasses
}:{
    icon: React.ReactNode;handleClick?:()=> void; otherClasses?:string;
}) {
  return (
    <button className="relative inline-flex h-full w-20 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-20 md:mt-10">
  <span className={` .absolute inline-flex h-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
  {icon}
  </span>
</button>
  )
}
