import React, { useState } from 'react'

import { DiHtml5, DiCss3, DiJavascript, DiPhp, DiPython } from "react-icons/di";


import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const CardProfile = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="card  mx-4 my-4 bg-base-100 lg:max-h-96 drop-shadow-2xl">
    <figure><img src="/images/dev.jpg" alt="Shoes" /></figure>
    <div className="card-body">
        <div className='flex justify-between items-center'>
            <div>
                <div className='flex items-center justify-center gap-2'>
                    <h2 className="card-title">Experiencia:</h2><p>Doctor </p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <h2 className="card-title">Precio:</h2> <p>$5</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-2 cursor-pointer'>

                {isFavorite ? (
                    <AiFillHeart className='text-5xl text-red-500 w-10' onClick={() => setIsFavorite(!isFavorite)} />
                ) : (
                    <AiOutlineHeart className='text-5xl text-gray-500 w-10' onClick={() => setIsFavorite(!isFavorite)} />
                )}
                
            </div>
        </div>
        <div className='flex'>
            <DiHtml5 className='text-5xl text-red-500 w-10' />
            <DiCss3 className='text-5xl text-blue-500 w-10' />
            <DiJavascript className='text-5xl text-yellow-500 w-10' />
            <DiPhp className='text-5xl text-blue-500 w-10' />
            <DiPython className='text-5xl text-yellow-500 w-10' />
        </div>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}

        <div className="card-actions justify-end">
        <button className="btn btn-primary">Agendar Cita</button>
        </div>
    </div>
    </div>
  )
}

export default CardProfile