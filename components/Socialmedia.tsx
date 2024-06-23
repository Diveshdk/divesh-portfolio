import { socialMedia } from '@/data'
import React from 'react'

const Socialmedia = () => {
  return (
    <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link}><img src={info.img} alt="icons" width={20} height={20}/></a>
            </div>
          ))}
        </div>
  )
}

export default Socialmedia