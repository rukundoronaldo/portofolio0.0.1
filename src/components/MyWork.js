import React from 'react'
import Projects from './Projects';

function MyWork() {
    return (
        <div>
		<div class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			<section class="w-full">
				<h2 id="work" class="secondary-title">My work</h2>
				<p class="section-paragraph">I’ve had the pleasure of working with multiple Fortune 500 companies, designing and implementing both frontend and backend.</p>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">

                <Projects 
				img={"https://c.tenor.com/zQ6H2k7HwGcAAAAC/netflix-netflix-logo.gif"}
				title={"netflix clone"}
				text={"this is a netflix clone buil with reactjs, firebase authentification, axios , redux and reacthooks"}
				visit={"https://netfix-clone-bdf6d.web.app/"}
				>
				<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#react</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#firebase</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#redux</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#axios</span>
				</Projects>
                <Projects 
				img={"https://media2.giphy.com/media/RsWTBRWrA071LXNMXM/giphy.gif?cid=ecf05e47vodhiefmy3dmhjadij0r6i2454ydqkkmi9pzf6t8&rid=giphy.gif&ct=g"} 
				title={"color flipper"}
				text={"color flipper templete built with html, css and vanille javascript"}
				visit={"https://radom-color.netlify.app/"}
				>
					<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#html</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#css</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#vanilla javascript</span>
				</Projects>
                <Projects 
				img={"https://i0.wp.com/codemyui.com/wp-content/uploads/2015/05/scroll-icon-animation.gif?fit=880%2C440&ssl=1"} 
					title={"scroll site"}
					text={"templete with coll scroll effet built with html, css and vanille javascript"}
				visit={"https://scrol.netlify.app/"}
				>
										<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#html</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#css</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#vanilla javascript</span>
				</Projects>
				</div>
			</section>
		</div>
        </div>
    )
}

export default MyWork
