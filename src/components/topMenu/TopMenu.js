import React from 'react'
import "./_topmenu.scss"

const TopMenu = () => {
  return (
		<>
			<header>
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-12 col-lg-12">
							<nav className='menubar'>
								<ul className='menu__list'>
									<li>
										<a href="#">Home</a>
									</li>
									<li>
										<a href="#">MEN</a>
									</li>
									<li>
										<a href="#">WOMEN</a>
									</li>
									<li>
										<a href="#">KIDS</a>
									</li>
									<li>
										<a href="#">POPULAR</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default TopMenu