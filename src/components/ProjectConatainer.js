import React from 'react'
import './MyWork.css';
import { AiFillGithub } from 'react-icons/ai';


function ProjectConatainer({title, text, img, visit,git}) {
    return (
        <div style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          borderRadius:'8px',
          backgroundPosition:'center'
        }}>

        <div class="w-96 h-96  juice relative  rounded-xl bg-black-lite bg-cover p-8 ">
          <p class=" text-white text-3xl  font-semibold">{title}</p>
          <p class="max-w-xs pr-10 text-white font-semibold mt-8">{text}</p>
         
            <h4 class=" mt-100 font-semibold">Technologie</h4>
          <div class=" flex space-between">
            <a>roro</a>
            <a>roro</a>
            <a>roro</a>
          </div>
          <a href={visit}>
          <button class="mt-10 bg-white text-black font-semibold px-8 py-2 rounded ">visit</button>
          </a>
          
          
          <div class=" absolute bottom-0 right-16">
            <a href={git} className="text-4xl">
              <AiFillGithub />
              </a>
          </div>
        </div>
        
       
        </div>
    )
}

export default ProjectConatainer
