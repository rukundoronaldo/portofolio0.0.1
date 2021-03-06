import React from 'react'
import ronaldo from './ronaldo.jpg'
import linkd from './linkedin-icon.svg'
import {CopyToClipboard} from 'react-copy-to-clipboard';

function About() {
    return (
  <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0 ">
    
	<div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl  mx-6 lg:mx-0 bg-gray-100">
	

		<div class="p-4 md:p-12 text-center lg:text-left">
			<div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" 
                style={{ 
                    backgroundImage: `url(${ronaldo})` 
                }}
             >
            </div>
			
			<h1 class="text-3xl text-black font-bold pt-8 lg:pt-0">Rukundo Ronaldo</h1>
			<div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-black opacity-25"></div>
			
			<p class="pt-8 text-black">
				Hi, as you can see I am a front developper. I have just finished my first year as an Epitech student and I currently  looking for un internship to gain profession experience.
			</p>


			<div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
			<CopyToClipboard text="https://github.com/rukundoronaldo">
				<a href="https://github.com/rukundoronaldo" class="link"  data-tippy-content="@github_handle"><svg class="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
			</CopyToClipboard>
				
				
				<CopyToClipboard text="https://www.linkedin.com/in/rukundo-ronaldo-7a62b6168/">
				<a  href="https://www.linkedin.com/in/rukundo-ronaldo-7a62b6168/" class="link"  data-tippy-content="@youtube_handle"><img class="h-6 fill-current text-gray-600 hover:text-green-700" src={linkd} /></a>
				</CopyToClipboard>
			</div>
			

		</div>

	</div>
	
	<div class="w-full lg:w-2/5">
		<img src={ronaldo} class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"/>
		
	</div>
	

</div>
    )
}

export default About
