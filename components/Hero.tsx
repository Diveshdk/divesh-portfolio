import React from 'react'
import { Spotlight } from './ui/Spotlight'
import {TextGenerateEffect} from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import Socialmedia from './Socialmedia'


const Hero = () => {
  return (
    <div className="pb-20 pt-24">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top20 h-screen" fill="white"/>
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]"fill="purple"/>
            <Spotlight className="top-28 left-80 h-[80vh] s-[50vw]" fill="blue"/>
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>

    </div>

    <div className = "flex justify-center relative my-20 z-10">
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercae tracking-widest text-xs text-center text-blue-100 max-2-80'>
              Personal Portfolio
            </h2>
            <TextGenerateEffect 
            className="text-center text-[40px]
            md:text-5xl lg:text-6xl"
            words="Hi I am Divesh Kankani Full Stack Developer"/>
            <br />
            <p className='text-center'>I love Chai more than coding but I am Tech Enthusiastic and Active Learner. I am pursuing Bachelor Of Engineering in Computer Science and will be graduated by 2026. I've created various projects in web development using MERN Stack and NextJS like Chat Application or News App and many more including web3,Blockchain and AI based projects. Graphic Designer not by choice but by skills. Love making memes and editing videos.Can manage events in ReactJS and real life.If you already here, Lets exchange some tech ideas?!</p>
            <br /><a href="/DiveshResume.pdf">
              <MagicButton
              title="Resume"
              icon={<FaLocationArrow/>}
              position='right'/>
            </a><br />
          </div>
          </div>
    </div>
  )
}

export default Hero