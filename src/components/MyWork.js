import React from 'react'
import Projects from './Projects';
import ProjectsC from './ProjectConatainer';
import './MyWork.css';


function MyWork() {
    return (
        <div>
		<div className="container mt-80 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			<section className="w-full">
				<h2 id="work" className="secondary-title">My work</h2>
				<p className="section-paragraph">I have been learn javascript and react for 3 month i finishe my first year at epitech. i have been doing some projects.</p>

					  <div class="flex flex-col bg-black m-auto p-auto mt-20">
								<div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
									<div
									class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
									>
									<div class="inline-block px-3">
										<div class="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" 
										>
											<ProjectsC
												img={"https://i0.wp.com/codemyui.com/wp-content/uploads/2015/05/scroll-icon-animation.gif?fit=880%2C440&ssl=1"} 
												title={"scroll site"}
												text={"templete with coll scroll effet built with html, css and vanille javascript"}
												visit={"https://scrol.netlify.app/"}
					  						/>
										</div>
										
									</div>
									<div class="inline-block px-3">
										<div class="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" 
										>
											<ProjectsC
												img={"https://media2.giphy.com/media/RsWTBRWrA071LXNMXM/giphy.gif?cid=ecf05e47vodhiefmy3dmhjadij0r6i2454ydqkkmi9pzf6t8&rid=giphy.gif&ct=g"} 
												title={"color flipper"}
												text={"color flipper templete built with html, css and vanille javascript"}
												visit={"https://radom-color.netlify.app/"}
					  						/>
										</div>
										
									</div>
									<div class="inline-block px-3">
										<div class="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" 
										>
											<ProjectsC
												img={"https://c.tenor.com/zQ6H2k7HwGcAAAAC/netflix-netflix-logo.gif"}
												title={"netflix clone"}
												text={"this is a netflix clone buil with reactjs, firebase authentification, axios , redux and reacthooks"}
												visit={"https://netfix-clone-bdf6d.web.app/"}
												git={"https://github.com/rukundoronaldo/NetflixClone"}
					  						/>
										</div>
										
									</div>
									</div>
								</div>
							</div>
			</section>
		</div>
        </div>
    )
}

export default MyWork