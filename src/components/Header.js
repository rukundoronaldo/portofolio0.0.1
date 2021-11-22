import React, {useState} from 'react'
import { Link } from 'react-scroll'

function Header() {
    const [showNav, setShowNav] = useState(true)
    const [hide, setHide] = useState("hidden")

    const show = () => {
        setShowNav(pre => !pre)
    }
    console.log(showNav)
    return (
        <nav class="flex items-center justify-between flex-wrap         bg-teal-500 p-6">
          <div class="flex items-center flex-shrink-0 text-white mr-6       text-lg font-bold">
                Rukundo Ronaldo
          </div>
          <div class="block lg:hidden">
            <button onClick={show} class="flex items-center px-3 py-2 border rounded       text-teal-200 border-teal-400 hover:text-white      hover:border-white">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20"         xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0       6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div class={`${showNav? "sm:hidden":""} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
            <div class={`text-sm lg:flex-grow ${showNav? "":""} `}>
              <a href="#responsive-header" class="block mt-4        lg:inline-block lg:mt-0 text-teal-200 hover:text-white      mr-4">
                 <Link to="Home" spy={true} smooth={true} duration=     {500}>Home</Link>
              </a>
              <a href="#responsive-header" class="block mt-4        lg:inline-block lg:mt-0 text-teal-200 hover:text-white      mr-4">
               <Link to="MyWork" spy={true} smooth={true} duration=     {500}>My work</Link>
              </a>
              <a href="#responsive-header" class="block mt-4        lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                <Link to="About" spy={true} smooth={true} duration=     {500}>About</Link>
              </a>
            </div>
            <div>
              <a href="#" class={`inline-block text-sm leading-none  rounded text-white   mt-4 lg:mt-0 `}>
                  <Link to="Hire" spy={true} smooth={true} duration=        {500}>
                    <button className="px-6 py-2 bg-theme       font-bold">Hire me</button>
                </Link>
              </a>
            </div>
          </div>
        </nav>
    )
}

export default Header
