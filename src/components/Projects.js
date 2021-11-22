import React from 'react'

function Projects(props) {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 border-white border-2">
            <img class="w-full border-white h-60" src={props.img} alt="Sunset in the mountains"/>
            <div class="px-6 py-4">
                <div class="font-bold text-black mb-2">{props.title}</div>
                <p class="text-gray-700 text-base">
                    {props.text}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                {props.children}
         </div>
         <a href={props.visit} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            visit
        </a>
        </div>
    )
}

export default Projects
