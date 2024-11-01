import React from 'react'
import { hightlightsSlides } from '../constants'

const Video = () => {
  return (
    <>
    <div className='flex items-center'>  
        {hightlightsSlides.map((list,i) => (
            <div key={list.id} id='slider' className='sm:pr-20 pr-10'>
                <div className='Video_conatainer'>
                    <div className='w-full h-full items-center rounded-3xl overflow-hidden bg-black'>
                        <video
                        id='video'
                        playsInline={true}
                        preload='auto'
                        muted
                        >
                            <source src={list.video} type='video/mp4'/>
                        </video>
                    </div>
                    <div className='absolute top-12 left-[5%] z-10'>
                        {list.textLists.map((text)=>{
                            <p id={text} className='md:text-2xl text-xl font-medium'>
                                {text}
                            </p>
                        })}
                    </div>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Video