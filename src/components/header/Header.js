import React from 'react'
import "./_header.scss"

const Header = () => {
  return (
		<header className="header">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-2">
						<div className="header__logo">
							<font>Estore</font>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="input-group">
							<div className="input-group-prepend">
								<select
									name=""
									id=""
									className="form-select btn btn-success drop-downtoggle"
								>
									<option value="">All</option>
									<option value="">MEN</option>
									<option value="">WOMEN</option>
									<option value="">KIDS</option>
								</select>
							</div>
							<input type="text" className="form-control" />
							<div className="input-group-append">
								<button className="btn btn-success">
									<i className="fa fa-search"></i>
								</button>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="header__right">
							<div className="auth">
								<a href="#">SignIn</a>
								<a href="#">SignUp</a>
							</div>
							<ul className="widget">
								<li>
									<i className="fa fa-heart"></i>
								</li>
								<li>
									<i className="fa fa-shopping-cart"></i>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header